interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

const Subheading: React.FC<SubheadingProps> = ({ children, ...rest }) => {
  return <span {...rest}>{children}</span>;
};

export default Subheading;
