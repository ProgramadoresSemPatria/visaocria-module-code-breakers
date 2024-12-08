import Button from 'frontend/src/components/atoms/Button';
import { useReactFlowContext } from 'frontend/src/hooks/useReactFlowContext';
import useAboutModalStore from 'frontend/src/store/AboutModalStore';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';

const PreModalPreferences = () => {
  const { setIsAboutModalStore } = useAboutModalStore();
  const { fitView } = useReactFlowContext();
  return (
    <div className="flex justify-between text-[#e0e0e0] mt-auto px-3.5">
      <Button onClick={() => fitView && fitView()}>Reset</Button>
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
