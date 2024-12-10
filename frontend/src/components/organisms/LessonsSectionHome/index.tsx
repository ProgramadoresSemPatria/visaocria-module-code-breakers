import Title from 'src/components/atoms/Title';
import LessonsList from 'src/components/molecules/LessonsList';

const LessonsSectionHome = () => {
  return (
    <section className="flex flex-col gap-20">
      <Title
        level={3}
        className="text-[#e0e0e0] text-center text-[56px] font-bold"
      >
        Lessons
      </Title>
      <LessonsList />
    </section>
  );
};

export default LessonsSectionHome;
