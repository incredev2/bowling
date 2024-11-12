import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  handleClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={`${className} w-full py-2 px-4 text-lg font-semibold 
        rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02]`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
