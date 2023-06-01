import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewResult = () => {
  const { register: searchRegister, handleSubmit: handleSearchSubmit } =
    useForm();

  // State for selected credit and corresponding max values
  // const [selectedCredit, setSelectedCredit] = useState("");
  const [maxValues, setMaxValues] = useState({
    writtenSecA: 0,
    writtenSecB: 0,
    ct1: 0,
    ct2: 0,
    present: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handle credit selection---------------------
  const handleCreditSelect = (event) => {
    const selectedCredit = event.target.value;
    // setSelectedCredit(selectedCredit);

    // Update max values based on selected credit
    let newMaxValues = {};
    if (selectedCredit === "3") {
      newMaxValues = {
        writtenSecA: 26.25,
        writtenSecB: 26.25,
        ct1: 7.5,
        ct2: 7.5,
        present: 7.5,
      };
    } else if (selectedCredit === "2") {
      newMaxValues = {
        writtenSecA: 17.5,
        writtenSecB: 17.5,
        ct1: 5,
        ct2: 5,
        present: 5,
      };
    } else if (selectedCredit === "1.5") {
      newMaxValues = {
        writtenSecA: 13.125,
        writtenSecB: 13.125,
        ct1: 3.75,
        ct2: 3.75,
        present: 3.75,
      };
    }
    setMaxValues(newMaxValues);
    console.log(newMaxValues);
  };
  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Check if entered value exceeds the maximum value
    const parsedValue = parseFloat(value);
    if (parsedValue > maxValues[name]) {
      event.target.value = maxValues[name]; // Set value to maximum
      setErrorMessage(`${name} value cannot exceed ${maxValues[name]}`);
    }
  };

  const searchStudent = (data) => {
    console.log("Search Form Data:", data);
    // Additional search logic here
  };

  const [saveRes, setSaveRes] = useState({});
  const saveResult = (event, name, studentId) => {
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
    // // Check if there are any error messages
    // if (errorMessage) {
    //   toast.error("Please fix the errors before submitting.");
    //   return;
    // }
    axios
      .post(
        "https://result-processing-server.vercel.app/v1/results/add-result",
        data
      )
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data.acknowledged) {
          toast.success("Marks Saved Successfully.");
          setSaveRes(data);
          form.reset();
          setErrorMessage("");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // ----------------get students-------------
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("https://result-processing-server.vercel.app/v1/students")
      .then((res) => {
        setStudents(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [saveRes]);
  // console.log(students);

  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get("https://result-processing-server.vercel.app/v1/results")
      .then((res) => {
        setResults(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [saveRes]);
  // console.log(results);

  return (
    <section className="py-10 px-10">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl text-gray-800 font-semibold">
          Add New Result :
        </h1>
        <Link to="/dashboard/results">
          <h3 className="text-xl text-blue-700 underline underline-offset-4 cursor-pointer hover:text-orange-500">
            Result List
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
              className=" bg-teal-400 text-base w-1/2 mt-16 py-3 rounded-3xl font-semibold uppercase"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>

      <div className="mt-10">
        {students
          .filter(
            (student) => !results.map((res) => res.name).includes(student.name)
          )
          .map((student) => {
            return (
              <div
                key={student._id}
                className=" w-full bg-gray-700 rounded-lg flex flex-col gap-4 px-3 py-3 text-base text-gray-50 mb-5"
              >
                <div className="flex justify-between"></div>
                <form
                  onSubmit={(event) =>
                    saveResult(event, student.name, student.studentId)
                  }
                  className="grid grid-cols-5 gap-5"
                >
                  <h2 className="w-44 overflow-hidden hover:overflow-visible">
                    Name :{" "}
                    <span className="text-orange-400">{student.name}</span>
                  </h2>
                  <p className="">
                    Student ID :{" "}
                    <span className="text-orange-400">{student.studentId}</span>
                  </p>
                  <select
                    name="course"
                    className="select select-sm bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                    defaultValue=""
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
                    <option>
                      Artificial Intelligence and Neural Computing
                    </option>
                  </select>
                  <select
                    name="credit"
                    className="select select-sm bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                    defaultValue=""
                    required
                    onChange={handleCreditSelect}
                  >
                    <option disabled value="" className="text-gray-100">
                      Select Credit
                    </option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1.5">1.5</option>
                  </select>
                  <button
                    className="text-base px-5 bg-teal-400 rounded-md text-gray-800 font-semibold cursor-pointer"
                    type="submit"
                  >
                    Save
                  </button>

                  <div className="flex justify-between col-span-5">
                    {/* writtenSecA */}
                    <input
                      type="number"
                      inputMode="numeric"
                      step="0.001"
                      name="writtenSecA"
                      required
                      placeholder="Written secA"
                      max={maxValues.writtenSecA}
                      className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md appearance-none"
                      onChange={handleInputChange}
                    />
                    {/* writtenSecB */}
                    <input
                      type="number"
                      inputMode="numeric"
                      step="0.001"
                      name="writtenSecB"
                      required
                      placeholder="Written secB"
                      max={maxValues.writtenSecB}
                      className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                      onChange={handleInputChange}
                    />
                    {/* ct-1 */}
                    <input
                      type="number"
                      inputMode="numeric"
                      step="0.001"
                      name="ct1"
                      required
                      placeholder="CT-1"
                      max={maxValues.ct1}
                      className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                      onChange={handleInputChange}
                    />
                    {/* ct-2 */}
                    <input
                      type="number"
                      inputMode="numeric"
                      step="0.001"
                      name="ct2"
                      required
                      placeholder="CT-2"
                      max={maxValues.ct2}
                      className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                      onChange={handleInputChange}
                    />
                    {/* present */}
                    <input
                      type="number"
                      inputMode="numeric"
                      step="0.001"
                      name="present"
                      required
                      placeholder="Present"
                      max={maxValues.present}
                      className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md "
                      onChange={handleInputChange}
                    />
                  </div>
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}
                </form>
              </div>
            );
          })}
        {/* {students?.map()} */}
      </div>
    </section>
  );
};

export default AddNewResult;
