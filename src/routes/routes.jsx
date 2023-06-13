import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import PrivateRoute from "./privateRoutes";
import DashboardHome from "../pages/home/DashboardHome";
import AddStudent from "../pages/student/AddStudent";
import StudentList from "../pages/student/StudentList";
import AddTeacher from "../pages/teacher/AddTeacher";
import TeachersList from "../pages/teacher/TeachersList";
import AddCourse from "../pages/courses/AddCourse";
import CourseList from "../pages/courses/CourseList";
import AddNewResult from "../pages/result/AddNewResult";
import ResultList from "../pages/result/ResultList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/add-student",
        element: <AddStudent />,
      },
      {
        path: "/dashboard/students",
        element: <StudentList />,
      },
      {
        path: "/dashboard/add-teacher",
        element: <AddTeacher />,
      },
      {
        path: "/dashboard/teachers",
        element: <TeachersList />,
      },
      {
        path: "/dashboard/add-course",
        element: <AddCourse />,
      },
      {
        path: "/dashboard/courses",
        element: <CourseList />,
      },
      {
        path: "/dashboard/add-result",
        element: <AddNewResult />,
      },
      {
        path: "/dashboard/results",
        element: <ResultList />,
      },
    ],
  },
]);

export default router;
