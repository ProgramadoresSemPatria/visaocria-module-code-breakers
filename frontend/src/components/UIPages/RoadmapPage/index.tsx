import Diagram from 'src/components/organisms/Diagram';
import PreModalRoadmap from 'src/components/organisms/PreModalRoadmap';

const RoadmapPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <Diagram />
        <PreModalRoadmap />
      </div>
    </>
  );
};

export default RoadmapPage;
