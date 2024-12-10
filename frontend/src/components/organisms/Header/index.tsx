import NavListHeader from 'src/components/molecules/NavList';
import UserActions from 'src/components/molecules/UserActions';

const Header = () => {
  return (
    <header className="bg-[#2a2a40] py-3 px-10 w-full min-h-[60px] flex items-center justify-between border-t-[1px] border-b-[1px] border-[#323250]">
      <NavListHeader />
      <UserActions />
    </header>
  );
};

export default Header;
