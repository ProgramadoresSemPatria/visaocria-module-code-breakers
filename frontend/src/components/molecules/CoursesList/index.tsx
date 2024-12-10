import ListItem from 'src/components/atoms/ListItem';
import CourseCard from '../CardCourses';
import LinkItem from 'src/components/atoms/LinkItem';
import { Courses } from 'src/store/coursesStore';

const CoursesList = ({ courses }: { courses: Courses[] }) => {
  return (
    <ul className="flex flex-row gap-4 flex-wrap ">
      {courses.map((course) => (
        <LinkItem
          key={course.title}
          href={course.link_url}
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
