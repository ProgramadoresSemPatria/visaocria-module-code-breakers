import ListItem from 'src/components/atoms/ListItem';
import { FaCheck } from 'react-icons/fa';

const PracticeFreeList = () => {
  return (
    <ul className="flex flex-col gap-1">
      <ListItem className="text-[30px] text-[#e0e0e0] font-bold flex items-center gap-2">
        <FaCheck className="text-[#008000] text-md" />
        Organized Study plans and roadmaps (Blind 75, NeetCode 150).
      </ListItem>
      <ListItem className="text-[30px] text-[#e0e0e0] font-bold flex items-center gap-2">
        <FaCheck className="text-[#008000] text-md" />
        Detailed video explanations.
      </ListItem>
      <ListItem className="text-[30px] text-[#e0e0e0] font-bold flex items-center gap-2">
        <FaCheck className="text-[#008000] text-md" />
        Public Discord community with over 30,000 members.
      </ListItem>
      <ListItem className="text-[30px] text-[#e0e0e0] font-bold flex items-center gap-2">
        <FaCheck className="text-[#008000] text-md" />
        Sign in to save your progress.
      </ListItem>
    </ul>
  );
};

export default PracticeFreeList;
