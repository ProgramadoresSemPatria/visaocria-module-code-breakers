import Image from 'next/image';

export interface CourseCardProps {
  url: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  imageUrl: string;
}

export default function CourseCard({
  title,
  description,
  duration,
  difficulty,
  imageUrl,
}: CourseCardProps) {
  const difficultyColor = () => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-[#000000B3]';
      case 'Hard':
        return 'bg-red-500';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="w-[300px] rounded-lg overflow-hidden shadow-xl bg-gray-800 text-center hover:shadow-md hover:bg-[#13181c] hover:ring-1 hover:ring-blue-600 transition-colors transform duration-200 ease-linear">
      <div className="relative h-[200px]">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col h-[200px] p-4 text-white">
        <div>
          <h2 className="text-[21px] font-bold mb-2">{title}</h2>
          <p className="text-gray-300 mb-4 text-[16px]">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-center gap-4">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
            {duration}
          </span>
          <span
            className={`px-2 py-1 rounded text-sm font-bold ${difficultyColor()} `}
          >
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}
