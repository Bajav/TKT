import { getAtlasDb } from "../../Config/DB/mongoAtlas.config.js";

export const checkDbStatus = (req, res) => {
  const atlasDb = getAtlasDb();
  const state = atlasDb.readyState;
  res.json({ dbState: state,message:"mongo atlas db state is active" });
};

