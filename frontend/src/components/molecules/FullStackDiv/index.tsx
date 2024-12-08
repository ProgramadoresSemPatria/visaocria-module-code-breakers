import Subheading from 'frontend/src/components/atoms/Subheading';
import Title from 'frontend/src/components/atoms/Title';
import CoursesList from '../CoursesList';

const FullStackCourses = [
  {
    url: 'sql-for-beginners',
    title: 'SQL for Beginners',
    description: 'Learn PostgreSQL with interactive coding lessons.',
    duration: '10 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'full-stack-dev',
    title: 'Full Stack Development',
    description: 'Learn how to build an intermediate full stack app.',
    duration: '20 hours',
    difficulty: 'Medium',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'relational-databases',
    title: 'Relational Databases',
    description: 'Learn about relational database management systems.',
    duration: '10 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
];

const FullStackDiv = () => {
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
