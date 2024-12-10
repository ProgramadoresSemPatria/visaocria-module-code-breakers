import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const HoverInfoBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <div
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaExternalLinkAlt className="w-4 h-4 text-[#aa8017]" />
      </div>

      {isHovered && (
        <div className="absolute bottom-full mb-2 w-32 bg-gray-700 text-white text-sm text-center px-2 py-1 rounded-lg shadow-lg">
          External Link
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-[6px] border-t-[6px] border-transparent border-b-[6px] border-gray-700" />
        </div>
      )}
    </div>
  );
};

export default HoverInfoBox;
