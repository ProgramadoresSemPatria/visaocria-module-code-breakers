import Button from 'src/components/atoms/Button';
import useRenderRoadmapStore from 'src/store/renderRoadmapStore';
import useRenderRoadmap from 'src/store/renderRoadmapStore';

const PreModalNavigation = () => {
  const { setRoadmap } = useRenderRoadmapStore();
  return (
    <div className="flex gap-2 self-center">
      <Button
        onClick={() => setRoadmap('Algorithms')}
        className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200 text-[#e0e0e0] text-lg"
      >
        Algorithms
      </Button>
      <Button
        onClick={() => setRoadmap('Courses')}
        className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200 text-[#e0e0e0] text-lg"
      >
        Courses
      </Button>
    </div>
  );
};

export default PreModalNavigation;
