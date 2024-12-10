import { createContext, useState } from 'react';

interface ReactFlowContextType {
  fitView: (() => void) | null;
  setFitView: (fitView: () => void) => void;
}

export const ReactFlowContext = createContext<ReactFlowContextType | null>(
  null,
);

const ReactFlowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fitView, setFitView] = useState<(() => void) | null>(null);

  return (
    <ReactFlowContext.Provider value={{ fitView, setFitView }}>
      {children}
    </ReactFlowContext.Provider>
  );
};

export default ReactFlowProvider;
