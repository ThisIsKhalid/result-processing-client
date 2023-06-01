import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("https://result-processing-server.vercel.app/v1/teachers")
      .then((res) => {
        setTeachers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(teachers);

  return (
    <section className="py-10 px-10">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl text-gray-800 font-semibold">
          Teachers List :
        </h1>
        <Link to="/dashboard/add-teacher">
          <h3 className="text-xl text-blue-700 underline underline-offset-4 cursor-pointer hover:text-orange-500">
            Add New Teacher
          </h3>
        </Link>
      </div>

      <div className="mt-14">
        <div className="overflow-x-auto ">
          <table className="table w-full rounded-lg ">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-gray-800 text-gray-50"></th>
                <th className="bg-gray-800 text-gray-50">Name</th>
                <th className="bg-gray-800 text-gray-50">ID</th>
                <th className="bg-gray-800 text-gray-50">Email</th>
                <th className="bg-gray-800 text-gray-50">Section</th>

                <th className="bg-gray-800 text-gray-50">Delete</th>
              </tr>
            </thead>
            <tbody className="text-red-700">
              {teachers?.map((teacher, index) => (
                <>
                  <tr>
                    <th>{index + 1}</th>
                    <th>{teacher.name}</th>
                    <td>{teacher.teacherId}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.section}</td>

                    <td>
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TeachersList;
