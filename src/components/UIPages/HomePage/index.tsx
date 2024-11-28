import CTASectionHome from '@/components/molecules/CTASectionHome';
import FooterSection from '@/components/molecules/FooterSection';
import PracticeFreeSectionHome from '@/components/molecules/PracticeFreeSectionHome';
import CoursesSectionHome from '@/components/organisms/CoursesSectionHome';
import LessonsSectionHome from '@/components/organisms/LessonsSectionHome';

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
