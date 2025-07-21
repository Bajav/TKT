import { getAtlasDb } from "../Config/DB/mongoAtlas.config.js";
import { createUserModel } from "../Models/User.js";

export const checkDbStatus = (req, res) => {
  const atlasDb = getAtlasDb();
  const state = atlasDb.readyState;
  res.json({ dbState: state });
};

export const createUserHandler = async (req, res) => {
  console.log(req.body);
  // const { username, email, sessionId } = req.body;
  // let username,email,sessionId;
  // try {
  //   const atlasDb = getAtlasDb();
  //   const UserModel = createUserModel(atlasDb);

  //   // Check if user already exists
  //   const existingUser = await UserModel.findOne({
  //     $or: [{ username }, { email }],
  //   });

  //   if (existingUser) {
  //     return res.status(200).json({
  //       success: false,
  //       message: "User already exists",
  //       user: existingUser,
  //     });
  //   }

  //   // Create new user if not found
  //   const newUser = await UserModel.create({
  //     username:username,
  //     email:email,
  //     session: [{ sessionId }],
  //     recentSearches: {
  //       flights: [],
  //       hotels: [],
  //       stays: [],
  //       activities: [],
  //     },
  //   });

  //   res.status(201).json({
  //     success: true,
  //     message: "User created successfully",
  //     user: newUser,
  //   });
  // } catch (error) {
  //   console.error("Error creating user:", error);
  //   res.status(500).json({
  //     success: false,
  //     message: "Failed to create user",
  //     error: error.message,
  //   });
  // }
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
