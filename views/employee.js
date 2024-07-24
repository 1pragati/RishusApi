const express = require("express");

const router = express.Router();

const employeeController = require('../controllers/employeeController.js')

router.post("/addEmp", employeeController.addEmployee);

router.post("/employeeLogin", employeeController.employeeLogin);

module.exports = router;