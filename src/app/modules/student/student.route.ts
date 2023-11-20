import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControllers.createStudent);
router.get('/getStudents', studentControllers.getAllStudentsData);
router.get('/getStudents/:studentId', studentControllers.getSingleStudentData);

export const StudentsRoutes = router;
