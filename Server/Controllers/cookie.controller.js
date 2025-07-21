import {Router} from 'express'
const router = Router();

const postCookie = (req,res) => {
  const { search } = req.body;
 console.log()
  res.json({ success: true, recentSearches: "hello winner" });
};

const getCookies = (req,res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.json({ recentSearches: "hello winnner again" });
};

export {postCookie,getCookies};
