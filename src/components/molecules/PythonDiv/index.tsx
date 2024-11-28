import Subheading from '@/components/atoms/Subheading';
import Title from '@/components/atoms/Title';
import CoursesList from '../CoursesList';

const SystemDesignCourses = [
  {
    url: 'python-for-beginners',
    title: 'Python for Beginners',
    description: 'Learn the python programming language.',
    duration: '12 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'python-for-coding-interviews',
    title: 'Python for Coding Interviews',
    description: 'Learn effective Python for coding interviews.',
    duration: '8 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'python-oop',
    title: 'Python OOP',
    description: 'Learn object-oriented programming in Python.',
    duration: '10 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
];

const PythonDiv = () => {
  return (
    <div className="flex flex-row gap-[280px] justify-between px-52">
      <div className="flex flex-col gap-4 w-[400px]">
        <Title level={3} className="text-[#e0e0e0] text-[42px] font-bold ">
          Python
        </Title>
        <Subheading className="text-[#e0e0e0] text-[18px]">
          Learn the Python programming language with interactive coding
          lessons..
        </Subheading>
      </div>
      <div>
        <CoursesList courses={SystemDesignCourses} />
      </div>
    </div>
  );
};

export default PythonDiv;
