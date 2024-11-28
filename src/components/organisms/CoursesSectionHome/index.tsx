import Title from '@/components/atoms/Title';
import DSADiv from '@/components/molecules/DSADiv';
import FullStackDiv from '@/components/molecules/FullStackDiv';
import ObjectOrientedDesignDiv from '@/components/molecules/ObjectOrientedDesignDiv';
import PythonDiv from '@/components/molecules/PythonDiv';
import SystemDesignDiv from '@/components/molecules/SystemDesignDiv';

const CoursesSectionHome = () => {
  return (
    <section className="flex flex-col gap-40">
      <Title
        level={2}
        className="text-[#e0e0e0] text-center text-[56px] font-bold"
      >
        Courses
      </Title>
      <DSADiv />
      <SystemDesignDiv />
      <PythonDiv />
      <FullStackDiv />
      <ObjectOrientedDesignDiv />
    </section>
  );
};

export default CoursesSectionHome;
