import Button from '@/components/atoms/Button';
import useAboutModalStore from '@/store/AboutModalStore';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';

const PreModalPreferences = () => {
  const { setIsAboutModalStore } = useAboutModalStore();
  return (
    <div className="flex justify-between text-[#e0e0e0] mt-auto px-3.5">
      <Button>Reset</Button>
      <Button onClick={() => setIsAboutModalStore(true)}>
        <FaQuestion />
      </Button>
      <Button>
        <MdOutlineSettings />
      </Button>
    </div>
  );
};

export default PreModalPreferences;
