export const getCookies = (req, res) => {
  console.log(req.body);
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  };

  req.session.visited = true;
  console.log("Session:", req.session);
  console.log("Session:", req.session.id);
  res.json({
    message: "Session active",
    session: req.session,
  });
};
