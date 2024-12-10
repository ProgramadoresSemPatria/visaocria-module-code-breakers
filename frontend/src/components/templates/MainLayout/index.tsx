'use client';
import Header from 'src/components/organisms/Header';
import ReactFlowProvider from 'src/context/ReactFlowContext';
import { usePathname } from 'next/navigation';
import ReactQueryProvider from 'src/components/organisms/ReactQueryProvider';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  if (pathname === '/roadmap') {
    return (
      <ReactQueryProvider>
        <ReactFlowProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-[#1e1e2f] px-5 md:px-2 py-5">
              {children}
            </main>
          </div>
        </ReactFlowProvider>
      </ReactQueryProvider>
    );
  }

  return (
    <ReactQueryProvider>
      <ReactFlowProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-[#1e1e2f] px-5 md:px-40 py-5">
            {children}
          </main>
        </div>
      </ReactFlowProvider>
    </ReactQueryProvider>
  );
};

export default MainLayout;
