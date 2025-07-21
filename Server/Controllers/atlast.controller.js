import { getAtlasDb } from "../Config/DB/mongoAtlas.config.js";
import { createUserModel } from "../Models/User.js";

export const checkDbStatus = (req, res) => {
  const atlasDb = getAtlasDb();
  const state = atlasDb.readyState;
  res.json({ dbState: state });
};

export const createUserHandler = async (req, res) => {
  const { username, email, sessionId } = req.body;
  try {
    const atlasDb = getAtlasDb();
    const UserModel = createUserModel(atlasDb);
    const newUser = await UserModel.create({
      username: "testuser",
      email: "test@example.com",
      session: [{ sessionId: "abc123" }],
      recentSearches: {
        flights: [],
        hotels: [],
        stays: [],
        activities: [],
      },
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const findUsers = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const UserModel = createUserModel(atlasDb);
    const users = await UserModel.find();
    console.log(users);
    console.log("users found");
    res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    res.status(404).send("no users found");
  }
};
