import session from "express-session";
import MongoStore from 'connect-mongo';

const encodedPassword = encodeURIComponent('d!*%XJMLJBN29PP');
const sessionSetUp = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
    store: MongoStore.create({
    mongoUrl: `mongodb+srv://tkt_development:${encodedPassword}@tktdb.arfqreg.mongodb.net/?retryWrites=true&w=majority&appName=TKTDB`,
    ttl: 60 * 60 // 1 hour
  }),
  cookie: { secure: false,
    maxAge:60000*60
   },
});

export default sessionSetUp;
