import { FaRegStar, FaVideo } from 'react-icons/fa';
import LinkItem from 'src/components/atoms/LinkItem';
import Tooltip from '../Tooltip';
import { Problem } from 'src/interface/subject';
import React from 'react';

export const difficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-500';
    case 'Medium':
      return 'text-yellow-500';
    case 'Hard':
      return 'text-red-500';
    default:
      return 'bg-gray-500 text-white';
  }
};

const TableProblems = ({
  array,
  handleSolvedQuestion,
}: {
  array: Problem[];
  handleSolvedQuestion: (
    e: React.ChangeEvent<HTMLInputElement>,
    problem: Problem,
  ) => void;
}) => {
  return (
    <div className="w-full overflow-y-auto">
      <table className="w-[90%] my-0 mx-auto">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="p-4 text-center text-zinc-400 font-medium">
              Status
            </th>
            <th className="p-4 text-center text-zinc-400 font-medium">Star</th>
            <th className="p-4 text-left text-zinc-400 font-medium">Problem</th>
            <th className="p-4 text-center text-zinc-400 font-medium">
              Difficulty
            </th>
            <th className="p-4 text-center text-zinc-400 font-medium">
              Solution
            </th>
          </tr>
        </thead>
        <tbody>
          {array.map((problem) => (
            <tr
              key={problem.id}
              className={`border-b border-zinc-800 ${
                problem.isSolved ? 'bg-[#28d3a080]' : ''
              }`}
            >
              <td className="p-4 text-center">
                <input
                  type="checkbox"
                  value={problem.subject_id}
                  onChange={(e) => handleSolvedQuestion(e, problem)}
                  checked={problem.isSolved}
                  className="appearance-none h-5 w-5 border border-gray-500 rounded-sm bg-transparent cursor-pointer checked:bg-[#28d3a0] checked:border-[#28d3a0] checked:ring-2 checked:ring-[#28d3a0] focus:ring-0 focus:ring-offset-2 focus:ring-[#28d3a0]"
                />
              </td>
              <td className="p-4 text-center flex items-center justify-center">
                <FaRegStar className="w-5 h-5 text-[#aa8017]" />
              </td>
              <td className="p-4 text-left">
                <div className="flex items-center justify-start gap-2">
                  <LinkItem href={problem.url}>
                    <span className="text-zinc-200">{problem.title}</span>
                  </LinkItem>
                  <LinkItem href={problem.url} target="_noblank _noreferrer">
                    <Tooltip />
                  </LinkItem>
                </div>
              </td>
              <td
                className={`p-4 text-center ${difficultyColor(problem.difficulty)}`}
              >
                {problem.difficulty}
              </td>
              <td className="p-4 text-center flex items-center justify-center">
                <LinkItem
                  href={problem.solution_url}
                  target="_blank"
                  className="hover:bg-[#18182c] px-4 py-1.5 transition-colors ease-in-out duration-200 rounded-full flex items-center justify-center"
                >
                  <FaVideo className="w-4 h-4 text-zinc-200" />
                </LinkItem>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(TableProblems);
