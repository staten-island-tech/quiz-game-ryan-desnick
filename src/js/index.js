const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progress-text");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progress-bar-full");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = {};

let questions = [
  {
    question: "Who is not bald?",
    choice1: "Henriques",
    choice2: "Whalen",
    choice3: "Rerick",
    choice4: "Erlenwein",
    answer: Rerick,
  },
  {
    question: "Which restaurant has not closed down?",
    choice1: "Blaze Pizza",
    choice2: "KFC",
    choice3: "Five Guys",
    choice4: "TexMex",
    answer: TexMex,
  },
  {
    question: "Which staircase should you not go up during lunchtime?",
    choice1: "H",
    choice2: "I",
    choice3: "C",
    choice4: "F",
    answer: I,
  },
  {
    question: "How many minutes apart does the 79 (usually) come?",
    choice1: "Eight",
    choice2: "Twenty",
    choice3: "Fifteen",
    choice4: "Five",
    answer: Eight,
  },
  {
    question: "Which MSIT sport is actually a cult?",
    choice1: "Track",
    choice2: "Ping-Pong",
    choice3: "Football",
    choice4: "Swimming",
    answer: Track,
  },
];
