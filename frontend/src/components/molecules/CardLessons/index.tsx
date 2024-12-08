import Image from 'next/image';

interface CardLessonsProps {
  title: string;
  imageUrl: string;
  titleAlt: string;
}

const CardLessons: React.FC<CardLessonsProps> = ({
  imageUrl,
  title,
  titleAlt,
}) => {
  return (
    <div className="w-[300px] rounded-lg overflow-hidden shadow-xl bg-gray-800 text-center hover:shadow-md hover:bg-[#13181c] hover:ring-1 hover:ring-blue-600 transition-colors transform duration-200 ease-linear">
      <div className="relative h-[200px]">
        <Image src={imageUrl} alt={titleAlt} layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col h-[150px] p-4 text-white">
        <h2 className="text-[21px] font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default CardLessons;
