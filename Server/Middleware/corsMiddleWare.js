import cors from 'cors';

const corOptions = {
    origin :"http://localhost:5173",
    methods : ["GET","POST","PUT","DELETE"],
    credentials: true
};

const corsMiddleware = cors(corOptions);

export default corsMiddleware;