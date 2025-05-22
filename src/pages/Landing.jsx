import { GoInfo } from "react-icons/go";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Landing = ({ eTh }) => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen h-full py-1 px-3 dark:text-white dark:bg-[#191919]">
      {/* title */}
      <div className="relative flex flex-col items-center w-full py-5 px-3">
        <div className="absolute top-0 flex justify-between items-center w-11/12 h-full ">
          {/* DarkMode */}
          {localStorage.th == "light" ? (
            <div
              onClick={() => {
                localStorage.th = "dark";
                eTh("dark");
              }}
              className="group w-full"
            >
              <MdDarkMode className="text-black size-12 hover:text-blue-700" />
            </div>
          ) : (
            <div
              onClick={() => {
                localStorage.th = "light";
                eTh("light");
              }}
              className="group w-full"
            >
              <MdWbSunny className="text-white size-12 hover:text-yellow-500 border-none" />
            </div>
          )}
          <GoInfo style={{ strokeWidth: "1px" }} className="size-12 " />
        </div>
        <h1 className="w-full h-full text-7xl text-center font-bold leading-tight tracking-[-0.015em]">
          {" "}
          Secret Questions{" "}
        </h1>
      </div>
      {/* card */}
      <div className="flex flex-col justify-evenly items-center flex-grow px-3 ">
        <div className=" text-center ">
          <h2 class="tracking-light text-8xl font-bold leading-tight ">
            Welcome to Secret Questions!
          </h2>
        </div>
        <div className="text-center ">
          <p class="text-6xl leading-normal dark:text-[##B3B3B3]">
            Answer random questions, keeping your answer secret unless revealed
            through a coin flip challenge.
          </p>
        </div>
        <div className="w-full">
          <Link to="description">
            <Button className="w-full py-8 text-4xl rounded-full bg-[#248cf3] dark:bg-[#38e07b] dark:text-white">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
