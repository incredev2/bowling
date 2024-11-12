import { useContext } from "react";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../../context/nameContext";

const Header = () => {
  const router = useNavigate();
  const { setName } = useContext(NameContext);
  const userName = localStorage.getItem("name");
  const handleBack = () => {
    localStorage.removeItem("name");
    setName("");
    router("/");
  };
  const handleClick = () => {
    router("/playground");
  };

  return (
    <header className="w-full h-20 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <nav className="w-3/4 mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-white hover:text-blue-100 transition-colors">
              {userName ? userName + "'s Roll" : "Bowling App"}
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            {userName ? (
              <Button
                className="bg-white text-blue-600"
                handleClick={handleBack}
              >
                Back
              </Button>
            ) : (
              <Button
                className="bg-white text-blue-600"
                handleClick={handleClick}
                disabled={true}
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
