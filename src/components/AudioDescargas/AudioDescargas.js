import React, {useState} from "react";
import { Typography, Image, Divider  } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import download from '../../download-icon.png';
import "./AudioDescargas.scss";
import AWS from 'aws-sdk';
import {aws_constants} from '../../utils/constants'
const {Title, Text, Link} = Typography


export default function AudioDescargas(props) {

  const {name} = props;
  console.log('name',name)
  let audio = "prueba.txt"

  let name_download = name.substring(1, name.length - 4) ;
  let name_file = name.substring(0, name.length - 4) ;
  console.log(name_download);

  AWS.config.update({
    accessKeyId: aws_constants.ACCESS_KEY_ID,
    secretAccessKey: aws_constants.SECRET_ACCESS_KEY,
  });

  const downloadS3 = async (nameFile) => {

    const s3 = new AWS.S3();
    await s3.getObject(
      {Bucket: aws_constants.BUCKET_NAME, Key:`out/${nameFile}`},
      async function (error, data) {
        if (error != null) {
            console.log("Failed to retrieve an object: " + error);
        } else {
          console.log("Loaded " + data.ContentLength + " bytes")
          let blob=new Blob([data.Body], {type: data.ContentType});
          let link=document.createElement('a');
          link.href=window.URL.createObjectURL(blob);
          link.download=nameFile;
          link.click();
        }
      }
    );
  }
  


  return (
    <div className="modal-download-content">
      <div className="modal-download-content_head">
        <Image src={download} preview={false} className="modal-download-content_img-download"/>
        <br/>
        <Title level={2}>Listo para descargar</Title>
      </div>
        <Text>{`${name_file}_s1.wav`}</Text> <Link onClick={() => downloadS3(`${name_download}_s1.wav`)} target="_blank" className="modal-download-content_link-download" >Download</Link> <Divider className="modal-divider"/>
        <Text>{`${name_file}_s2.wav`}</Text> <Link onClick={() => downloadS3(`${name_download}_s2.wav`)} target="_blank" className="modal-download-content_link-download" >Download</Link> <Divider className="modal-divider"/>
        <Text>{`${name_file}_s1.txt`}</Text> <Link onClick={() => downloadS3(`${name_download}_s1.txt`)} target="_blank" className="modal-download-content_link-download" >Download</Link> <Divider className="modal-divider"/>
        <Text>{`${name_file}_s2.txt`}</Text> <Link onClick={() => downloadS3(`${name_download}_s2.txt`)} target="_blank" className="modal-download-content_link-download" >Download</Link> <Divider className="modal-divider"/>
    </div>
  );
}

