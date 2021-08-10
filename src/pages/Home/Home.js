import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import {Typography, Form, Input, Button, notification, Upload, Space} from 'antd'
import Modal from "../../components/Modal";
import Info from '../../components/Info'
import AudioDescargas from '../../components/AudioDescargas'
import InputDragDrop from '../../components/InputDragDrop'
import {uploadFile}  from 'react-s3'
import {aws_constants} from '../../utils/constants'
import { subirAudioAWS, txtAudioAWS } from "../../api/api";
import Swal from 'sweetalert2'

const {Title, Text} = Typography

const url = localStorage.getItem('URL');

const config = {
    bucketName: aws_constants.BUCKET_NAME,
    dirName: aws_constants.DIR_NAME_UPLOAD,
    region: aws_constants.REGION,
    accessKeyId: aws_constants.ACCESS_KEY_ID,
    secretAccessKey: aws_constants.SECRET_ACCESS_KEY
}


export const Home = () => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const subirAudio = async (file) => {
        try{
            const name = file.name;
            Swal.fire({
                title: 'Separando voces',
                html: 'Esto puede tardar unos minutos...',
                didOpen: () => {
                    Swal.showLoading()
                  },
                onAfterClose () {
                  Swal.hideLoading()
                },
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
              })

            await uploadFile(file, config)
            .then(async res => {
                const respuesta = await subirAudioAWS(name);
                console.log(respuesta)
                Swal.close()
                descargarAudios(name);
                console.log(res)}
            )
            .catch(err =>{
                Swal.close()
                console.log(err)}
            )
        }
        catch (err){
            console.log(err)
        }
    }

    const descargarAudios = (name) => {
        setIsVisibleModal(true);
        setModalTitle("Listo para descargar");
        setModalContent(
          <AudioDescargas
            setIsVisibleModal={setIsVisibleModal}
            name={name}
          />
        );
      };

    return (
        <div>
            <Title>Subir audio </Title>
            <InputDragDrop subirAudio={subirAudio}/>
            <Info/>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                footer={false}
            >
                {modalContent}
            </Modal>
        </div>
    )

}