import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { GoInfo } from "react-icons/go";

const Landing = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-svh py-1 px-3 my-1 mx-5">
      <div className="relative w-full ">
        <h1 className="text-[#111418] text-7xl text-center font-bold leading-tight tracking-[-0.015em] ">
          {" "}
          Secret Questions{" "}
        </h1>
        {/* <div className="absolute top-0 right-0 flex justify-center items-center h-full ">
          <GoInfo style={{ strokeWidth: "1px" }} className="size-12 " />
        </div> */}
      </div>
      <div className=" text-center ">
        <h2 class="text-[#111418] tracking-light text-8xl font-bold leading-tight ">
          Welcome to Secret Questions!
        </h2>
      </div>
      <div className="text-center ">
        <p class="text-[#111418] text-6xl leading-normal ">
          Answer random questions, keeping your answer secret unless revealed
          through a coin flip challenge.
        </p>
      </div>
      <div className="w-full">
        <Link to="game">
          <Button className="w-full py-8 text-4xl rounded-full bg-[#248cf3]">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
