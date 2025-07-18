import session from "express-session";

const sessionSetUp = session({
  secret: "keyboard cat",          
  resave: false,                  
  saveUninitialized: true,
  cookie: { secure: false },   
});

export default sessionSetUp;
