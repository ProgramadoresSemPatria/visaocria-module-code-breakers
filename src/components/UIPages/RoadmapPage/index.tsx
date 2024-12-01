import Diagram from '@/components/organisms/Diagram';
import PreModalRoadmap from '@/components/organisms/PreModalRoadmap';

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
