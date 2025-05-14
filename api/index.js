import express from 'express';
import { getEmployees, addEmployees } from '#db/employees';
const router = express.Router();

router.route('/').get((req, res) => {
    const employees = getEmployees();
    res.send(employees);
})

router.route('/').post((req, res) => {
    if(!req.body) {
        return res.status(400).send('Request Body Not Found.');
    }
    const { employee } = req.body;
    if(typeof(employee) === '') {
        addEmployees(employee);
        res.status(201).send(`Successfully added employee ${employee}`);
    }
})