import React from 'react'
import {Typography, Row, Col, Space} from 'antd'
import './Info.scss'
import ReactAudioPlayer from 'react-audio-player';
import audioMix_1 from '../../utils/audio_examples/mix/audio_conversacion_031.wav';
import audioS1_1 from  '../../utils/audio_examples/s1/audio_conversacion_031.wav';
import audioS2_1 from  '../../utils/audio_examples/s2/audio_conversacion_031.wav';

import audioMix_2 from '../../utils/audio_examples/mix/audio_conversacion_055.wav';
import audioS1_2 from  '../../utils/audio_examples/s1/audio_conversacion_055.wav';
import audioS2_2 from  '../../utils/audio_examples/s2/audio_conversacion_055.wav';

import audioMix_3 from '../../utils/audio_examples/mix/audio_conversacion_105.wav';
import audioS1_3 from  '../../utils/audio_examples/s1/audio_conversacion_105.wav';
import audioS2_3 from  '../../utils/audio_examples/s2/audio_conversacion_105.wav';


const {Title, Text} = Typography

export default function Info() {
    return (
        <>
            <Col span={24}>
                <Title className="info-title">Info </Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify"><Text className="info-text">{ipsus1}</Text> </Col>
                    <Col className="col-justify"><Text className="info-text">{ipsus2}</Text> </Col>
                </Space>
                
                <br/><br/><br/>
                <Title className="info-title" level={3}>Ejemplo 1, Separación de voz mixta</Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify"><Text className="info-text">{vozMixta}</Text></Col>
                </Space>
                <br></br>
                <br></br>
                <Row>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio conversación:</Title>
                        <ReactAudioPlayer
                            src={audioMix_1}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio del sujeto 1:</Title>
                        <ReactAudioPlayer
                            src={audioS1_1}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio del sujeto 2:</Title>
                        <ReactAudioPlayer
                            src={audioS2_1}
                            controls
                        />
                    </Col>
                </Row>

                <br/><br/>
                <Title className="info-title" level={3}>Ejemplo 2, Separación de voz mujer-mujer </Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify"><Text className="info-text">{vozMujeres}</Text></Col>
                </Space>
                <br></br>
                <br></br>
                <Row>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio conversación:</Title>
                        <ReactAudioPlayer
                            src={audioMix_2}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio del sujeto 1:</Title>
                        <ReactAudioPlayer
                            src={audioS1_2}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio del sujeto 2:</Title>
                        <ReactAudioPlayer
                            src={audioS2_2}
                            controls
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>

                <Title className="info-title" level={3}>Ejemplo 3, Separación de voz varón-varón </Title>
                <Space direction="vertical" size="large">
                    <Col className="col-justify"><Text className="info-text">{vozVarones}</Text></Col>
                </Space>
                <br></br>
                <br></br>
                <Row>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio conversación:</Title>
                        <ReactAudioPlayer
                            src={audioMix_3}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio del sujeto 1:</Title>
                        <ReactAudioPlayer
                            src={audioS1_3}
                            controls
                        />
                    </Col>
                    <Col span={8}>
                        <Title className="info-title" level={5}>Audio del sujeto 2:</Title>
                        <ReactAudioPlayer
                            src={audioS2_3}
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

let ipsus1 = `PodcasText es una herramienta de separación y transcripción de audio desarrollada por alumnos Daniel Angeles, Nahúm Flores y Sebastián Tuesta pertenecientes a la Universidad Nacional Mayor de San Marcos con el objetivo de brindar una herramienta de libre acceso para que personas dedicadas al podcast, ya sea de manera profesional o amateur, tengan la posibilidad de obtener transcripciones de sus programas y así garantizar que estos sean accesibles para personas con diversos problemas auditivos.`

let ipsus2 = `Esta herramienta está basada en la solución del modelo de SVoice que es, a la fecha de presentado este trabajo, la U-NET con mejores resultados para el problema de separación de fuente de voz para dos interlocutores; y, fue entrenada con el Dataset DANF-VOICE, desarrollado por nosotros.`

let vozMixta = `Presentamos el caso de una separación de voces en una conversación mixta(voz masculina y voz femenina). 
En el primer audio denominado "Audio conversación" tenemos presente ambas voces combinadas y del cual se realizará la separación de 
voces. El segundo audio denominado "Audio del sujeto 1" se puede apreciar solo la voz femenina, y, por último, en el tercer audio 
denominado "Audio del sujeto 2" se puede apreciar solo la voz masculina. Ambos audios son producto de la separación de voces que fue 
utilizada en el audio "Conversación".`

let vozMujeres = `Presentamos el caso de una separación de voces en una conversación en el que las participantes son ambas mujeres. 
En el primer audio denominado "Audio conversación" tenemos presente ambas voces combinadas y del cual se realizará la separación de 
voces. El segundo audio denominado "Audio del sujeto 1" se puede apreciar solo la voz femenina, y, por último, en el tercer audio 
denominado "Audio del sujeto 2" se puede apreciar solo la voz masculina. Ambos audios son producto de la separación de voces que fue 
utilizada en el audio "Conversación".`

let vozVarones = `Presentamos el caso de una separación de voces en una conversación en el que los interlocutores son varones. 
En el primer audio denominado "Audio conversación" tenemos presente ambas voces combinadas y del cual se realizará la separación de 
voces. El segundo audio denominado "Audio del sujeto 1" se puede apreciar solo la voz femenina, y, por último, en el tercer audio 
denominado "Audio del sujeto 2" se puede apreciar solo la voz masculina. Ambos audios son producto de la separación de voces que fue 
utilizada en el audio "Conversación".`
