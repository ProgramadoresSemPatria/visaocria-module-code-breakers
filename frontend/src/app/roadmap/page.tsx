'use client';
import RoadmapModal from 'src/components/organisms/RoadmapModal';
import AboutModal from 'src/components/organisms/RulesModal';
import RoadmapPage from 'src/components/UIPages/RoadmapPage';
import useAboutModalStore from 'src/store/AboutModalStore';
import useRoadmapModalStore from 'src/store/RoadmapModalStore';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axios';
import { useEffect, useState } from 'react';
import { Subject } from 'src/interface/subject';
import ConfigModal from 'src/components/organisms/ConfigModal';
import useConfigModalStore from 'src/store/ConfigModalStore';

const Roadmap = () => {
  const { isAboutModalStore } = useAboutModalStore();
  const { isRoadmapModalOpen, selectedNode } = useRoadmapModalStore();
  const { isConfigModalStore } = useConfigModalStore();
  const [subjectSelected, setSubjectSelected] = useState<Subject>();
  const title = selectedNode?.label;

  const fetchNodeData = async (title: string) => {
    const response = await axiosInstance(`/subject/${title}`);
    if (!response.data) {
      throw new Error('Failed to fetch node data');
    }
    return response.data;
  };

  const { data } = useQuery({
    queryKey: ['subject', title],
    queryFn: () => fetchNodeData(title!),
    enabled: !!isRoadmapModalOpen && !!title,
  });

  useEffect(() => {
    if (data) {
      setSubjectSelected(data);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      {isRoadmapModalOpen && data && subjectSelected && (
        <RoadmapModal
          title={subjectSelected?.title}
          totalProblems={subjectSelected?.total_problems}
          prerequisites={subjectSelected?.prerequisites}
          array={subjectSelected?.problems}
          Subject={subjectSelected?.title}
        />
      )}
      {isAboutModalStore && <AboutModal />}
      {isConfigModalStore && <ConfigModal />}
      <RoadmapPage />
    </>
  );
};

export default Roadmap;
