const DashboardHome = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 px-16 py-12">
      <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
        <h1 className="text-7xl font-bold">500</h1>
        <p className="text-3xl uppercase font-semibold">Students</p>
      </div>
      <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
        <h1 className="text-7xl font-bold">500</h1>
        <p className="text-3xl uppercase font-semibold">Teacher</p>
      </div>
      <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
        <h1 className="text-7xl font-bold">500</h1>
        <p className="text-3xl uppercase font-semibold">Courses</p>
      </div>
      <div className=" bg-teal-400 rounded-lg py-16 flex items-center justify-center flex-col gap-3 shadow-lg">
        <h1 className="text-7xl font-bold">500</h1>
        <p className="text-3xl uppercase font-semibold">Result</p>
      </div>
    </div>
  );
};

export default DashboardHome;
