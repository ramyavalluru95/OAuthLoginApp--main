import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

export const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userGroup: {
    type: Mongoose.Schema.Types.String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: Mongoose.Schema.Types.String,
    required: true,
  },
});

UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toJSON", {
  virtuals: true,
});

export const UserModel = Mongoose.model("user", UserSchema);
