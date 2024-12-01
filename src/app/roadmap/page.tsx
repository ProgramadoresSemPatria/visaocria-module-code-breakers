'use client';
import AboutModal from '@/components/organisms/RulesModal';
import RoadmapPage from '@/components/UIPages/RoadmapPage';
import useAboutModalStore from '@/store/AboutModalStore';

const Roadmap = () => {
  const { isAboutModalStore } = useAboutModalStore();
  return (
    <>
      {isAboutModalStore && <AboutModal />}
      <RoadmapPage />
    </>
  );
};

export default Roadmap;
