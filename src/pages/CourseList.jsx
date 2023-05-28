import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/v1/courses")
      .then((res) => {
        setCourses(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(courses);
  return (
    <section className="py-10 px-10">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl text-gray-800 font-semibold">Course List :</h1>
        <Link to="/dashboard/add-course">
          <h3 className="text-xl text-blue-700 underline underline-offset-4 cursor-pointer hover:text-orange-500">
            Add New Course
          </h3>
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-4">
        {courses?.map((cr) => {
          const {
            course,
            attendenceMarks,
            courseCode,
            credit,
            ctMarks,
            sectionA,
            sectionB,
            semister,
            writtenMarks,
            year,
          } = cr;
          return (
            <>
              <div className="card  bg-gray-800 shadow-xl text-gray-50">
                <div className="card-body">
                  <h2 className="card-title text-orange-500">{course}</h2>
                  <div className="flex flex-col gap-1">
                    <p>
                      Course Code:{" "}
                      <span className="text-red-400 text-lg">
                        {" "}
                        {courseCode}
                      </span>
                    </p>
                    <p>
                      Credit :{" "}
                      <span className="text-red-400 text-lg"> {credit}</span>
                    </p>
                    <p>
                      Semister :{" "}
                      <span className="text-red-400 text-lg"> {semister}</span>
                    </p>
                    <p>
                      Year :{" "}
                      <span className="text-red-400 text-lg"> {year}</span>
                    </p>
                    <p>
                      Writtrn Marks :{" "}
                      <span className="text-red-400 text-lg">
                        {" "}
                        {writtenMarks}
                      </span>
                    </p>
                    <p>
                      CT Marks :{" "}
                      <span className="text-red-400 text-lg"> {ctMarks}</span>
                    </p>
                    <p>
                      Attendence :{" "}
                      <span className="text-red-400 text-lg">
                        {" "}
                        {attendenceMarks}
                      </span>
                    </p>
                    <p>
                      Teacher(sec-A) :{" "}
                      <span className="text-red-400 text-lg"> {sectionA}</span>
                    </p>
                    <p>
                      Teacher(sec-B) :{" "}
                      <span className="text-red-400 text-lg"> {sectionB}</span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default CourseList;
