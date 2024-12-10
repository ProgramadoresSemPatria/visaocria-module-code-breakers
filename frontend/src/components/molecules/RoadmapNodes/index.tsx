import React from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

interface RoadmapNodeData {
  label: string;
  description?: string;
}

const RoadmapNode: React.FC<NodeProps<RoadmapNodeData>> = ({ data }) => {
  return (
    <div className="p-4 bg-[#2a2a40] text-white rounded-lg flex flex-col text-center text-sm hover:cursor-pointer h-[62px] min-w-[200px] justify-center">
      <Handle type="target" position={Position.Top} id="target" />

      <strong>{data.label}</strong>
      {data.description && <p>{data.description}</p>}

      <Handle type="source" position={Position.Bottom} id="source" />
    </div>
  );
};

export default RoadmapNode;
