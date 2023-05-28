import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const useDataFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return data;
};


const DashboardHome = () => {
  const teachers = useDataFetch("http://localhost:5000/v1/teachers");
  const students = useDataFetch("http://localhost:5000/v1/students");
  const courses = useDataFetch("http://localhost:5000/v1/courses");
  const results = useDataFetch("http://localhost:5000/v1/results");

  const teachersLength = teachers.length;
  const studentsLength = students.length;
  const coursesLength = courses.length;
  const resultsLength = results.length;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 px-16 py-12">
      <Link to="/dashboard/students">
        <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
          <h1 className="text-7xl font-bold">{studentsLength}</h1>
          <p className="text-3xl uppercase font-semibold">Students</p>
        </div>
      </Link>
      <Link to="/dashboard/teachers">
        <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
          <h1 className="text-7xl font-bold">{teachersLength}</h1>
          <p className="text-3xl uppercase font-semibold">Teacher</p>
        </div>
      </Link>
      <Link to="/dashboard/courses">
        <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
          <h1 className="text-7xl font-bold">{coursesLength}</h1>
          <p className="text-3xl uppercase font-semibold">Courses</p>
        </div>
      </Link>
      <Link to="/dashboard/results">
        <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
          <h1 className="text-7xl font-bold">{resultsLength}</h1>
          <p className="text-3xl uppercase font-semibold">Result</p>
        </div>
      </Link>
    </div>
  );
};

export default DashboardHome;
