import ListItem from '@/components/atoms/ListItem';

const RulesModalList = () => {
  return (
    <ul className="list-disc pl-5 ml-6">
      <ListItem className="text-[#e0e0e0] text-[18px]">
        Clicking each topic will open a list of problems for that topic.
      </ListItem>
      <ListItem className="text-[#e0e0e0] text-[18px]">
        The problems list is identical to the{' '}
        <strong className="font-bold">Neetcode 150</strong> which can be found
        in the <strong>Practice</strong> page.
      </ListItem>
      <ListItem className="text-[#e0e0e0] text-[18px]">
        Get stuck? I've created a detailed 🎥 <strong>video explanation</strong>{' '}
        for each problem.
      </ListItem>
      <ListItem className="text-[#e0e0e0] text-[18px]">
        So far we have code solutions for{' '}
        <strong>[Python, Java, JavaScript, C++]</strong>.
      </ListItem>
    </ul>
  );
};

export default RulesModalList;
