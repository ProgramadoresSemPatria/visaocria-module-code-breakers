import CourseNavigation from 'src/components/molecules/CoursesNavigation';
import CoursesSectionHome from 'src/components/organisms/CoursesSectionHome';
import LessonsSectionHome from 'src/components/organisms/LessonsSectionHome';
import useCoursesNavigationStore from 'src/store/CoursesNavigation';

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
