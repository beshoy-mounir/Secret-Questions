import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const Landing = ({ eTh }) => {
  return (
    // wrapper
    <div className="min-h-screen h-full text-5xl dark:text-white dark:bg-[#191919] overflow-scroll">
      {/* container */}
      <div className="flex flex-col px-5 h-svh ">
        {/* Heading */}
        <div className="relative flex justify-center items-center py-5 my-5 ">
          <div className="w-full flex justify-center items-center ">
            <h1 className="w-full h-full text-7xl text-center font-bold leading-tight tracking-[-0.015em]">
              {" "}
              Secret Questions{" "}
            </h1>
          </div>
          <div className="absolute top-0 flex justify-center items-center w-11/12 h-full ">
            {/* DarkMode */}
            <div className="flex justify-end items-center w-full">
              {localStorage.th == "light" ? (
                <div
                  onClick={() => {
                    localStorage.th = "dark";
                    eTh("dark");
                  }}
                  className=""
                >
                  <MdDarkMode className="text-black size-12 hover:text-blue-700" />
                </div>
              ) : (
                <div
                  onClick={() => {
                    localStorage.th = "light";
                    eTh("light");
                  }}
                  className=""
                >
                  <MdWbSunny className="text-white size-12 hover:text-yellow-500 border-none" />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* card */}
        <div className="flex flex-col flex-grow justify-evenly items-center ">
          {/* heading */}
          <div className=" text-center ">
            <h2 className="tracking-light text-8xl font-bold leading-tight ">
              Welcome to Secret Questions!
            </h2>
          </div>
          {/* text */}
          <div className="text-center ">
            <p class="text-6xl leading-normal dark:text-[##B3B3B3]">
              Answer random questions, keeping your answer secret unless
              revealed through a coin flip challenge.
            </p>
          </div>
          {/* button */}
          <div className="w-full">
            <Link to="description">
              <Button className="w-full py-8 text-4xl rounded-full bg-[#248cf3] dark:bg-[#38e07b] dark:text-white">
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
