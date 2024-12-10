import Subheading from 'src/components/atoms/Subheading';
import Title from 'src/components/atoms/Title';
import CoursesList from '../CoursesList';
import useCoursesData from 'src/hooks/useCoursesData';

const FullStackDiv = () => {
  const { coursesData, query } = useCoursesData();
  const FullStackCourses = coursesData.filter(
    (course) => course.matter === 'FULL_STACK_DEVELOPMENT',
  );

  if (query.isLoading) {
    return <p>Carregando cursos...</p>;
  }

  if (query.isError) {
    return <p>Erro ao carregar os cursos</p>;
  }
  return (
    <div className="flex flex-row gap-[280px] justify-between px-52">
      <div className="flex flex-col gap-4 w-[400px]">
        <Title level={3} className="text-[#e0e0e0] text-[42px] font-bold ">
          Full Stack Development
        </Title>
        <Subheading className="text-[#e0e0e0] text-[18px]">
          Choose from a variety of skills involved in full stack development.
        </Subheading>
      </div>
      <div>
        <CoursesList courses={FullStackCourses} />
      </div>
    </div>
  );
};

export default FullStackDiv;
