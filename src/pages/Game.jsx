import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import friendshipQuestions from "../data/questions"; // Importing the questions directly

const Game = () => {
  // Removed `({ questions })` as we're importing directly
  const [step, eStep] = useState(0);
  // Renamed randomQ to currentQuestion for clarity on its purpose
  const [currentQuestion, setCurrentQuestion] = useState(""); // State to hold the current question being displayed
  // Renamed tracking to askedQuestionIndices to explicitly track indices of asked questions
  const [askedQuestionIndices, setAskedQuestionIndices] = useState([]); // State to track indices of questions that have already been asked
  const [allQuestionsAsked, setAllQuestionsAsked] = useState(false); // State to indicate if all questions have been asked

  // useEffect to generate a random question when the component mounts
  // and when allQuestionsAsked changes (to trigger a new question after a full cycle reset)
  useEffect(() => {
    // Only generate a question on initial mount (currentQuestion is empty)
    // or if the game has just reset (allQuestionsAsked is true)
    if (currentQuestion === "" || allQuestionsAsked) {
      generateRandomQuestion();
      setAllQuestionsAsked(false); // Reset the flag after attempting to generate a question
    }
  }, [allQuestionsAsked]); // Dependency array: re-run this effect when allQuestionsAsked changes

  // The generateRandomNumber function is no longer directly used in the new non-repeating logic,
  // as the random index is calculated based on the 'availableIndices' array length.
  // I'm keeping it here as per your request not to remove naming, but it's effectively unused.
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  // Function to generate a random question without repeating until all questions are asked
  const generateRandomQuestion = () => {
    // Check if all questions have been asked
    if (askedQuestionIndices.length === friendshipQuestions.length) {
      setAskedQuestionIndices([]); // Reset the list of asked questions
      setCurrentQuestion(
        "All questions asked! Click 'Show Question' again to restart."
      );
      setAllQuestionsAsked(true); // Set flag to true to trigger useEffect for a new question
      return; // Exit the function to display the reset message
    }

    // Create a list of indices for questions that have NOT been asked yet
    const availableIndices = friendshipQuestions
      .map((_, index) => index) // Create an array of all possible indices (0 to 99)
      .filter((index) => !askedQuestionIndices.includes(index)); // Filter out indices that are already in askedQuestionIndices

    // Safety check: If for some reason there are no available questions (shouldn't happen with the above logic)
    if (availableIndices.length === 0) {
      setCurrentQuestion("No questions available.");
      return;
    }

    // Select a random index from the 'availableIndices'
    const randomIndexInAvailable = Math.floor(
      Math.random() * availableIndices.length
    );
    const selectedQuestionIndex = availableIndices[randomIndexInAvailable];

    // Get the actual question string using the selected index
    const newQuestion = friendshipQuestions[selectedQuestionIndex];

    // Update the state: set the current question and add the index to the asked list
    setCurrentQuestion(newQuestion);
    setAskedQuestionIndices((prevIndices) => [
      ...prevIndices,
      selectedQuestionIndex,
    ]);
  };

  console.log(askedQuestionIndices);
  return (
    // wrapper
    <div className="flex min-h-screen h-full text-5xl dark:text-white dark:bg-[#191919]">
      {/* Container */}
      <div className="flex-grow flex flex-col ">
        {/* Question Number */}
        <div className="realtive flex justify-center items-center py-5 my-5 ">
          <div className="w-full flex justify-center items-center ">
            {/* You can dynamically display the question number here if you want */}
            <h2 className="text-7xl font-bold">
              Question{" "}
              {askedQuestionIndices.length === 0 && !allQuestionsAsked
                ? 1
                : askedQuestionIndices.length}
            </h2>
          </div>
          <div className="absolute flex justify-start items-center w-11/12 ">
            <Link to="/" className="focus:text-[#248cf3]">
              <IoHomeSharp className="" />
            </Link>
          </div>
        </div>
        {/* State */}
        <div className="flex-grow flex justify-center items-center ">
          {step == 0 ? (
            <div className="flex flex-col justify-evenly items-center w-4/5 h-1/2 ">
              {/* Display the current question */}
              <span className="text-center text-7xl">{currentQuestion}</span>
              <Button
                onClick={() => eStep(1)}
                className="w-2/3 py-8 mb-16 text-4xl rounded-full bg-[#248cf3] dark:bg-[#38e07b] dark:text-white"
              >
                Hide Question
              </Button>
            </div>
          ) : step == 1 ? (
            <div className="flex flex-col justify-evenly items-center w-4/5 h-1/2 ">
              <span className="text-center text-7xl text-yellow-500">
                Flip A Coin
              </span>
              <Button
                onClick={() => eStep(2)}
                className="w-2/3 py-8 mb-16 text-4xl rounded-full bg-[#248cf3] dark:bg-[#38e07b] dark:text-white"
              >
                Flip
              </Button>
            </div>
          ) : step == 2 ? (
            <div className="flex flex-col justify-evenly items-center w-4/5 h-1/2 text-green-400">
              <span className="text-center text-7xl">
                Give the device to the next person
              </span>
              <Button
                onClick={() => {
                  generateRandomQuestion(); // Call the updated function to get a new non-repeating question
                  eStep(0); // Reset step to show the question
                }}
                className="w-2/3 py-8 mb-16 text-4xl rounded-full bg-[#248cf3] dark:bg-[#38e07b] dark:text-white"
              >
                Show Question
              </Button>
            </div>
          ) : (
            <div>ERROR</div>
          )}
        </div>
        {/* */}
      </div>
      {/* */}
    </div>
  );
};

export default Game;
