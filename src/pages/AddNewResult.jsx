import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewResult = () => {
  const { register: searchRegister, handleSubmit: handleSearchSubmit, } =
    useForm();
  const { register: resultRegister, handleSubmit: handleResultSubmit, reset } =
    useForm();

  const searchStudent = (data) => {
    console.log("Search Form Data:", data);
    // Additional search logic here
  };

  const saveResult = (data) => {
    // console.log("Result Form Data:", data);
    const identity = {name: 'khalid', reg: '18228180534'}
    const marksWithId = {...identity, ...data}
    // console.log(marksWithId);
    axios
      .post("http://localhost:5000/v1/results/add-result", marksWithId)
      .then((res) => {
        // console.log(res.data.data.acknowledged);
        if (res.data.data.acknowledged) {
          toast.success("Marks Saved Successfully.");
          reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <div className="mb-5">
          <div className="h-12 w-full bg-gray-700 rounded-lg flex justify-between items-center px-2 text-base text-gray-50">
            <h2>Khalid Hasan</h2>
            <p>18228180531</p>
            <form
              onSubmit={handleResultSubmit(saveResult)}
              className="flex gap-5"
            >
              {/* written */}
              <input
                type="text"
                placeholder="Written"
                {...resultRegister("written", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter only numbers",
                  },
                })}
                className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md w-28"
              />
              {/* ct-1 */}
              <input
                type="text"
                placeholder="CT-1"
                {...resultRegister("ct1", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter only numbers",
                  },
                })}
                className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md w-28"
              />
              {/* ct-2 */}
              <input
                type="text"
                placeholder="CT-2"
                {...resultRegister("ct2", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter only numbers",
                  },
                })}
                className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md w-28"
              />
              {/* present */}
              <input
                type="text"
                placeholder="Present"
                {...resultRegister("present", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter only numbers",
                  },
                })}
                className="bg-gray-100 focus:bg-gray-100 text-gray-800 outline-none focus:outline-orange-500 input-sm border-none rounded-md w-28"
              />
              <input
                className="text-base px-5 bg-teal-400 rounded-md text-gray-800 font-semibold cursor-pointer"
                type="submit"
                value="Save"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewResult;
