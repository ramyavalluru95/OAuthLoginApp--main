import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

export const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
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

EmployeeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

EmployeeSchema.set("toJSON", {
  virtuals: true,
});

export const EmployeeModel = Mongoose.model("employee", EmployeeSchema);
