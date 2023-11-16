import { useEffect, useState } from "react";
import SingleCourses from "./SingleCourses";

const Courses = () => {
  const [courses, setCurses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCurses(data);
      });
  }, []);

  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl">Our courses</h2>
      <p className="text-center ">
        Exploring Our Curriculum: Unveiling a Spectrum of Courses
      </p>

      <div className="grid mr-4 ml-4 md:mr-0 md:ml-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6 mx-auto mt-6">
        {courses.map((item) => (
          <SingleCourses key={item._id} item={item}></SingleCourses>
        ))}
      </div>
    </div>
  );
};

export default Courses;
