import * as React from 'react';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  ...props
}) => {
  return (
    <label className="relative inline-block w-10 h-6">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        {...props}
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-300 ease-in-out ${
          checked ? 'bg-blue-500' : 'bg-gray-400'
        }`}
      >
        <span
          className={`absolute w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out ${
            checked ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </span>
    </label>
  );
};
