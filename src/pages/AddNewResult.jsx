import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddNewResult = () => {
  const { register: searchRegister, handleSubmit: handleSearchSubmit } =
    useForm();
  const { register: resultRegister, handleSubmit: handleResultSubmit } =
    useForm();

  const searchStudent = (data) => {
    console.log("Search Form Data:", data);
    // Additional search logic here
  };

  const saveResult = (data) => {
    console.log("Result Form Data:", data);
    // Additional save result logic here
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
                <option>C</option>
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
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
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
                <option>Chemistry</option>
                <option>Physics</option>
                <option>Biology</option>
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
                className="text-base px-5 bg-teal-400 rounded-md text-gray-800 font-semibold"
                type="submit"
                value="Save"
              />
            </form>
          </div>
        </div>
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
                className="text-base px-5 bg-teal-400 rounded-md text-gray-800 font-semibold"
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
