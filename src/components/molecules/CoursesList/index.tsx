import ListItem from '@/components/atoms/ListItem';
import CourseCard, { CourseCardProps } from '../CardCourses';
import LinkItem from '@/components/atoms/LinkItem';

const CoursesList = ({ courses }: { courses: CourseCardProps[] }) => {
  return (
    <ul className="flex flex-row gap-4 flex-wrap ">
      {courses.map((course) => (
        <LinkItem
          key={course.title}
          href={`https://neetcode.io/courses/${course.url}`}
          target="_blank noreferrer noopener"
        >
          <ListItem>
            <CourseCard {...course} />
          </ListItem>
        </LinkItem>
      ))}
    </ul>
  );
};

export default CoursesList;
