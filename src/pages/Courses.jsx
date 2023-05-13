import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const Courses = () => {
    const { user} = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            <h1>Chemistry</h1>
            <h1>Chemistry</h1>
            <h1>Chemistry</h1>
        </div>
    );
};

export default Courses;