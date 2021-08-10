const {
    REACT_APP_BUCKET_NAME,
    REACT_APP_DIR_NAME_UPLOAD,
    REACT_APP_DIR_NAME_DOWNLOAD,
    REACT_APP_REGION,
    REACT_APP_ACCESS_KEY_ID,
    REACT_APP_SECRET_ACCESS_KEY,

    REACT_APP_BACKEND_URL,
    NODE_ENV
} = process.env;

const environment = NODE_ENV;

const BASE_URL = REACT_APP_BACKEND_URL;

const aws_constants = {
    BUCKET_NAME: REACT_APP_BUCKET_NAME,
    DIR_NAME_UPLOAD: REACT_APP_DIR_NAME_UPLOAD,
    DIR_NAME_DOWNLOAD: REACT_APP_DIR_NAME_DOWNLOAD,
    REGION: REACT_APP_REGION,
    ACCESS_KEY_ID: REACT_APP_ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: REACT_APP_SECRET_ACCESS_KEY,
}

export {environment,aws_constants,BASE_URL}