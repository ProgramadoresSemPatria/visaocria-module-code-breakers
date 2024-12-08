'use client';
import Header from 'frontend/src/components/organisms/Header';
import ReactFlowProvider from 'frontend/src/context/ReactFlowContext';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  if (pathname === '/roadmap') {
    return (
      <ReactFlowProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-[#1e1e2f] px-5 md:px-2 py-5">
            {children}
          </main>
        </div>
      </ReactFlowProvider>
    );
  }

  return (
    <ReactFlowProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-[#1e1e2f] px-5 md:px-40 py-5">
          {children}
        </main>
      </div>
    </ReactFlowProvider>
  );
};

export default MainLayout;
