'use client';
import RoadmapModal from 'frontend/src/components/organisms/RoadmapModal';
import AboutModal from 'frontend/src/components/organisms/RulesModal';
import RoadmapPage from 'frontend/src/components/UIPages/RoadmapPage';
import useAboutModalStore from 'frontend/src/store/AboutModalStore';
import useRoadmapModalStore from 'frontend/src/store/RoadmapModalStore';

const Roadmap = () => {
  const { isAboutModalStore } = useAboutModalStore();
  const { isRoadmapModalOpen } = useRoadmapModalStore();
  return (
    <>
      {isRoadmapModalOpen && <RoadmapModal />}
      {isAboutModalStore && <AboutModal />}
      <RoadmapPage />
    </>
  );
};

export default Roadmap;
