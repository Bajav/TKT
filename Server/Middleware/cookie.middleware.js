import cookieParser from 'cookie-parser';

const cookieParserMiddleware = cookieParser('your-secret-key'); // same secret as sessions

export default cookieParserMiddleware;