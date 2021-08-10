import React from "react";
import { Modal as ModalAntd } from "antd";
import './Modal.scss'

export default function Modal(props) {
  // console.log(props)
  const { children, title, isVisible, setIsVisible, footer, ...other } = props;
  return (
    <ModalAntd
      className='modal-download'
      closable={false}
      centered
      visible={isVisible}
      onCancel={() => {setIsVisible(false)}}
      footer={footer}
      // maskClosable={false}
      destroyOnClose={true}
      width={460}
      {...other}
    >
      {children}
    </ModalAntd>
  );
}

