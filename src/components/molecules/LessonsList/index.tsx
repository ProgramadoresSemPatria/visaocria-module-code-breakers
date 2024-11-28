import LinkItem from '@/components/atoms/LinkItem';
import ListItem from '@/components/atoms/ListItem';
import CardLessons from '../CardLessons';

const LessonsCourse = [
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: 'Python Cheat Sheet',
    titleAlt: 'Python Cheat Sheet course image',
  },
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: 'Big-O Notation',
    titleAlt: 'Big-O Notation course image',
  },
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: '8 Design Patterns Every Programmer Should Know',
    titleAlt: '8 Design Patterns Every Programmer Should Know course image',
  },
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: '20 Must-know System Design Concepts',
    titleAlt: '20 Must-know System Design Concepts course image',
  },
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: '30-Day JavaScript Coding Challenge',
    titleAlt: '30-Day JavaScript Coding Challenge course image',
  },
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: 'Design a YouTube Clone',
    titleAlt: 'Design a YouTube Clone course image',
  },
  {
    imageUrl: '/images/logoBgTransparent.webp',
    title: 'MongoDB Crash Course',
    titleAlt: 'MongoDB Crash Course course image',
  },
];

const LessonsList = () => {
  return (
    <ul className="grid grid-rows-2 grid-flow-col gap-8 justify-center items-center">
      {LessonsCourse.map((lesson) => (
        <LinkItem href={'/'} key={lesson.title}>
          <ListItem>
            <CardLessons
              imageUrl={lesson.imageUrl}
              title={lesson.title}
              titleAlt={lesson.titleAlt}
            />
          </ListItem>
        </LinkItem>
      ))}
    </ul>
  );
};

export default LessonsList;
