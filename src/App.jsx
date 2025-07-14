import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  // const data = [
  //   {
  //     id: 1,
  //     question: "Rolex is a company that specializes in what type of product?",
  //     answers: [
  //       {
  //         text: "Phone",
  //         correct: false,
  //       },
  //       {
  //         text: "Watches",
  //         correct: true,
  //       },
  //       {
  //         text: "Food",
  //         correct: false,
  //       },
  //       {
  //         text: "Cosmetic",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     question: "When did the website `Facebook` launch?",
  //     answers: [
  //       {
  //         text: "2004",
  //         correct: true,
  //       },
  //       {
  //         text: "2005",
  //         correct: false,
  //       },
  //       {
  //         text: "2006",
  //         correct: false,
  //       },
  //       {
  //         text: "2007",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     question: "Who played the character of harry potter in movie?",
  //     answers: [
  //       {
  //         text: "Johnny Deep",
  //         correct: false,
  //       },
  //       {
  //         text: "Leonardo Di Caprio",
  //         correct: false,
  //       },
  //       {
  //         text: "Denzel Washington",
  //         correct: false,
  //       },
  //       {
  //         text: "Daniel Red Cliff",
  //         correct: true,
  //       },
  //     ],
  //   },
  // ];


  const data = [
  {
    id: 1,
    question: "What color is the sky on a clear, sunny day?",
    answers: [
      { text: "Blue", correct: true },
      { text: "Red", correct: false },
      { text: "Green", correct: false },
      { text: "Yellow", correct: false },
    ],
  },
  {
    id: 2,
    question: "What do you use to brush your teeth?",
    answers: [
      { text: "Fork", correct: false },
      { text: "Comb", correct: false },
      { text: "Toothbrush", correct: true },
      { text: "Spoon", correct: false },
    ],
  },
  {
    id: 3,
    question: "Which animal is known as 'man's best friend'?",
    answers: [
      { text: "Cat", correct: false },
      { text: "Parrot", correct: false },
      { text: "Dog", correct: true },
      { text: "Snake", correct: false },
    ],
  },
  {
    id: 4,
    question: "Which season comes after summer?",
    answers: [
      { text: "Spring", correct: false },
      { text: "Autumn", correct: true },
      { text: "Winter", correct: false },
      { text: "Rainy", correct: false },
    ],
  },
  {
    id: 5,
    question: "What planet do we live on?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Earth", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
    ],
  },
  {
    id: 7,
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    id: 8,
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "O2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },
  {
    id: 9,
    question: "Who wrote Romeo and Juliet?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Mark Twain", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    id: 10,
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    id: 11,
    question: "Which country has the largest population in the world (as of 2025)?",
    answers: [
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "USA", correct: false },
      { text: "Indonesia", correct: false },
    ],
  },
  {
    id: 12,
    question: "What is the smallest prime number?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
  },
  {
    id: 13,
    question: "What is the capital of Iceland?",
    answers: [
      { text: "Helsinki", correct: false },
      { text: "Oslo", correct: false },
      { text: "Reykjavik", correct: true },
      { text: "Copenhagen", correct: false },
    ],
  },
  {
    id: 14,
    question: "Who developed the general theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Stephen Hawking", correct: false },
    ],
  },
  {
    id: 15,
    question: "What is the only country in the world that is also a continent?",
    answers: [
      { text: "Australia", correct: true },
      { text: "Greenland", correct: false },
      { text: "Antarctica", correct: false },
      { text: "South Africa", correct: false },
    ],
  },
];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">Dear Mr. {username}.  You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
