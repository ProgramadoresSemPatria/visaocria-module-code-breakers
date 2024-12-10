import Subheading from 'src/components/atoms/Subheading';
import Title from 'src/components/atoms/Title';
import CoursesList from '../CoursesList';
import useCoursesData from 'src/hooks/useCoursesData';

const SystemDesignDiv = () => {
  const { coursesData, query } = useCoursesData();
  const SystemDesignCourses = coursesData.filter(
    (course) => course.matter === 'SYSTEM_DESIGN',
  );

  if (query.isLoading) {
    return <p>Carregando cursos...</p>;
  }

  if (query.isError) {
    return <p>Erro ao carregar os cursos</p>;
  }
  return (
    <div className="flex flex-row gap-8 justify-between px-52">
      <div className="flex flex-col gap-4 w-[400px]">
        <Title level={3} className="text-[#e0e0e0] text-[42px] font-bold ">
          System Design
        </Title>
        <Subheading className="text-[#e0e0e0] text-[18px]">
          Brush up on core system design concepts for designing robust backend
          systems.
        </Subheading>
      </div>
      <div>
        <CoursesList courses={SystemDesignCourses} />
      </div>
    </div>
  );
};

export default SystemDesignDiv;
