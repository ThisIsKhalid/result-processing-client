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
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("course")}
                >
                  <option disabled selected className="text-gray-100">
                    Select Course
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
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
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("courseCode")}
                >
                  <option disabled selected className="text-gray-100">
                    Select Course Code
                  </option>
                  <option>419</option>
                  <option>987</option>
                  <option>123</option>
                  <option>546</option>
                  <option>234</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm uppercase">Year</span>
                </label>
                <select
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("year")}
                >
                  <option disabled selected className="text-gray-100">
                    Select Year
                  </option>
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
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("semister")}
                >
                  <option disabled selected className="text-gray-100">
                    Select Semister
                  </option>
                  <option>1</option>
                  <option>2</option>
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
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("sectionA")}
                >
                  <option disabled selected className="text-gray-100">
                    Select Teacher Sec-A
                  </option>
                  <option>Momin</option>
                  <option>Niloy</option>
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
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("sectionB", {
                    required: true,
                  })}
                >
                  <option disabled selected className="text-gray-100">
                    Select Teacher Sec-B
                  </option>
                  <option>Momin</option>
                  <option>Niloy</option>
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
                  className="select w-full bg-gray-700 text-gray-50 text-base"
                  {...register("credit", {
                    required: true,
                  })}
                >
                  <option disabled selected className="text-gray-100">
                    Select Credit
                  </option>
                  <option>1</option>
                  <option>1.5</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <input
                className="btn bg-teal-400 text-base w-1/2 mt-16"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </section>
    );
};

export default AddCourse;