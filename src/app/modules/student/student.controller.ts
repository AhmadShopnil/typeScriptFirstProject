import { Request, Response } from 'express';
import { studentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service func to send this data
    const result = await studentServices.createStudentIntoDB(studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentsData = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllSudentsDataFromDb();

    res.status(200).json({
      success: true,
      message: 'students data get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleSudentDataFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'student data get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudentsData,
  getSingleStudentData,
};
