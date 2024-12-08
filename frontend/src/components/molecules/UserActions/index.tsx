import SigninButton from '../SigninButton';
import ThemeSwitchButton from '../ThemeSwitchButton';

const UserActions = () => {
  return (
    <div className="flex items-center gap-[25px]">
      <ThemeSwitchButton />
      <SigninButton />
    </div>
  );
};

export default UserActions;
