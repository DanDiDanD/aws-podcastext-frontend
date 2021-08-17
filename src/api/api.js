import clienteAxios from "../config/axios";
import {aws_constants} from '../utils/constants'


export const subirAudioAWS = async (name) => {
    try {
        const respuesta = await clienteAxios.post(`/separate?s3id=s3://${aws_constants.BUCKET_NAME}/in/${name}&aws_access_key_id=${aws_constants.ACCESS_KEY_ID}&aws_secret_access_key=${aws_constants.SECRET_ACCESS_KEY}`,{})
        return respuesta;
    } catch (error) {
        return error.response.data
    }
}

export const txtAudioAWS = async (name) => {
    try {
        const respuesta = await clienteAxios.post(`/translate?s3id=s3://${aws_constants.BUCKET_NAME}/out/${name}&aws_access_key_id=${aws_constants.ACCESS_KEY_ID}&aws_secret_access_key=${aws_constants.SECRET_ACCESS_KEY}`,{})
        return respuesta.data;
    } catch (error) {
        return error.response.data
    }
}