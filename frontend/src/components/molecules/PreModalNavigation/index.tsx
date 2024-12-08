import Button from "frontend/src/components/atoms/Button";

const PreModalNavigation = () => {
  return (
    <div className="flex gap-2 self-center">
      <Button className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200 text-[#e0e0e0] text-lg">
        Algorithms
      </Button>
      <Button className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200 text-[#e0e0e0] text-lg">
        Courses
      </Button>
    </div>
  );
};

export default PreModalNavigation;
