import Header from '@/components/organisms/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#1e1e2f] px-5 md:px-40 pt-5">{children}</main>
    </div>
  );
};

export default MainLayout;
