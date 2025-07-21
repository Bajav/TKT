import session from "express-session";

const sessionSetUp = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false,
    maxAge:60000*60
   },
});

export default sessionSetUp;
