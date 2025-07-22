import session from "express-session";

const sessionSetUp = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
    store: MongoStore.create({
    mongoUrl: process.env.MONGO_DB_STRING,
    ttl: 60 * 60 // 1 hour
  }),
  cookie: { secure: false,
    maxAge:60000*60
   },
});

export default sessionSetUp;
