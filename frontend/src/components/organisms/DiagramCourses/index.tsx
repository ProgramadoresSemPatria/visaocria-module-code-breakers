'use client';

import { useMemo } from 'react';
import ReactFlow, { Controls, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';
import CoursesNodes from 'src/components/molecules/CoursesNodes';
import { useReactFlowContext } from 'src/hooks/useReactFlowContext';
import useRoadmapModalStore from 'src/store/RoadmapModalStore';
import useCoursesData from 'src/hooks/useCoursesData';

interface CoursesNodeData {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image_url: string;
  link_url: string;
  source: string;
  matter:
    | 'DATA_STRUCTURES_AND_ALGORITHMS'
    | 'SYSTEM_DESIGN'
    | 'PYTHON'
    | 'FULL_STACK_DEVELOPMENT'
    | 'OBJECT_ORIENTED_DESIGN';
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const nodeWidth = 300;
  const nodeHeight = 500;

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
    if (!nodeWithPosition) {
      console.error(`Node not found in dagre layout: ${node.id}`);
      return;
    }
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
  { id: 'e1-11', source: '1', target: '11' },
  { id: 'e3-11', source: '3', target: '4' },
  { id: 'e3-9', source: '3', target: '9' },
];

const DiagramCourses: React.FC = () => {
  const { coursesData } = useCoursesData();
  const arrayNodes = [1, 3, 2, 11, 4, 9];
  const nodeTypes = useMemo(() => ({ custom: CoursesNodes }), []);
  const nodes: Node<CoursesNodeData>[] = coursesData
    .filter((course) => arrayNodes.includes(course.id))
    .map((course) => ({
      id: course.id.toString(),
      data: {
        id: course.id,
        title: course.title,
        description: course.description,
        duration: course.duration,
        difficulty: course.difficulty,
        image_url: course.image_url,
        link_url: course.link_url,
        matter: course.matter,
        source: course.source,
      },
      type: 'custom',
      position: { x: 0, y: 0 },
    }));

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () => getLayoutedElements(nodes, initialEdges),
    [nodes],
  );

  const { onInit } = useReactFlowContext();

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        nodeTypes={nodeTypes}
        onInit={onInit}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default DiagramCourses;
