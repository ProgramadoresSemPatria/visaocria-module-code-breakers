import Title from 'frontend/src/components/atoms/Title';
import DSADiv from 'frontend/src/components/molecules/DSADiv';
import FullStackDiv from 'frontend/src/components/molecules/FullStackDiv';
import ObjectOrientedDesignDiv from 'frontend/src/components/molecules/ObjectOrientedDesignDiv';
import PythonDiv from 'frontend/src/components/molecules/PythonDiv';
import SystemDesignDiv from 'frontend/src/components/molecules/SystemDesignDiv';

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
