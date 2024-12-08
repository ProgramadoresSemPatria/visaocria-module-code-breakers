'use client';
import Button from 'frontend/src/components/atoms/Button';
import { useRouter } from 'next/navigation';

const ButtonDiv = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-3 self-center">
      <Button
        onClick={() => router.push('/roadmap')}
        className="text-center rounded-full  bg-transparent border-[3px] text-[20px] border-[#4814b0] hover:bg-[#4814b0] text-[#4814b0] hover:text-white  font-bold px-6 py-2.5 transition-colors duration-200 transform ease-linear"
      >
        View Roadmap
      </Button>

      <Button
        onClick={() =>
          window.open('https://discord.com/invite/ddjKRXPqtk', '_blank')
        }
        className="text-center rounded-full  bg-transparent border-[3px] text-[20px] border-[#28d3a0] hover:bg-[#28d3a0] text-[#28d3a0] hover:text-white font-bold px-6 py-2.5 transition-colors duration-200 transform ease-linear"
      >
        Join Discord
      </Button>
    </div>
  );
};

export default ButtonDiv;
