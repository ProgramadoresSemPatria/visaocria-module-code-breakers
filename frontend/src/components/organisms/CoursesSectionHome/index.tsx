import Title from 'src/components/atoms/Title';
import DSADiv from 'src/components/molecules/DSADiv';
import FullStackDiv from 'src/components/molecules/FullStackDiv';
import ObjectOrientedDesignDiv from 'src/components/molecules/ObjectOrientedDesignDiv';
import PythonDiv from 'src/components/molecules/PythonDiv';
import SystemDesignDiv from 'src/components/molecules/SystemDesignDiv';

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
