import { Link, NavLink } from 'react-router-dom';
import boy from '../assets/boy.jpg'

const Sidebar = () => {
    const pendingClass =
      "bg-teal-400 text-gray-700 w-36 py-3 rounded-lg font-bold uppercase text-center transition-colors ease-in-out duration-100";
    const activeClass =
      "bg-orange-400 text-white w-36 py-3 rounded-lg font-bold uppercase text-center transition-colors ease-in-out duration-300";

    return (
      <section className="w-[300px] bg-gray-800 h-screen shadow-xl py-10 px-2 relative">
        <div className="flex flex-col justify-center items-center border-b-2 pb-5">
          <img src={boy} alt="" className="w-20 h-20 rounded-full" />
          <h3 className="text-xl text-gray-50 mt-4">Khalid Hasan</h3>
        </div>
        <div className="flex flex-col items-center justify-center mt-16 gap-5">
          <NavLink
            to="/dashboard/add-student"
            className={({ isActive }) =>
              isActive ? activeClass : pendingClass
            }
          >
            Add Student
          </NavLink>
          <NavLink
            to="/dashboard/add-teacher"
            className={({ isActive }) =>
              isActive ? activeClass : pendingClass
            }
          >
            Add teacher
          </NavLink>
          <NavLink
            to="/dashboard/add-course"
            className={({ isActive }) =>
              isActive ? activeClass : pendingClass
            }
          >
            Add course
          </NavLink>
        </div>
        <div className="absolute bottom-3 left-2 flex items-center justify-between w-full">
          <Link className=" text-teal-400 uppercase border-b border-teal-400 pb-1">
            Log Out
          </Link>
          <button className="text-gray-200 uppercase mr-4 border-b border-gray-200 pb-1">
            <Link to='/dashboard'>Dashboard</Link>
          </button>
        </div>
      </section>
    );
};

export default Sidebar;