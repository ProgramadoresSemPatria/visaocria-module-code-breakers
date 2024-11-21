'use client';
import { useState } from 'react';
import Button from '../../atoms/Button';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const ThemeSwitchButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      onClick={toggleDarkMode}
      className="rounded-full text-center px-4 hover:bg-[#1e1e2f] py-1 transition-colors ease-linear transform duration-200 text-2xl"
    >
      {isDarkMode ? <IoMdMoon /> : <IoMdSunny className="text-[#e0e0e0]" />}
    </Button>
  );
};

export default ThemeSwitchButton;
