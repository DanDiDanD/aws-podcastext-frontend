import React from 'react'
import {Typography, Row, Col, Space} from 'antd'
import './Info.scss'
import ReactAudioPlayer from 'react-audio-player';
import audioMix_1 from '../../utils/audio_examples/mix/audio_conversacion_031.wav';
import audioS1_1 from  '../../utils/audio_examples/s1/audio_conversacion_031.wav';
import audioS2_1 from  '../../utils/audio_examples/s2/audio_conversacion_031.wav';

// import audioMix_2 from '../../utils/audio_examples/mix/audio_conversacion_031.wav';
// import audioS1_2 from  '../../utils/audio_examples/s1/audio_conversacion_031.wav';
// import audioS2_2 from  '../../utils/audio_examples/s2/audio_conversacion_031.wav';

// import audioMix_3 from '../../utils/audio_examples/mix/audio_conversacion_031.wav';
// import audioS1_3 from  '../../utils/audio_examples/s1/audio_conversacion_031.wav';
// import audioS2_4 from  '../../utils/audio_examples/s2/audio_conversacion_031.wav';



const {Title, Text} = Typography

export default function Info() {
    return (
        <>
            <Col span={24}>
                <Title>Info </Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify"><Text className="info-text">{ipsus1}</Text> </Col>
                    <Col className="col-justify"><Text className="info-text">{ipsus2}</Text> </Col>
                </Space>
                
                <br/><br/><br/>
                <Title level={3}>Ejemplo 1: </Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify">
                        <Text className="info-text">{ejemplo1}</Text>
                    </Col>
                </Space>
                <br></br>
                <br></br>
                <Row>
                    <Col span={8}>
                        <Title level={5}>Audio conversación:</Title>
                        <ReactAudioPlayer
                            src={audioMix_1}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title level={5}>Audio del sujeto 1:</Title>
                        <ReactAudioPlayer
                            src={audioS1_1}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title level={5}>Audio del sujeto 2:</Title>
                        <ReactAudioPlayer
                            src={audioS2_1}
                            controls
                        />
                    </Col>
                </Row>

                <br/><br/>
                <Title level={3}>Ejemplo 2: </Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify"><Text className="info-text">{ejemplo1}</Text></Col>
                </Space>
                <br></br>
                <br></br>
                <Row>
                    <Col span={8}>
                        <Title level={5}>Audio conversación:</Title>
                        <ReactAudioPlayer
                            src={audioMix_1}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title level={5}>Audio del sujeto 1:</Title>
                        <ReactAudioPlayer
                            src={audioS1_1}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title level={5}>Audio del sujeto 2:</Title>
                        <ReactAudioPlayer
                            src={audioS2_1}
                            controls
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </Col>
        </>
    )
}

let ipsus1 = `Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar".`
let ipsus2 = `Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" Rambo en el pecho del Jambo y el Jambo sin poder respirar (Shh), mis chavale' diciéndome "B10, no, que la vas a liar" `

let ejemplo1 = `Presentamos el caso de una separación de voces en una conversación mixta(voz masculina y voz femenina). 
En el primer audio denominado "Audio conversación" tenemos presente ambas voces combinadas y del cual se realizará la separación de 
voces. El segundo audio denominado "Audio del sujeto 1" se puede apreciar solo la voz femenina, y, por último, en el tercer audio 
denominado "Audio del sujeto 2" se puede apreciar solo la voz masculina. Ambos audios son producto de la separación de voces que fue 
utilizada en el audio "Conversación".`
