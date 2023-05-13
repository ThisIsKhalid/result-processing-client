import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-slate-100 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

DashboardLayout.loader = { ".jsx": "jsx" };
