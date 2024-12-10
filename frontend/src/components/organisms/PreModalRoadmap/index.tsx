import { useEffect, useState } from 'react';
import Title from 'src/components/atoms/Title';
import PreModalNavigation from 'src/components/molecules/PreModalNavigation';
import PreModalPreferences from 'src/components/molecules/PreModalPreferences';
import ProgressBar from 'src/components/molecules/ProgressBar';
import useRoadmapStore, { RoadmapList } from 'src/store/RoadmapStore';

const PreModalRoadmap = () => {
  const { roadmapData }: { roadmapData: RoadmapList[] } = useRoadmapStore();

  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const roadmap = Array.isArray(roadmapData) ? roadmapData[0] : roadmapData;

    if (roadmap?.subjects) {
      const totalProblems = roadmap.subjects.reduce(
        (acc, subject) => acc + subject.problems.length,
        0,
      );

      const solvedProblems = roadmap.subjects.reduce(
        (acc, subject) =>
          acc + subject.problems.filter((problem) => problem.isSolved).length,
        0,
      );

      const progress =
        totalProblems > 0
          ? Math.round((solvedProblems / totalProblems) * 100)
          : 0;

      setOverallProgress(progress);
    }
  }, [roadmapData]);

  return (
    <div className="w-[350px] p-4 bg-[#2a2a40] flex-grow text-center flex-col flex gap-4">
      <Title level={5} className="text-[#e0e0e0] text-md">
        Select Roadmap
      </Title>
      <PreModalNavigation />
      <ProgressBar progress={overallProgress} width="w-full" />
      <p className="text-[#e0e0e0] text-md">({overallProgress}/150)</p>

      <PreModalPreferences />
    </div>
  );
};

export default PreModalRoadmap;
