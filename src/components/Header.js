import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Header = ({ darkMode, darkModeHandler }) => {
  return (
    <div className="px-8 xl:px-0  shadow-xl dark-mode">
      <div className="py-8    flex items-center justify-between max-w-7xl m-auto">
        <div className="title">
          <h1 className="text-lg md:text-3xl font-bold">Weather App</h1>
        </div>
        <div className="button flex flex-col ">
          <div className="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block h-5 w-5 md:w-6 md:h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "
              onClick={darkModeHandler}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
          <label htmlFor="toggle" className="text-xs">
            {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
