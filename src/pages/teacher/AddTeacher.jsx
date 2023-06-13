import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fromSubmit = (data) => {
    axios
      .post(
        "https://result-processing-server.vercel.app/v1/teachers/add-teacher",
        data
      )
      .then((res) => {
        // console.log(res.data.data.acknowledged);
        if (res.data.data.acknowledged) {
          toast.success("Teacher Added Successfully.");
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
          Add New Teacher :
        </h1>
        <Link to="/dashboard/teachers">
          <h3 className="text-xl text-blue-700 underline underline-offset-4 cursor-pointer hover:text-orange-500">
            Teachers List
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
          {/* teacher id */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Teacher ID</span>
            </label>
            <input
              type="text"
              placeholder="ID"
              {...register("teacherId", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter only numbers",
                },
              })}
              className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
            />
            {errors.teacherId && (
              <span className="text-red-500">{errors.teacherId.message}</span>
            )}
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  message: "Please enter your email",
                },
              })}
              className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <input
            className="btn bg-teal-400 text-base w-full mt-10"
            type="submit"
            value="Add Teacher"
          />
        </form>
      </div>
    </section>
  );
};

export default AddTeacher;
