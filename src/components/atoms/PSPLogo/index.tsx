import Image from 'next/image';

interface PSPLogoProps {
  height: number;
  width: number;
}
const PSPLogo: React.FC<PSPLogoProps> = ({ height, width }) => {
  return (
    <Image
      src="/images/PspAvatar.webp"
      width={width}
      height={height}
      className="rounded-md"
      alt="Logo of borderless community enterprise"
    />
  );
};

export default PSPLogo;
