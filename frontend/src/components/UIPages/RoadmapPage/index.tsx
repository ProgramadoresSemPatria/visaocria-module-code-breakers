import Diagram from 'src/components/organisms/Diagram';
import DiagramCourses from 'src/components/organisms/DiagramCourses';
import PreModalRoadmap from 'src/components/organisms/PreModalRoadmap';
import useRenderRoadmapStore from 'src/store/renderRoadmapStore';
import useRenderRoadmap from 'src/store/renderRoadmapStore';

const RoadmapPage = () => {
  const { selectedRoadmap } = useRenderRoadmapStore();

  return (
    <>
      <div className="flex flex-row">
        {selectedRoadmap === 'Algorithms' ? <Diagram /> : <DiagramCourses />}

        <PreModalRoadmap />
      </div>
    </>
  );
};

export default RoadmapPage;
