import Diagram from 'frontend/src/components/organisms/Diagram';
import PreModalRoadmap from 'frontend/src/components/organisms/PreModalRoadmap';

const RoadmapPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <Diagram />
        <PreModalRoadmap/>
      </div>
    </>
  );
};

export default RoadmapPage;
