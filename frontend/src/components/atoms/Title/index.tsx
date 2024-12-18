interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, level, ...rest }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag {...rest}>{children}</Tag>;
};

export default Title;
