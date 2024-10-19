import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseProps {
  name: string;
  progress: number;
  onClick: () => void;
  maxScale: number;
}

const Course: React.FC<CourseProps> = ({ name, progress, onClick, maxScale }) => {
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleClick = () => {
    setShowPlusOne(true);
    onClick();
    setTimeout(() => setShowPlusOne(false), 1000); // Hide after 1 second
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer p-4 mb-2 bg-gray-800 rounded-lg shadow-sm hover:bg-gray-700 transition duration-200"
    >
      <h3 className="text-lg font-medium text-gray-200">{name}</h3>
      <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${(progress / maxScale) * 100}%` }}
        ></div>
      </div>
      <AnimatePresence>
        {showPlusOne && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 mt-2 mr-2 text-green-400 font-bold"
          >
            +1
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Course;