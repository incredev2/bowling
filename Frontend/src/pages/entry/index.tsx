import React, { useContext, useEffect, useState } from "react";
import { NameContext } from "../../context/nameContext";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

const Entry = () => {
  const { name, setName } = useContext(NameContext);
  const [error, setError] = useState("");
  const router = useNavigate();

  const handleClick = () => {
    if (!name) {
      setError("Please enter your name");
      return;
    }
    localStorage.setItem("name", name);
    setError("");
    router("/playground");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    localStorage.getItem("name") && router("/playground");
  }, []);

  return (
    <div className="w-screen h-[calc(100vh-80px)] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center flex-col gap-8 p-6">
      <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
        Welcome to <span className="text-blue-600">Platform</span>
      </h1>
      <div className="w-full max-w-md space-y-6">
        <Input
          type="text"
          placeholder="Type your name"
          handleChange={handleChange}
          error={error}
        />
        <Button
          handleClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Get Started
        </Button>
      </div>
      <p className="text-gray-600 mt-4 text-center">
        Enter your name to begin the experience
      </p>
    </div>
  );
};

export default Entry;
