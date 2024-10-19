import ProgressBarList from "@/components/ProgressBarList";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(1000);
  const [courses, setCourses] = useState([
    { name: "C++ Краш Курс", progress: 66 },
    { name: "Java why not", progress: 20 },
    { name: "Python", progress: 0 },
  ]);

  const addCourse = () => {
    setCourses([...courses, { name: "New Course", progress: 0 }]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-end mb-6">
          <div className="bg-gray-700 rounded-full px-4 py-2 flex items-center">
            <span className="text-yellow-400 mr-2">🪙</span>
            <span>{balance}</span>
          </div>
        </div>

        <h2 className="text-xl mb-4 text-center text-orange-500">
          Тапай на нужный курс, чтобы восполнить шкалу
        </h2>

        <ProgressBarList courses={courses} />

        <button
          onClick={addCourse}
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
        >
          ДОБАВИТЬ КУРС
        </button>

        <div className="mt-6 text-right text-red-500">
          ЛИМИТ: 100/10000
        </div>
      </div>
    </div>)
}
