import Image from 'next/image';
import React from 'react';
import { NodeProps, Handle, Position } from 'reactflow';
import LinkItem from 'src/components/atoms/LinkItem';

interface CoursesNodeData {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image_url: string;
  link_url: string;
  matter:
    | 'DATA_STRUCTURES_AND_ALGORITHMS'
    | 'SYSTEM_DESIGN'
    | 'PYTHON'
    | 'FULL_STACK_DEVELOPMENT'
    | 'OBJECT_ORIENTED_DESIGN';
}

const difficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-500 text-white';
    case 'Medium':
      return 'bg-yellow-500 text-[#000000B3]';
    case 'Hard':
      return 'bg-red-500';
    default:
      return 'bg-gray-500 text-white';
  }
};

const CoursesNode: React.FC<NodeProps<CoursesNodeData>> = ({ data }) => {
  const { image_url, title, description, duration, link_url, difficulty } =
    data;

  return (
    <div className="w-[300px] rounded-lg overflow-hidden shadow-xl bg-gray-800 text-center hover:shadow-md hover:bg-[#13181c] hover:ring-1 hover:ring-blue-600 transition-colors transform duration-200 ease-linear">
      <Handle type="target" position={Position.Top} id="target" />
      <div className="relative h-[200px]">
        <LinkItem href={link_url} target="_noblank noreferrer">
          <Image
            src={image_url ?? ''}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </LinkItem>
      </div>

      <div className="flex flex-col h-[200px] p-4 text-white">
        <div>
          <h2 className="text-[21px] font-bold mb-2">{title}</h2>
          <p className="text-gray-300 mb-4 text-[16px]">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-center gap-4">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
            {duration}
          </span>
          <span
            className={`px-2 py-1 rounded text-sm font-bold ${difficultyColor(difficulty)} `}
          >
            {difficulty}
          </span>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} id="source" />
    </div>
  );
};

export default CoursesNode;
