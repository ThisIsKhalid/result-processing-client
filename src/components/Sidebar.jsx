import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import boy from "../assets/boy.jpg";
import { AuthContext } from "../context/AuthProvider";

const Sidebar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("Succesfully Sign Out!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const pendingClass =
    "bg-teal-400 text-gray-700 w-36 py-3 rounded-lg font-bold uppercase text-center transition-colors ease-in-out duration-100";
  const activeClass =
    "bg-orange-400 text-white w-36 py-3 rounded-lg font-bold uppercase text-center transition-colors ease-in-out duration-300";

  return (
    <section className="w-[300px] bg-gray-800 shadow-xl py-10 px-2 relative">
      <div className="flex flex-col justify-center items-center border-b-2 pb-5">
        <img src={boy} alt="" className="w-20 h-20 rounded-full" />
        <h3 className="text-xl text-gray-50 mt-4">
          {user?.displayName ? user.displayName : "No Name"}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 gap-5">
        <NavLink
          to="/dashboard/add-student"
          className={({ isActive }) => (isActive ? activeClass : pendingClass)}
        >
          Add Student
        </NavLink>
        <NavLink
          to="/dashboard/add-teacher"
          className={({ isActive }) => (isActive ? activeClass : pendingClass)}
        >
          Add teacher
        </NavLink>
        <NavLink
          to="/dashboard/add-course"
          className={({ isActive }) => (isActive ? activeClass : pendingClass)}
        >
          Add course
        </NavLink>
        <NavLink
          to="/dashboard/add-result"
          className={({ isActive }) => (isActive ? activeClass : pendingClass)}
        >
          Add New Result
        </NavLink>
      </div>
      <div className="absolute bottom-3 left-2 flex items-center justify-between w-full text-sm">
        <button className="text-gray-200 uppercase border-b border-gray-200 pb-1">
          <Link to="/">Home</Link>
        </button>
        
        {location.pathname !== "/dashboard" && (
          <button className="text-gray-200 uppercase border-b border-gray-200 pb-1">
            <Link to="/dashboard">Dashboard</Link>
          </button>
        )}

        <button
          onClick={handleLogOut}
          className=" text-teal-400 mr-4 uppercase border-b border-teal-400 pb-1"
        >
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
