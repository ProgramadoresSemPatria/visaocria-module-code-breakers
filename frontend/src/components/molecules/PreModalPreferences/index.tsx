import Button from 'src/components/atoms/Button';
import { useReactFlowContext } from 'src/hooks/useReactFlowContext';
import useAboutModalStore from 'src/store/AboutModalStore';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';
import useConfigModalStore from 'src/store/ConfigModalStore';

const PreModalPreferences = () => {
  const { setIsAboutModalStore } = useAboutModalStore();
  const { setIsConfigModalStore } = useConfigModalStore();
  const { fitView } = useReactFlowContext();
  return (
    <div className="flex justify-between text-[#e0e0e0] mt-auto px-3.5">
      <Button onClick={() => fitView && fitView()}>Reset</Button>
      <Button onClick={() => setIsAboutModalStore(true)}>
        <FaQuestion />
      </Button>
      <Button onClick={() => setIsConfigModalStore(true)}>
        <MdOutlineSettings />
      </Button>
    </div>
  );
};

export default PreModalPreferences;
