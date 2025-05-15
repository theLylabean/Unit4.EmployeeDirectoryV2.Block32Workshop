import express from 'express';
import { getEmployees, addEmployees } from '../db/employees.js';
const router = express.Router();
const employees = getEmployees();

router.route("/").get((req, res) => {
    res.send(employees);
  });
  
  // Note: this middleware has to come first! Otherwise, Express will treat
  // "random" as the argument to the `id` parameter of /employees/:id.
  router.route("/random").get((req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.send(employees[randomIndex]);
  });
  
  router.route("/:id").get((req, res) => {
    const { id } = req.params;
    
    // req.params are always strings, so we need to convert `id` into a number
    // before we can use it to find the employee
    const employee = employees.find((e) => e.id === +id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    } else {
    res.send(employee);
    }  
});

router.route('/').post((req, res) => {
    if(!req.body) {
        return res.status(400).send('Request Body Not Found.');
    }
    const { employee } = req.body;
    const newEmployee = addEmployees(employee);
    if (!newEmployee) {
        return res.status(409).send('Employee already exists.');
    }
    if(!employee || typeof employee !== 'string') {
        return res.status(400).send('Invalid employee name.');
    } else {
        addEmployees(employee);
        res.status(201).send(employees);
    }
})

export default router