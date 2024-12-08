import Button from 'frontend/src/components/atoms/Button';
import Subheading from 'frontend/src/components/atoms/Subheading';
import Title from 'frontend/src/components/atoms/Title';
import useRoadmapModalStore from 'frontend/src/store/RoadmapModalStore';

const RoadmapModal = () => {
  const { setIsRoadmapModalOpen } = useRoadmapModalStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-end z-50">
      <section className="bg-[#1e1e2f] w-[80%] h-full shadow-lg rounded-md flex flex-col">
        <header className="w-full flex flex-col p-2 min-h-full">
          <div className="flex items-center">
            <Button onClick={() => setIsRoadmapModalOpen(false) } className='px-3 py-1 bg-red-300 text-sm rounded-[4px]'>ESC</Button>
            <Title
              level={6}
              className="text-gray-300 text-2xl mx-auto font-bold"
            >
              Arrays & Hashing
            </Title>
          </div>
          <Subheading className="text-gray-300 text-lg mx-auto pl-6 font-bold">
            (0 / 9)
          </Subheading>
        </header>
      </section>
    </div>
  );
};

export default RoadmapModal;
