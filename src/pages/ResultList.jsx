import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ResultList = () => {
  const { register: searchRegister, handleSubmit: handleSearchSubmit } =
    useForm();

  const searchStudent = (data) => {
    console.log("Search Form Data:", data);
    // Additional search logic here
  };

  const editResult = (event, name, studentId) => {
    event.preventDefault();
    const form = event.target;

    const course = form.elements.course.value;
    const credit = form.elements.credit.value;
    const writtenSecA = form.writtenSecA.value;
    const writtenSecB = form.writtenSecB.value;
    const ct1 = form.ct1.value;
    const ct2 = form.ct2.value;
    const present = form.present.value;

    const data = {
      name,
      studentId,
      writtenSecA,
      writtenSecB,
      ct1,
      ct2,
      present,
      course,
      credit,
    };
    console.log(data);
  };

  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/v1/results")
      .then((res) => {
        setResults(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(results);

  return (
    <section className="py-10 px-10">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl text-gray-800 font-semibold">Result List :</h1>
        <Link to="/dashboard/add-result">
          <h3 className="text-xl text-blue-700 underline underline-offset-4 cursor-pointer hover:text-orange-500">
            Add New Result
          </h3>
        </Link>
      </div>

      <div className="mt-14">
        <form onSubmit={handleSearchSubmit(searchStudent)}>
          <div className="grid grid-cols-3 gap-5">
            {/* Section------------ */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm uppercase">Section</span>
              </label>
              <select
                className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                {...searchRegister("section")}
                defaultValue=""
              >
                <option disabled value="" className="text-gray-100">
                  Select Section
                </option>
                <option>A</option>
                <option>B</option>
              </select>
            </div>
            {/* Session------------ */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm uppercase">Session</span>
              </label>
              <select
                className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                {...searchRegister("session")}
                defaultValue=""
              >
                <option disabled value="" className="text-gray-100">
                  Select Session
                </option>
                <option>2015-2016</option>
                <option>2016-2017</option>
                <option>2017-2018</option>
                <option>2018-2019</option>
                <option>2019-2020</option>
              </select>
            </div>
            {/* course------------ */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm uppercase">Course</span>
              </label>
              <select
                className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                {...searchRegister("course")}
                defaultValue=""
              >
                <option disabled value="" className="text-gray-100">
                  Select Course
                </option>
                <option>Information System Analysis and Design</option>
                <option>Database Management System Lab</option>
                <option>Database Management System</option>
                <option>Wireless Communication Lab</option>
                <option>Wireless Communication</option>
                <option>Microprocessor Lab</option>
                <option>Computer Architecture and Microprocessor</option>
                <option>Artificial Intelligence and Neural Computing</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <input
              className=" bg-teal-400 text-base w-1/2 mt-16 py-3 rounded-3xl font-semibold uppercase cursor-pointer"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>

      <div className="mt-10">
        {results?.map((result) => {
          const {
            _id,
            name,
            studentId,
            writtenSecA,
            writtenSecB,
            ct1,
            ct2,
            present,
            credit,
            course,
          } = result;

          const written = parseFloat(writtenSecA) + parseFloat(writtenSecB);
          const ct = parseFloat(ct1) + parseFloat(ct2);
          const sum = written + ct + parseFloat(present);

          let res;
          if (credit === "1.5") {
            res = (100 / 75) * sum;
            // console.log(res);
          } else if (credit === "2") {
            res = (100 / 75) * sum;
            // console.log(res1);
          } else if (credit === "4") {
            res = (100 / 75) * sum;
            // console.log(res2);
          }
          const total = parseFloat(res.toFixed(2));

          let grade;
          if (total >= 80.0) {
            grade = "A+";
          } else if (total >= 75.0) {
            grade = "A";
          } else if (total >= 70.0) {
            grade = "A-";
          } else if (total >= 65.0) {
            grade = "B+";
          } else if (total >= 60.0) {
            grade = "B";
          } else if (total >= 55.0) {
            grade = "B-";
          } else if (total >= 50.0) {
            grade = "C+";
          } else if (total >= 45.0) {
            grade = "C-";
          } else if (total >= 40.0) {
            grade = "D";
          } else {
            grade = "F";
          }
          // console.log(total, grade);

          return (
            <div
              key={_id}
              className=" w-full bg-gray-700 rounded-lg flex flex-col gap-4 px-3 py-3 text-base text-gray-50 mb-5"
            >
              <div className="flex justify-between"></div>
              <form
                onSubmit={(event) => editResult(event, name, studentId)}
                className="grid grid-cols-4 gap-5"
              >
                <h2 className="w-44 overflow-hidden hover:overflow-visible">
                  Name : <span className="text-orange-400">{name}</span>
                </h2>
                <p className="">
                  Student ID :{" "}
                  <span className="text-orange-400">{studentId}</span>
                </p>
                <select
                  name="course"
                  className="select select-sm bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  defaultValue={course}
                  required
                >
                  <option disabled value="" className="text-gray-100">
                    Select Course
                  </option>
                  <option>Information System Analysis and Design</option>
                  <option>Database Management System Lab</option>
                  <option>Database Management System</option>
                  <option>Wireless Communication Lab</option>
                  <option>Wireless Communication</option>
                  <option>Microprocessor Lab</option>
                  <option>Computer Architecture and Microprocessor</option>
                  <option>Artificial Intelligence and Neural Computing</option>
                </select>
                <select
                  name="credit"
                  className="select select-sm bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  defaultValue={credit}
                  required
                >
                  <option disabled value="" className="text-gray-100">
                    Select Credit
                  </option>
                  <option>1.5</option>
                  <option>2</option>
                  <option>3</option>
                </select>

                <div className="flex  justify-between col-span-4">
                  {/* written sec a */}
                  <input
                    type="text"
                    name="writtenSecA"
                    required
                    placeholder="Written secA"
                    defaultValue={writtenSecA}
                    className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                  />
                  {/* written sec a */}
                  <input
                    type="text"
                    name="writtenSecB"
                    required
                    placeholder="Written secB"
                    defaultValue={writtenSecB}
                    className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                  />
                  {/* ct-1 */}
                  <input
                    type="text"
                    name="ct1"
                    required
                    placeholder="CT-1"
                    defaultValue={ct1}
                    className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                  />
                  {/* ct-2 */}
                  <input
                    type="text"
                    name="ct2"
                    required
                    placeholder="CT-2"
                    defaultValue={ct2}
                    className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                  />
                  {/* present */}
                  <input
                    type="text"
                    name="present"
                    required
                    placeholder="Present"
                    defaultValue={present}
                    className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                  />
                </div>
                <div className="col-span-4 flex justify-between items-center">
                  <p className="text-base flex items-center gap-1">
                    Total : <span className="text-orange-400 font-bold text-xl">{grade}</span>
                  </p>
                  <button
                    className="text-base px-5 bg-teal-400 rounded-md text-gray-800 font-semibold cursor-pointer"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResultList;
