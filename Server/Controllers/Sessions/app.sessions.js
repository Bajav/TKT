const setSession = (req, res) => {
  console.log(req.session);
  res.send("sesssion post is working");
};

const getSession = (req, res) => {
  console.log(req.session.name);
  res.send("sesssion get is working");
};

export {setSession,getSession};