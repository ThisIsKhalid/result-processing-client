import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import AddCourse from "../pages/AddCourse";
import DashboardHome from "../pages/DashboardHome";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddStudent from "../pages/AddStudent";
import AddTeacher from "../pages/AddTeacher";
import Courses from "../pages/Courses";
import PrivateRoute from "./privateRoutes";
import AddNewResult from "../pages/AddNewResult";
import ResultList from "../pages/ResultList";
import TeachersList from "../pages/TeachersList";
import StudentList from "../pages/StudentList";
import CourseList from "../pages/CourseList";

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
      {
        path: "/dashboard/courses",
        element: <Courses />,
      },
    ],
  },
]);

export default router;
