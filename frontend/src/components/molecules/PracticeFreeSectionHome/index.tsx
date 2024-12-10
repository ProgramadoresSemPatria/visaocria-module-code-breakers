import Title from 'src/components/atoms/Title';
import PracticeFreeList from '../PracticeFreeList';
import Subheading from 'src/components/atoms/Subheading';
import ButtonDiv from '../ButtonDiv';

const PracticeFreeSectionHome = () => {
  return (
    <section className="flex flex-col gap-16">
      <Title
        level={4}
        className="text-[#e0e0e0] text-center text-[56px] font-bold"
      >
        Practice for Free
      </Title>
      <div className="p-8 rounded-lg bg-gray-800 w-[70%] self-center flex flex-col gap-6">
        <Title
          level={5}
          className="text-[#e0e0e0] text-center text-[40px] font-bold"
        >
          The best free resources for Coding Interviews. Period.
        </Title>
        <PracticeFreeList />
        <Subheading className="text-[#e0e0e0] text-center font-semibold text-[24px] italic">
          Much more coming soon!
        </Subheading>
      </div>
      <ButtonDiv />
    </section>
  );
};

export default PracticeFreeSectionHome;
