const express = require("express");
const router = express.Router();

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

router.get("/", AppController);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
