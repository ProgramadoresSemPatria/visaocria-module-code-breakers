'use client';
import Header from '@/components/organisms/Header';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  if (pathname === '/roadmap') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-[#1e1e2f] px-5 md:px-2 py-5">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#1e1e2f] px-5 md:px-40 py-5">{children}</main>
    </div>
  );
};

export default MainLayout;
