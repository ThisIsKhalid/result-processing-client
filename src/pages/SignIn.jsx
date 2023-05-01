import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data, e) => {};
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
          <h2 className="text-xl text-center">Register</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
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
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to="/signup" className="text-secondary">
              {" "}
              Signup
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
