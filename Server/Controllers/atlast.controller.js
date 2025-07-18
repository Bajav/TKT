import {getAtlasDb} from '../Config/DB/mongoAtlas.config.js'
import { createUserModel } from "../Models/User.js";

export const checkDbStatus = (req, res) => {
  const atlasDb = getAtlasDb();
  const state = atlasDb.readyState; 
  res.json({ dbState: state });
};


export const createUserHandler = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const UserModel = createUserModel(atlasDb);

    const { name, email } = req.body;

    const newUser = await UserModel.create({ name, email });
    res.status(201).json({ success: true, message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Failed to create user", error: error.message });
  }
};

