import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.route("/employees").get(getEmployees).post(createEmployee);

router
  .route("/employees/:id")
  .get(getEmployee)
  .delete(deleteEmployee)
  .patch(updateEmployee);

export default router;
