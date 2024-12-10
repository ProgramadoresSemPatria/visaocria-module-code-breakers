import React from 'react';

const ProgressBar = ({
  progress,
  width,
}: {
  progress: number;
  width: string;
}) => {
  return (
    <div
      className={`bg-gray-800 rounded-full h-5 overflow-hidden ml-4 self-center mt-4 ${width}`}
    >
      <div
        className={`h-full transition-all duration-300 ease-in-out bg-white`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
