import Express from "express";
import Employee from "./Employee.js";

const Router = Express.Router();

const apiContext = "/api/v1/";
Router.use(apiContext, Employee);

export default Router;
