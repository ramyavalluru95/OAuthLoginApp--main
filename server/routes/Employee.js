import Express from "express";
import { EmployeeModel } from "../schema/EmployeeSchema.js";

const Router = Express.Router();

// get list of menu
Router.get("/employees", (req, res) => {
  EmployeeModel.find()
    .then((employees) => res.status(200).json({ success: true, employees }))
    .catch((err) => {
      console.error(`Exception in fetching employees GET- ${err}`);
      res.status(500).json({ success: false, message: `Error in fetching employees.` });
    });
});

// create Employee
Router.post("/employee", async (req, res) => {
  console.log("Creating new employee...", req.body);
  const { firstName, lastName, phoneNumber, email } = req?.body;

  // check if menu already exists for date. if available throw error
  const Employee = await EmployeeModel.find({ email, phoneNumber }).exec();
  if (Employee.length) {
    console.error(`Employee already exists`);
    return res.status(500).json({
      success: false,
      message: `Employee already exists`,
    });
  }

  const newEmployee = new EmployeeModel({
    firstName,
    lastName,
    phoneNumber,
    email,
  });

  newEmployee
    .save()
    .then((employee) => res.status(201).json({ success: true, employee }))
    .catch((err) => {
      console.error(`Exception in fetching employees POST- ${err}.`);
      res.status(500).json({ success: false, message: `Error in inserting menu.` });
    });
});

export default Router;
