import Button from 'src/components/atoms/Button';
import useCoursesNavigationStore from 'src/store/CoursesNavigation';

const CourseNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useCoursesNavigationStore();

  return (
    <div className="flex w-full max-w-[300px] bg-transparent border-2 border-[#EBEBEB] self-center mt-10 rounded-md ">
      <Button
        className={`flex items-center justify-center w-1/2 py-2 px-4 text-[18px] font-medium transition-colors duration-200 ${
          activeTab === 'courses'
            ? 'bg-[#EBEBEB] text-black'
            : 'bg-transparent text-white hover:bg-[#EBEBEB] hover:text-black'
        }`}
        onClick={() => setActiveTab('courses')}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        Courses
      </Button>
      <Button
        className={`flex items-center justify-center w-1/2 py-2 px-4 text-[18px] font-medium transition-colors duration-200 ${
          activeTab === 'lessons'
            ? 'bg-[#EBEBEB] text-black'
            : 'bg-transparent text-white hover:bg-[#EBEBEB] hover:text-black'
        }`}
        onClick={() => setActiveTab('lessons')}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Lessons
      </Button>
    </div>
  );
};

export default CourseNavigation;
