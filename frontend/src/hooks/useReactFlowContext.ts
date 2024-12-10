import { useContext } from 'react';
import { ReactFlowContext } from '../context/ReactFlowContext';
import { ReactFlowInstance } from 'reactflow';
export const useReactFlowContext = () => {
  const context = useContext(ReactFlowContext);

  if (!context) {
    throw new Error(
      'useReactFlowContext must be used within a ReactFlowProvider',
    );
  }

  const { fitView, setFitView } = context;

  const onInit = (instance: ReactFlowInstance) => {
    setFitView(() => instance.fitView);
  };

  return {
    fitView,
    setFitView,
    onInit,
  };
};
