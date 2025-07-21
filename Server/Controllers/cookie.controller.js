import { Router } from "express";
const router = Router();

const postCookie = (req, res) => {
  const { search } = req.body;
  console.log();
  res.json({ success: true, recentSearches: "hello winner" });
};

const getCookies = (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  req.session.visited = true;
  console.log("Session:", req.session);
  console.log("Session:", req.session.id);
  res.json({
    message: "Session active",
    session: req.session,
  });
};

export { postCookie, getCookies };
