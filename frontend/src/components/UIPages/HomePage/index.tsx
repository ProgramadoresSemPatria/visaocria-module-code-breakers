import CTASectionHome from 'src/components/molecules/CTASectionHome';
import FooterSection from 'src/components/molecules/FooterSection';
import PracticeFreeSectionHome from 'src/components/molecules/PracticeFreeSectionHome';
import CoursesSectionHome from 'src/components/organisms/CoursesSectionHome';
import LessonsSectionHome from 'src/components/organisms/LessonsSectionHome';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-52 mb-20">
        <CTASectionHome />
        <CoursesSectionHome />
        <LessonsSectionHome />
        <PracticeFreeSectionHome />
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
