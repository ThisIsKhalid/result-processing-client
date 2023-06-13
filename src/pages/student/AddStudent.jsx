import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fromSubmit = (data) => {
    axios
      .post(
        "https://result-processing-server.vercel.app/v1/students/add-student",
        data
      )
      .then((res) => {
        // console.log(res.data.data.acknowledged);
        if (res.data.data.acknowledged) {
          toast.success("Student Added Successfully.");
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
          Add New Student :
        </h1>
        <Link to="/dashboard/students">
          <h3 className="text-xl text-blue-700 underline underline-offset-4 cursor-pointer hover:text-orange-500">
            Students List
          </h3>
        </Link>
      </div>
      <div className="mt-14 w-1/2 mx-auto">
        <form onSubmit={handleSubmit(fromSubmit)}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: true,
                pattern: {
                  message: "Please enter your name",
                },
              })}
              className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          {/* student id/roll */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Studect ID</span>
            </label>
            <input
              type="text"
              placeholder="ID/Roll"
              {...register("studentId", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter only numbers",
                },
              })}
              className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
            />
            {errors.studentId && (
              <span className="text-red-500">{errors.studentId.message}</span>
            )}
          </div>
          {/* Session------------ */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm uppercase">Session</span>
            </label>
            <select
              className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
              {...register("session", { required: true })}
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
          {/* Semester------------ */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm uppercase">Semester</span>
            </label>
            <select
              className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
              {...register("semester", { required: true })}
              defaultValue=""
            >
              <option disabled value="" className="text-gray-100">
                Select Semester
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>

          <input
            className="btn bg-teal-400 text-base w-full mt-10"
            type="submit"
            value="Add Student"
          />
        </form>
      </div>
    </section>
  );
};

export default AddStudent;
