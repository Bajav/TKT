export const storeUser = (req, res) => {
  const { userData } = req.body;
  console.log(req.body);
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