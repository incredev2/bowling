import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  error,
  handleChange,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-4 rounded-lg border border-gray-300 text-lg shadow-sm 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </>
  );
};

export default Input;
