import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center bg-slate-100 homebg relative">
      <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>
      <div className="z-50">
        <h1 className="text-5xl font-bold uppercase text-[#F29228] bg-gray-950 py-3 px-3 rounded-lg ">
          Information and Communication Engineering
        </h1>
        <p className="text-xl mt-5 text-gray-300 inline-block bg-gray-950 py-2 px-5 rounded-lg ">
          University of{" "}
          <span className="font-semibold uppercase">Rajshahi</span>
        </p>

        <div className="mt-10">
          {user?.displayName ? (
            <>
              <Link to="/dashboard">
                <button className="bg-gray-950 text-[#F29228] px-7 py-4 rounded-lg mr-5 text-base font-semibold uppercase">
                  Dashboard
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className="bg-gray-950 text-[#F29228] px-7 py-4 rounded-lg mr-5 text-base font-semibold uppercase">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-gray-950 text-[#F29228] px-7 py-4 rounded-lg mr-5 text-base font-semibold uppercase">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
