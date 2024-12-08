import CTASectionHome from 'frontend/src/components/molecules/CTASectionHome';
import FooterSection from 'frontend/src/components/molecules/FooterSection';
import PracticeFreeSectionHome from 'frontend/src/components/molecules/PracticeFreeSectionHome';
import CoursesSectionHome from 'frontend/src/components/organisms/CoursesSectionHome';
import LessonsSectionHome from 'frontend/src/components/organisms/LessonsSectionHome';

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
