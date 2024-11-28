import Subheading from '@/components/atoms/Subheading';
import Title from '@/components/atoms/Title';
import CoursesList from '../CoursesList';

const SystemDesignCourses = [
  {
    url: 'system-design-for-beginners',
    title: 'System Design for Beginners',
    description: 'Learn the foundations of system design interviews.',
    duration: '10 hours',
    difficulty: 'Medium',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'system-design-interview',
    title: 'System Design Interview',
    description: 'Learn common system design interview questions.',
    duration: '10 hours',
    difficulty: 'Medium',
    imageUrl: '/images/logoBgTransparent.webp',
  },
];

const SystemDesignDiv = () => {
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
