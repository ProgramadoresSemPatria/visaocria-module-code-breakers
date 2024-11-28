import CourseNavigation from '@/components/molecules/CoursesNavigation';
import CoursesSectionHome from '@/components/organisms/CoursesSectionHome';
import LessonsSectionHome from '@/components/organisms/LessonsSectionHome';
import useCoursesNavigationStore from '@/store/CoursesNavigation';

const CoursesPage = () => {
  const { activeTab } = useCoursesNavigationStore();
  return (
    <>
      <div className="flex flex-col gap-10 mb-20">
        <CourseNavigation />
        {activeTab === 'courses' ? (
          <CoursesSectionHome />
        ) : (
          <LessonsSectionHome />
        )}
      </div>
    </>
  );
};

export default CoursesPage;
