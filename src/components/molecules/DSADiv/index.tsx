import Subheading from '@/components/atoms/Subheading';
import Title from '@/components/atoms/Title';
import CoursesList from '../CoursesList';

const DSACourses = [
  {
    url: 'dsa-for-beginners',
    title: 'Algorithms & Data Structures for Beginners',
    description: 'Learn the foundations of coding interviews.',
    duration: '25 hours',
    difficulty: 'Medium',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'advanced-algorithms',
    title: 'Advanced Algorithms',
    description: 'Learn every algorithm you would ever need.',
    duration: '25 hours',
    difficulty: 'Hard',
    imageUrl: '/images/logoBgTransparent.webp',
  },
];

const DSADiv = () => {
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
