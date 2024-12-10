const PrerequisitesCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-zinc-900/90 w-[225px] h-[102px] p-4 rounded-lg border border-zinc-800">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-zinc-100 font-medium">{title}</h3>
          <p className="text-blue-500 text-sm">{description}</p>
        </div>
        <button className="text-zinc-400 hover:text-zinc-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PrerequisitesCard;
