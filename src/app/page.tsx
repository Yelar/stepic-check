'use client'
import Course from "./Components/Course";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(1000);
  const [courses, setCourses] = useState([
    { name: "C++ Краш Курс", progress: 66 },
    { name: "Java why not", progress: 20 },
    { name: "Python", progress: 0 },
  ]);

  const maxScale = 100; // Define the maximum scale for the progress

  const addCourse = () => {
    setCourses([...courses, { name: "New Course", progress: 0 }]);
  };

  const handleCourseClick = (index: number) => {
    const newCourses = [...courses];
    newCourses[index].progress = Math.min(newCourses[index].progress + 0.5, maxScale);
    setCourses(newCourses);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-md mx-auto shadow-lg rounded-2xl overflow-hidden">
        <div className="flex justify-end mb-6 p-4 bg-gray-700 rounded-t-2xl">
          <div className="bg-gray-600 rounded-full px-4 py-2 flex items-center shadow-md">
            <span className="text-yellow-400 mr-2">🪙</span>
            <span className="font-semibold">{balance}</span>
          </div>
        </div>
  
        <h2 className="text-2xl mb-4 text-center text-gray-200 font-semibold">
          Tap on the desired course to fill the scale
        </h2>
  
        <div>
          {courses.map((course, index) => (
            <Course
              key={index}
              name={course.name}
              progress={course.progress}
              onClick={() => handleCourseClick(index)}
              maxScale={maxScale}
            />
          ))}
        </div>
  
        <button
          onClick={addCourse}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg mt-4 hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-md"
        >
          ADD COURSE
        </button>
  
        <div className="mt-6 text-right text-gray-400 p-4 bg-gray-700 rounded-b-2xl">
          LIMIT: 100/10000
        </div>
      </div>
    </div>
  )
}