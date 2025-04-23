import cors from 'cors';

const corOptions = {
    origin :"",
    methods : ["GET","POST","PUT","DELETE"],
    credentials: true
};

const corsMiddleware = cors(corOptions);

export default corsMiddleware;