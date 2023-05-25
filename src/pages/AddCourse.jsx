import { useForm } from "react-hook-form";


const AddCourse = () => {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
     const fromSubmit = (data) => console.log(data);
     
    return (
      <section className="py-10 px-10">
        <h1 className="text-4xl text-gray-800 font-semibold">
          Add New Course :
        </h1>
        <div className="mt-14">
          <form onSubmit={handleSubmit(fromSubmit)}>
            <div className="grid grid-cols-3 gap-5">
              {/* course */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">Course</span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("course", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Course
                  </option>
                  <option>Information System Analysis and Design</option>
                  <option>Database Management System Lab</option>
                  <option>Database Management System</option>
                  <option>Wireless Communication Lab</option>
                  <option>Wireless Communication</option>
                  <option>Microprocessor Lab</option>
                  <option>Computer Architecture and Microprocessor</option>
                  <option>Artificial Intelligence and Neural Computing</option>
                </select>
              </div>
              {/* course code */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">
                    Course Code
                  </span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("courseCode", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Course Code
                  </option>
                  <option>ICE4151</option>
                  <option>ICE4142</option>
                  <option>ICE4141</option>
                  <option>ICE4132</option>
                  <option>ICE4131</option>
                  <option>ICE4122</option>
                  <option>ICE4121</option>
                  <option>ICE4111</option>
                </select>
              </div>
              {/* year */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">Year</span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("year", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Year
                  </option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
              {/* semister */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">Semister</span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("semister", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Semister
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
              {/* select teacher sec A */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">
                    Teacher Sec-A
                  </span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("sectionA", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Teacher Sec-A
                  </option>
                  <option>GR</option>
                  <option>FA1</option>
                  <option>FA2</option>
                  <option>none</option>
                </select>
              </div>
              {/* section teacher b */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">
                    Teacher Sec-B
                  </span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("sectionB", {
                    required: true,
                  })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Teacher Sec-B
                  </option>
                  <option>GR</option>
                  <option>FA1</option>
                  <option>FA2</option>
                  <option>none</option>
                </select>
              </div>
              {/* Assing Mark Written */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assign Mark(Written)</span>
                </label>
                <input
                  type="text"
                  placeholder="Mark(Written)"
                  {...register("writtenMarks", {
                    required: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter only numbers",
                    },
                  })}
                  className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
                />
                {errors.writtenMarks && (
                  <span className="text-red-500">
                    {errors.writtenMarks.message}
                  </span>
                )}
              </div>
              {/* Assing Mark CT */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assign Mark(CT)</span>
                </label>
                <input
                  type="text"
                  placeholder="Mark(CT)"
                  {...register("ctMarks", {
                    required: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter only numbers",
                    },
                  })}
                  className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
                />
                {errors.ctMarks && (
                  <span className="text-red-500">{errors.ctMarks.message}</span>
                )}
              </div>
              {/* Assing Mark Attendence */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assign Mark(Attendence)</span>
                </label>
                <input
                  type="text"
                  placeholder="Mark(Attendence)"
                  {...register("attendenceMarks", {
                    required: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter only numbers",
                    },
                  })}
                  className="bg-gray-700 focus:bg-gray-700 text-gray-50 outline focus:outline-orange-500 w-full input"
                />
                {errors.attendenceMarks && (
                  <span className="text-red-500">
                    {errors.attendenceMarks.message}
                  </span>
                )}
              </div>
              {/* select credit */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">
                    select credit
                  </span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base outline focus:outline-orange-500"
                  {...register("credit", {
                    required: true,
                  })}
                  defaultValue=""
                >
                  <option disabled value="" className="text-gray-100">
                    Select Credit
                  </option>
                  <option>1.5</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <input
                className="btn bg-teal-400 text-base w-1/2 mt-16"
                type="submit"
                value="Add Course"
              />
            </div>
          </form>
        </div>
      </section>
    );
};

export default AddCourse;