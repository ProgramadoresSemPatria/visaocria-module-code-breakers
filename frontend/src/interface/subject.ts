export interface Prerequisite {
  id: number;
  title: string;
  description: string;
  subject_id: number;
  link: string;
}

export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'UNRESOLVED' | 'RESOLVED';
  url: string;
  solution_url: string;
  subject_id: number;
  isSolved: boolean;
}

export interface Subject {
  id: number;
  title: string;
  roadmap_id: number;
  source: number;
  target: number;
  progress: number;
  total_problems: number;
  createdAt: string;
  updatedAt: string;
  prerequisites: Prerequisite[];
  problems: Problem[];
}
