import Express from "express";
import Employee from "./Employee.js";
import User from "./User.js";

const Router = Express.Router();

const apiContext = "/api/v1/";
Router.use(apiContext, Employee);
Router.use(apiContext, User);

export default Router;
