interface CustomScrollbarProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomScrollbar({ children, className }: CustomScrollbarProps) {
  return (
    <div
      className={`
          overflow-y-auto
          [&::-webkit-scrollbar]:w-3
          [&::-webkit-scrollbar-track]:bg-gray-900
          [&::-webkit-scrollbar-thumb]:bg-gray-600
          [&::-webkit-scrollbar-thumb]:border-2
          [&::-webkit-scrollbar-thumb]:border-gray-900
          ${className}
        `}
    >
      {children}
    </div>
  );
}
