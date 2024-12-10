import ListItem from 'src/components/atoms/ListItem';
import LinkItem from 'src/components/atoms/LinkItem';
import { Prerequisite } from 'src/interface/subject';
import PrerequisitesCard from '../Prerequisites';

const PrerequisitesList = ({
  prerequisites,
}: {
  prerequisites: Prerequisite[];
}) => {
  return (
    <ul className="flex flex-row gap-4 flex-wrap self-center">
      {prerequisites.map((prerequisite) => (
        <LinkItem
          key={prerequisite.title}
          href={prerequisite.link}
          target="_blank noreferrer noopener"
        >
          <ListItem>
            <PrerequisitesCard
              description={prerequisite.description}
              title={prerequisite.title}
            />
          </ListItem>
        </LinkItem>
      ))}
    </ul>
  );
};

export default PrerequisitesList;
