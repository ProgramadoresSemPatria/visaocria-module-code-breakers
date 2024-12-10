import Subheading from 'src/components/atoms/Subheading';
import Title from 'src/components/atoms/Title';
import CoursesList from '../CoursesList';
import useCoursesData from 'src/hooks/useCoursesData';

const DSADiv = () => {
  const { coursesData, query } = useCoursesData();
  const DSACourses = coursesData.filter(
    (course) => course.matter === 'DATA_STRUCTURES_AND_ALGORITHMS',
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
          Data Structures & Algorithms
        </Title>
        <Subheading className="text-[#e0e0e0] text-[18px]">
          Follow a structured path to learn all of the core data structures &
          algorithms. Perfect for coding interview preparation.
        </Subheading>
      </div>
      <div>
        <CoursesList courses={DSACourses} />
      </div>
    </div>
  );
};

export default DSADiv;
