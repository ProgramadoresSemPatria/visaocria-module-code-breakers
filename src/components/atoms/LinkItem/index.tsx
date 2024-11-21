import Link from 'next/link';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
const LinkItem: React.FC<LinkProps> = ({ children, href, className }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default LinkItem;
