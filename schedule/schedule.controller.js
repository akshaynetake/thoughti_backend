const express = require('express');
const router = express.Router();

const ScheduleService = require('./schedule.service');

class ScheduleController {
    constructor() {
        router.get('/get_users', this.getUsers);
        router.get('/get_tasks', this.getTasks);
    }

    getUsers = async (req, res) => {
        const result = await ScheduleService.getUser();
        res.json(result);
    }

    getTasks = async (req, res) => {
        const result = await ScheduleService.getTasks();
        res.json(result);
    }
}

new ScheduleController();
module.exports = router;