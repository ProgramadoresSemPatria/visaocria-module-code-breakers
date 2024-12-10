import LinkItem from 'src/components/atoms/LinkItem';
import ListItem from 'src/components/atoms/ListItem';
import PSPLogo from 'src/components/atoms/PSPLogo';

const NavListHeader = () => {
  return (
    <ul className="flex items-center gap-[25px]">
      <ListItem className="text-[#e0e0e0] text-lg">
        <PSPLogo height={50} width={50} />
      </ListItem>

      <LinkItem
        href="/courses"
        className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200"
      >
        <ListItem className="text-[#e0e0e0] text-lg">Courses</ListItem>
      </LinkItem>
      <LinkItem
        href="https://neetcode.io/practice"
        target="_noblank"
        className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200"
      >
        <ListItem className="text-[#e0e0e0] text-lg">Practice</ListItem>
      </LinkItem>
      <LinkItem
        href="/roadmap"
        className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200"
      >
        <ListItem className="text-[#e0e0e0] text-lg">Roadmap</ListItem>
      </LinkItem>
      <LinkItem
        href="https://neetcode.io/newsletter"
        target="_noblank"
        className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200"
      >
        <ListItem className="text-[#e0e0e0] text-lg">Newsletter</ListItem>
      </LinkItem>
    </ul>
  );
};

export default NavListHeader;
