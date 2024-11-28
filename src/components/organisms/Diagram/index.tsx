'use client';

import React, { useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';
import RoadmapNode from '@/components/molecules/RoadmapNodes';

interface RoadmapNodeData {
  label: string;
  description?: string;
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const nodeWidth = 182;
  const nodeHeight = 80;

  dagreGraph.setGraph({ rankdir: 'TB' });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

const initialNodes: Node<RoadmapNodeData>[] = [
  {
    id: '1',
    data: { label: 'Arrays & Hashing' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Two Pointers' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '3',
    data: { label: 'Stack' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '4',
    data: { label: 'Binary Search' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '5',
    data: { label: 'Sliding Window' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '6',
    data: { label: 'Linked List' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '7',
    data: { label: 'Trees' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '8',
    data: { label: 'Tries' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '9',
    data: { label: 'Heap / Priority Queue' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '10',
    data: { label: 'Backtracking' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '11',
    data: { label: 'Intervals' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '12',
    data: { label: 'Greedy' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '13',
    data: { label: 'Advanced Graphs' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '14',
    data: { label: 'Graphs' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '15',
    data: { label: '1-D DP' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '16',
    data: { label: '2-D DP' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '17',
    data: { label: 'Bit Manipulation' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
  {
    id: '18',
    data: { label: 'Math & Geometry' },
    type: 'custom',
    position: { x: 0, y: 0 },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-3', source: '2', target: '6' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e7-10', source: '7', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
  { id: 'e9-12', source: '9', target: '12' },
  { id: 'e9-13', source: '9', target: '13' },
  { id: 'e10-14', source: '10', target: '14' },
  { id: 'e14-13', source: '14', target: '13' },
  { id: 'e10-15', source: '10', target: '15' },
  { id: 'e14-16', source: '14', target: '16' },
  { id: 'e15-16', source: '15', target: '16' },
  { id: 'e14-18', source: '14', target: '18' },
  { id: 'e15-17', source: '15', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e17-18', source: '17', target: '18' },
];

const Diagram: React.FC = () => {
  const nodeTypes = useMemo(() => ({ custom: RoadmapNode }), []);
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () => getLayoutedElements(initialNodes, initialEdges),
    [],
  );

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
