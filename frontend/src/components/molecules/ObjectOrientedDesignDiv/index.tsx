import Subheading from 'frontend/src/components/atoms/Subheading';
import Title from 'frontend/src/components/atoms/Title';
import CoursesList from '../CoursesList';

const ObjectOrientedDesignCourses = [
  {
    url: 'ood-interview',
    title: 'Object Oriented Design Interviews',
    description: 'Learn Object Oriented Design interview questions.',
    duration: '8 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
  {
    url: 'design-patterns',
    title: 'Object Oriented Design Patterns',
    description: 'Learn & implement commom coding design patterns.',
    duration: '8 hours',
    difficulty: 'Easy',
    imageUrl: '/images/logoBgTransparent.webp',
  },
];

const ObjectOrientedDesignDiv = () => {
  return (
    <div className="flex flex-row gap-8 justify-between px-52">
      <div className="flex flex-col gap-4 w-[400px]">
        <Title level={3} className="text-[#e0e0e0] text-[42px] font-bold ">
          Object Oriented Design
        </Title>
        <Subheading className="text-[#e0e0e0] text-[18px]">
          Dive deeper into object-oriented programming by focusing on design
          patterns and principles.
        </Subheading>
      </div>
      <div>
        <CoursesList courses={ObjectOrientedDesignCourses} />
      </div>
    </div>
  );
};

export default ObjectOrientedDesignDiv;
