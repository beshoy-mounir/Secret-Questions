import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";

const Description = ({ eTh }) => {
  return (
    // wrapper
    <div className="min-h-screen h-full text-5xl dark:text-white dark:bg-[#191919]">
      {/* container */}
      <div className="flex flex-col px-5 h-svh ">
        {/* heading  */}
        <div className="relative flex justify-center items-center py-5 my-5 ">
          <div className="w-full flex justify-center items-center ">
            <h2 className="w-full h-full text-7xl text-center font-bold leading-tight tracking-[-0.015em]">
              How to play
            </h2>
          </div>
          <div className="absolute top-0 flex justify-end items-center w-11/12 h-full ">
            <div className="flex justify-between items-center w-full">
              <Link to="/" className="focus:text-[#248cf3]">
                <IoChevronBackOutline className="-ml-3" />
              </Link>
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
              )}{" "}
            </div>
          </div>
        </div>
        {/* steps + button */}
        <div className="flex flex-col flex-grow justify-evenly items-center ">
          {/* steps */}
          <div className="flex flex-col flex-grow justify-evenly mb-40">
            <div>
              <h3 className="text-6xl font-bold py-10">1. Get a Question</h3>
              <span className="block px-10 leading-normal dark:text-[##B3B3B3]">
                Each player receives a unique question, keeping it secret from
                others.
              </span>
            </div>
            <div>
              <h3 className="text-6xl font-bold py-10">
                2.Challenge with a Coin Flip
              </h3>
              <span className="block px-10 leading-normal dark:text-[##B3B3B3]">
                {" "}
                To reveal your question, challenge another player to a coin
                flip. The winner gets to ask their question.
              </span>
            </div>
            <div>
              <h3 className="text-6xl font-bold py-10">
                3.Answer the Question
              </h3>
              <span className="block px-10 leading-normal dark:text-[##B3B3B3]">
                {" "}
                If the challenge is successful, the other player must answer the
                question truthfully.
              </span>
            </div>
            <div>
              <h3 className="text-6xl font-bold py-10">4.Keep Playing</h3>
              <span className="block px-10 leading-normal dark:text-[##B3B3B3]">
                {" "}
                Continue challenging and answering questions until the game ends
                or a winner is declared.
              </span>
            </div>
          </div>
          {/* button */}
          <div className="w-full">
            <div className="w-full">
              <Link to="/game">
                <Button className="w-full py-8 mb-16 text-4xl rounded-full bg-[#248cf3] dark:bg-[#38e07b] dark:text-white">
                  Start Game
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
