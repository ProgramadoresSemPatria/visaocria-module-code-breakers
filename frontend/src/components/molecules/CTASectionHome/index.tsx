'use client';
import Subheading from 'src/components/atoms/Subheading';
import Title from 'src/components/atoms/Title';
import dynamic from 'next/dynamic';

const ComponentFramerMotion = dynamic(
  () => import('src/components/molecules/ComponentFramerMotion'),
  {
    ssr: false,
  },
);
const CTASectionHome = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[700px] justify-between items-center">
      <div className="flex flex-col gap-4 w-1/2">
        <Title level={1} className="text-[#e0e0e0] text-[56px] font-bold">
          Code Breakers
        </Title>
        <Subheading className="text-[#e0e0e0] text-[40px]">
          A better way to prepare our PSPs for cracking coding interviews
        </Subheading>
      </div>
      <ComponentFramerMotion />
    </section>
  );
};

export default CTASectionHome;
