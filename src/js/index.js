const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Who is not bald?",
    answers: [
      { text: "Rerick", correct: true },
      { text: "Henriques", correct: false },
      { text: "Whalen", correct: false },
      { text: "Erlenwein", correct: false },
    ],
  },
  {
    question: "Which restaurant is still open?",
    answers: [
      { text: "Blaze Pizza", correct: false },
      { text: "KFC", correct: false },
      { text: "TexMex", correct: true },
      { text: "Five Guys", correct: false },
    ],
  },
  {
    question: "Which staircase should you not go up during lunchtime?",
    answers: [
      { text: "H", correct: false },
      { text: "I", correct: true },
      { text: "C", correct: false },
      { text: "F", correct: false },
    ],
  },
  {
    question: "Which MSIT sport is actually a cult?",
    answers: [
      { text: "Ping-Pong", correct: false },
      { text: "Football", correct: false },
      { text: "Swimming", correct: false },
      { text: "Track", correct: true },
    ],
  },
  {
    question: "Is Ryan very sorry about the lateness of this project?",
    answers: [
      { text: "Yes", correct: true },
      { text: "Yes", correct: true },
      { text: "Yes", correct: true },
      { text: "Yes", correct: true },
    ],
  },
];
