'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axiosInstance from 'src/axios';

import useRoadmapStore, { RoadmapList } from 'src/store/RoadmapStore';

const fetchRoadmap = async (): Promise<RoadmapList[]> => {
  try {
    const response = await axiosInstance('/roadmap');
    if (!response.data) {
      throw new Error('Failed to fetch courses');
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cursos:', error);
    throw error;
  }
};

const useRoadmapData = () => {
  const { roadmapData, setRoadmapData } = useRoadmapStore();

  const query = useQuery<RoadmapList[], Error>({
    queryKey: ['roadmap'],
    queryFn: fetchRoadmap,
  });

  useEffect(() => {
    if (query.data) {
      setRoadmapData(query.data);
    }
  }, [query.data, setRoadmapData]);

  return {
    roadmapData,
    query,
  };
};

export default useRoadmapData;
