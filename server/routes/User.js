import Express from "express";
import { UserModel } from "../schema/UserSchema.js";

const Router = Express.Router();

// get list of menu
Router.get("/users", (req, res) => {
  UserModel.find()
    .then((users) => res.status(200).json({ success: true, users }))
    .catch((err) => {
      console.error(`Exception in fetching users GET- ${err}`);
      res.status(500).json({ success: false, message: `Error in fetching users.` });
    });
});

// create User
Router.post("/user", async (req, res) => {
  const { userName, phoneNumber, email, userGroup } = req?.body;

  // check if menu already exists for date. if available throw error
  const User = await UserModel.find({ userName, userGroup }).exec();
  if (User.length) {
    console.error(`User already exists`);
    return res.status(500).json({
      success: false,
      message: `User already exists`,
    });
  }

  const newUser = new UserModel({
    userName,
    userGroup,
    phoneNumber,
    email,
  });

  newUser
    .save()
    .then((user) => res.status(201).json({ success: true, user }))
    .catch((err) => {
      console.error(`Exception in fetching users POST- ${err}.`);
      res.status(500).json({ success: false, message: `Error in inserting user.` });
    });
});

Router.post("/delete-users", async (req, res) => {
  const { ids } = req.body;
  if (!Array.isArray(ids)) return res.status(400).send("Invalid input");

  try {
    await UserModel.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: "Users deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default Router;
