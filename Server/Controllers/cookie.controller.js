import {Router} from 'express'
const router = Router();

router.post("/recent-searches", (req, res) => {
  const { search } = req.body;

  if (!req.session.recentSearches) {
    req.session.recentSearches = [];
  }

  let searches = req.session.recentSearches;

  // Add new search to session, max 4 items
  if (searches.includes(search)) {
    searches = searches.filter(item => item !== search);
  }
  searches.unshift(search);
  if (searches.length > 4) searches.pop();

  req.session.recentSearches = searches;

  res.json({ success: true, recentSearches: searches });
});

router.get("/recent-searches", (req, res) => {
  const searches = req.session.recentSearches || [];
  res.json({ recentSearches: searches });
});

export default router;
