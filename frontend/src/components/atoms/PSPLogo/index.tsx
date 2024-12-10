import Image from 'next/image';
import LinkItem from '../LinkItem';

interface PSPLogoProps {
  height: number;
  width: number;
}
const PSPLogo: React.FC<PSPLogoProps> = ({ height, width }) => {
  return (
    <LinkItem href={'/'}>
      <Image
        src="/images/logoBgTransparent.webp"
        width={width}
        height={height}
        className="rounded-md"
        alt="Logo of borderless community enterprise"
      />
    </LinkItem>
  );
};

export default PSPLogo;
