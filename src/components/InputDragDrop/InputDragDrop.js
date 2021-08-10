import React, {useRef} from 'react'
import './InputDragDrop.scss'
import upload from '../../upload-icon.png';
import { Button, notification, Typography} from 'antd';
import { Image  } from "antd";

const {Text} = Typography;

const openNotification = () => {
    notification.error({
      message: `Error al cargar archivo`,
      placement:'topLeft',
      description:
        'Usted debe arrastrar un archivo de audio de extensión .WAV',
    });
  };

export default function InputDragDrop(props) {
    const {subirAudio} = props;
    const inputFile = useRef(null);

    const dragOver = (e) =>{
        e.preventDefault();
    }
    const dragEnter = (e) =>{
        e.preventDefault();
    }
    const dragLeave = (e) =>{
        e.preventDefault();
    }
    const fileDrop = (e) =>{
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if(file.type == "audio/wav"){
            subirAudio(file);
        }
        else{
            openNotification();
        }
    }

    const buttonClick = () => {
        inputFile.current.click();
    }

    const inputFileChange = () => {
        const file = inputFile.current.files[0]
        subirAudio(file);
    }

    return (
        <>
            <div className="container">
                <div className="drop-container"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}                    
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                >
                    <div className="drop-message">
                        {/* <Image src={upload} preview={false} className="upload-icon"/> */}
                        <div className="modal-upload-content_head">
                            <Image src={upload} preview={false} className="modal-upload-content_img-download"/>
                            <br/>
                        </div>
                        {/* <div className="upload-icon"></div> */}
                        <Text className="container_text" >Arrastra el audio de tu podcast</Text>
                        <br></br>
                        <Text className="container_text_2">o</Text>
                        <br></br>
                        <div className="div-botton">
                            <Button size="large" type="primary" className="button-upload" onClick={buttonClick}>Buscar audio en el equipo</Button>
                            <input type="file" accept=".wav" ref={inputFile} onChange={inputFileChange} 
                            style={{display: 'none'}}/>

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
