import Title from '@/components/atoms/Title';
import PreModalNavigation from '@/components/molecules/PreModalNavigation';
import PreModalPreferences from '@/components/molecules/PreModalPreferences';

const PreModalRoadmap = () => {
  return (
    <div className="w-[350px] p-4 bg-[#2a2a40] flex-grow text-center flex-col flex gap-4">
      <Title level={5} className="text-[#e0e0e0] text-md">
        Select Roadmap
      </Title>
      <PreModalNavigation />
      <PreModalPreferences />
    </div>
  );
};

export default PreModalRoadmap;
