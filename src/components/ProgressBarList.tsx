import React from 'react'
import ProgressBar from './ProgressBar';

const ProgressBarList = ({ courses }: { courses: { name: string; progress: number }[] }) => {
  return (
    <div className="space-y-4">
    {courses.map((course, index) => (
      <ProgressBar key={index} name={course.name} progress={course.progress} />
    ))}
  </div>
  )
}

export default ProgressBarList