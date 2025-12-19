export const storeUser = (req, res) => {
  const { userData } = req.body;
  console.log(req.body);
  // if(req.body){
  //   req.session.userID =req.body;
  // }
  // if (!userData) {
  //   return res.status(400).json({ error: "Missing userData in request body." });
  // }
  // const { uid, email, displayName } = userData;
  // req.session.uid = uid;
  // req.session.views = (req.session.views || 0) + 1;
  // req.session.visited = true;
  res.json({
    message: "Session active",
    session: req.session,
  });
};
export const findCookies = (req, res) => {
  res.json({
    message: "Session active",
    session: req.session,
  });
};