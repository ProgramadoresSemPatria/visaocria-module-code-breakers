'use client';

import { useMemo } from 'react';
import ReactFlow, { Controls, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';
import RoadmapNode from 'src/components/molecules/RoadmapNodes';
import { useReactFlowContext } from 'src/hooks/useReactFlowContext';
import useRoadmapModalStore from 'src/store/RoadmapModalStore';
import useRoadmapData from 'src/hooks/useRoadmapData';

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
  const { roadmapData } = useRoadmapData();

  const nodes: Node<RoadmapNodeData>[] = roadmapData.flatMap((element) =>
    element.subjects.map((subject) => ({
      id: subject.source.toString(),
      data: { label: subject.title },
      type: 'custom',
      position: { x: 0, y: 0 },
    })),
  );

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () => getLayoutedElements(nodes, initialEdges),
    [nodes],
  );

  const { onInit } = useReactFlowContext();
  const { setIsRoadmapModalOpen, setSelectedNode } = useRoadmapModalStore();

  const handleNodeClick = async (event: React.MouseEvent, node: Node) => {
    setSelectedNode(node.data);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRoadmapModalOpen(true);
  };

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        nodeTypes={nodeTypes}
        onInit={onInit}
        onNodeClick={handleNodeClick}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
