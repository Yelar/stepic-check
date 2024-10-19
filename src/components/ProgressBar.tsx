import React from 'react'

const ProgressBar = ({ name, progress }: { name: string; progress: number }) => {
  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg">
    <div className="flex justify-between mb-2">
      <span className="text-white">{name}</span>
      <span className="text-white">{progress}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
  )
}

export default ProgressBar