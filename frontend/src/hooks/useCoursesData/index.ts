'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axiosInstance from 'src/axios';
import useCoursesStore, { Courses } from 'src/store/coursesStore';

const fetchCourses = async (): Promise<Courses[]> => {
  try {
    const response = await axiosInstance('/courses');
    if (!response.data) {
      throw new Error('Failed to fetch courses');
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cursos:', error);
    throw error;
  }
};

const useCoursesData = () => {
  const { coursesData, setCoursesData } = useCoursesStore();

  const query = useQuery<Courses[], Error>({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  useEffect(() => {
    if (query.data) {
      setCoursesData(query.data);
    }
  }, [query.data, setCoursesData]);

  return {
    coursesData,
    query,
  };
};

export default useCoursesData;
