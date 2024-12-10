import { useEffect, useState } from 'react';
import axiosInstance from 'src/axios';
import Button from 'src/components/atoms/Button';
import Subheading from 'src/components/atoms/Subheading';
import Title from 'src/components/atoms/Title';
import PrerequisitesList from 'src/components/molecules/PrerequisitesList';
import TableProblems from 'src/components/molecules/ProblemsTable';
import ProgressBar from 'src/components/molecules/ProgressBar';
import { Prerequisite, Problem } from 'src/interface/subject';
import useRoadmapModalStore from 'src/store/RoadmapModalStore';

const RoadmapModal = ({
  title,
  totalProblems,
  prerequisites,
  array,
}: {
  title: string;
  totalProblems: number;
  prerequisites: Prerequisite[];
  array: Problem[];
  Subject: string;
}) => {
  const { isRoadmapModalOpen, setIsRoadmapModalOpen } = useRoadmapModalStore();

  const [problems, setProblems] = useState<Problem[]>(array);
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const solvedCount = problems.filter((problem) => problem.isSolved).length;
    const calculatedProgress = Math.round((solvedCount / totalProblems) * 100);
    setProgressBar(calculatedProgress);
  }, [problems, totalProblems]);

  const handleSolvedQuestion = async (
    event: React.ChangeEvent<HTMLInputElement>,
    problem: Problem,
  ) => {
    const { subject_id, title, id } = problem;
    const isSolved = event.target.checked;

    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isSolved } : p)),
    );

    try {
      await axiosInstance.post('/problem/update-is-solved', {
        subjectId: subject_id,
        problemTitle: title,
        status: isSolved,
      });

      if (isSolved) {
        await axiosInstance.post(`/subject/increment-progress/${subject_id}`);
      } else {
        await axiosInstance.post(`/subject/decrement-progress/${subject_id}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar o problema', error);

      setProblems((prev) =>
        prev.map((p) => (p.id === id ? { ...p, isSolved: !isSolved } : p)),
      );
    }
  };

  const [modalClass, setModalClass] = useState('translate-x-full');

  useEffect(() => {
    if (isRoadmapModalOpen) {
      setModalClass('translate-x-0');
    } else {
      setModalClass('translate-x-full');
    }
  }, [isRoadmapModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsRoadmapModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsRoadmapModalOpen]);

  useEffect(() => {
    setProblems(array);
  }, [array]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <section
        className={`bg-[#1e1e2f] w-[80%] h-full shadow-lg rounded-md flex flex-col transition-transform duration-300 ease-in-out ${
          modalClass
        }`}
      >
        <header className="w-full flex flex-col p-2 min-h-full">
          <div className="flex items-center">
            <Button
              onClick={() => setIsRoadmapModalOpen(false)}
              className="px-3 py-1 bg-red-300 text-sm rounded-[4px]"
            >
              ESC
            </Button>
            <Title
              level={6}
              className="text-gray-300 text-2xl font-bold mx-auto pr-[47px]"
            >
              {title}
            </Title>
          </div>
          <Subheading className="text-gray-300 text-lg mx-auto font-bold">
            ({problems.filter((p) => p.isSolved).length} / {totalProblems})
          </Subheading>
          <ProgressBar progress={progressBar} width="w-1/3" />
          <h2 className="text-gray-300 text-xl font-bold mx-auto my-4">
            Prerequisites
          </h2>
          <PrerequisitesList prerequisites={prerequisites} />
          <TableProblems
            array={problems}
            handleSolvedQuestion={handleSolvedQuestion}
          />
        </header>
      </section>
    </div>
  );
};

export default RoadmapModal;
