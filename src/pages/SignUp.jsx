import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = (data, event) => {
    event.preventDefault();
    const { email, password, name } = data;
    // ----------create user
    createUser(email, password)
      .then(() => {
        // ------------update user
        updateUserProfile({
          displayName: name,
        })
          .then(() => {
            toast.success("Welcome to Result Hub");
            reset();
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <section className="w-full min-h-screen py-10 bg-slate-100 px-5">
      <div className="text-center">
        <h1 className="text-3xl uppercase font-bold text-gray-800">
          Information and Communication Engineering
        </h1>
        <p className="text-xl font-semibold text-gray-500">
          University of Rajshahi
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-96 p-7 shadow-md border border-gray-100 rounded-lg bg-gray-800">
          <h2 className="text-xl text-center text-gray-50">Register</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-50">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-50">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-50">Teacher ID</span>
              </label>
              <input
                type="text"
                {...register("teacherId", {
                  required: "Teacher ID is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-50">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 chracters long",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <input
              className="btn btn-primary w-full max-w-xs mt-5"
              type="submit"
              value="Register"
            />
          </form>
          <p className="mt-5 text-center text-gray-50">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500">
              {" "}
              Signin
            </Link>
          </p>
          <p className="text-slate-300 underline text-center mt-2 text-sm">
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
