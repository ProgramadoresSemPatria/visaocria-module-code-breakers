import LinkItem from 'src/components/atoms/LinkItem';
import ListItem from 'src/components/atoms/ListItem';
import CardLessons from '../CardLessons';
import useLessonsData from 'src/hooks/useLessonsData';

const LessonsList = () => {
  const { lessonsData, query } = useLessonsData();

  if (query.isLoading) {
    return <p>Carregando cursos...</p>;
  }

  if (query.isError) {
    return <p>Erro ao carregar os cursos</p>;
  }
  return (
    <ul className="grid grid-rows-2 grid-flow-col gap-8 justify-center items-center">
      {lessonsData.map((lesson) => (
        <LinkItem href={'/'} key={lesson.title}>
          <ListItem>
            <CardLessons
              imageUrl={lesson.image_url}
              title={lesson.title}
              titleAlt={lesson.title}
            />
          </ListItem>
        </LinkItem>
      ))}
    </ul>
  );
};

export default LessonsList;
