'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axiosInstance from 'src/axios';
import useLessonsStore, { Lessons } from 'src/store/lessonsStore';

const fetchLessons = async (): Promise<Lessons[]> => {
  try {
    const response = await axiosInstance('/lessons');
    if (!response.data) {
      throw new Error('Failed to fetch courses');
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cursos:', error);
    throw error;
  }
};

const useLessonsData = () => {
  const { lessonsData, setLessonsData } = useLessonsStore();

  const query = useQuery<Lessons[], Error>({
    queryKey: ['lessons'],
    queryFn: fetchLessons,
  });

  useEffect(() => {
    if (query.data) {
      setLessonsData(query.data);
    }
  }, [query.data, setLessonsData]);

  return {
    lessonsData,
    query,
  };
};

export default useLessonsData;
