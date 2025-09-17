// Quiz data array containing questions, options, and correct answers

let quizData = [
  {
    question: "In HTML, why do we use the 'lang' attribute?",
    options: [
      "Help screen readers to identify the language of the page.",
      "Help the browser to identify the content",
      "Refers to optimizing a website's",
      "Represents the content of an HTML document.",
    ],
    correct: "Help screen readers to identify the language of the page.",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    correct: "<title>",
  },
  {
    question: "In HTML,why do we use the 'anchor' element?",
    options: [
      "Element used to create image",
      "Element used to create hyperlink",
      "To link to other web documents files or locations within the same page.",
      "Provide screen readers with the discription of the image",
    ],
    correct:
      "To link to other web documents files or locations within the same page.",
  },
  {
    question: "What combination is used with the <datalist> element in HTML5?",
    options: ["<option>", "<value>", "<label>", "<input>"],
    correct: "<input>",
  },
  {
    question: " What is the main purpose of the <form> element?",
    options: [
      "To link the Javascript script sheet",
      "To input table",
      "To update the image",
      "To group and submit user input data to a server.",
    ],
    correct: "To group and submit user input data to a server.",
  },
  {
    question: " What type of attribute is a 'control' attribute?",
    options: ["global", "boolean", "event", "element- specific"],
    correct: "boolean",
  },
  {
    question: "Select the  correct syntax to  link to an external stylesheet?",
    options: [
      "<style rel='stylesheet' href='styles.css'>",
      "<link rel='stylesheet' href='styles.css'>",
      "<a rel='stylesheet' href='styles.css'>",
      "<a href='stylesheet>",
    ],
    correct: "<link rel='stylesheet' href='styles.css'>",
  },
  {
    question:
      "Which  pseudo-class is  used to style a link only when a user hovers over it?",
    options: [":hover", ":active", ":focused", ":visited"],
    correct: ":hover",
  },
  {
    question: "What is  1vh  in CSS?",
    options: [
      "Viewport width",
      "View width of the parent element.",
      "view horizontal width ",
      "Show the visual width",
    ],
    correct: "Viewport width",
  },
  {
    question: " How many type of inserting a  CSS stylesheet?",
    options: ["3", "1", "2", "0"],
    correct: "3",
  },
  {
    question:
      "Which feature of Chrome Developer Tools is most useful when troubleshooting layout issues in CSS?",
    options: ["Element", "console", "source", "network"],
    correct: "Element",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    options: [
      "2names",
      "_first_and_last_names",
      "FirstAndLastNames",
      "firstAndLastNames",
    ],
    correct: "2names",
  },
  {
    question:
      " what is the  option to write the multiline comment in Javascript?",
    options: ["/* */", "<!---->", "//", "/*"],
    correct: "/* */",
  },
  {
    question: "JavaScript keyword to return the type of variable?",
    options: ["datatype", "typeof", "includes", "var"],
    correct: "typeof",
  },
  {
    question:
      "Method used in JavaScript to check if a value exists within an array or a string?",
    options: [".pop ()", "shifts()", ".includes()", ".values()"],
    correct: ".includes()",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "Number", "Float", "String"],
    correct: "Float",
  },
  {
    question:
      "Which of the following is a correct way to create an array in JavaScript?",
    options: [
      "var colors = ( 'red', 'green', 'blue' )",
      "var colors = [ 'red', 'green', 'blue' ]",
      "var colors = { 'red', 'green', 'blue' }",
      "var colors = < 'red', 'green', 'blue' >",
    ],
    correct: "var colors = [ 'red', 'green', 'blue' ]",
  },
  {
    question:
      "Select an organisation that develops standard and guidelines to help build web?",
    options: ["WWF", "WWE", "W3C", "W3S"],
    correct: "W3C",
  },
  {
    question: "What is the purpose of 'aria-label'?",
    options: [
      "Provide screen readers with the discription of the image",
      "Help screen readers to identify the language of the page",
      "To link to other web documents files or locations within the same page.",
      "Refers to optimizing a website's",
    ],
    correct: "Provide screen readers with the discription of the image",
  },
  {
    question: " selects an element by its ID in JavaScript ?",
    options: [
      "document.getElementById()",
      "document.getByID()",
      "document.select()",
      "document .queryselector()",
    ],
    correct: "a)document.getElementById()",
  },
];

// Select the elements from the DOM
const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextButton = document.querySelector(".quiz-container .next-button");
const quizResult = document.querySelector(".quiz-result");
const retakeQuizButton = document.querySelector(".quiz-result .retake-button");
if (retakeQuizButton) {
  retakeQuizButton.addEventListener("click", setupQuiz);
}

// Variable to track the current question number from the above array
let questionNumber = 0;
let score = 0;
const MAX_QUESTION = 11;

// Function to shuffle the options array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Select the question element
const questionElement = document.querySelector(".quiz-container .question");

// Function to check the selected answer
const checkAnswer = (e) => {
  let userAnswer = e.target.textContent;
  //console.log(userAnswer);
};

const createQuestion = () => {
  // Ask questions in order
  const currentIndex = questionNumber;

  // Clear previous options
  options.innerHTML = "";

  // Set the question text
  question.textContent = `${questionNumber + 1}/${MAX_QUESTION}   ${
    quizData[currentIndex].question
  }`;

  const shuffledOptions = [...quizData[currentIndex].options];
  shuffleArray(shuffledOptions);
  shuffledOptions.forEach((o) => {
    const option = document.createElement("button");
    option.classList.add("option");
    option.textContent = o;

    // create event listener for each option i.e color of the option button changes based on correct or incorrect answer selected
    option.addEventListener("click", (e) => {
      checkAnswer(e);
    });
    option.addEventListener("click", function () {
      // Compare trimmed values to avoid whitespace issues
      if (o.trim() === quizData[currentIndex].correct.trim()) {
        option.classList.add("correct");
      } else {
        option.classList.add("incorrect");
        // Find and highlight the correct answer button
        Array.from(options.children).forEach((btn) => {
          if (
            btn.textContent.trim() === quizData[currentIndex].correct.trim()
          ) {
            btn.classList.add("correct");
          }
        });
      }
      // Optionally, disable all buttons after selection
      Array.from(options.children).forEach((btn) => (btn.disabled = true));
    });
    options.appendChild(option);
  });
};

// Function to display quiz results
const displayquizResult = () => {
  window.location.href = "results.html";
};

function setupQuiz() {
  score = 0;
  questionNumber = 0;
  window.location.href = "quiz.html";
}

createQuestion();

const displayNextQuestion = () => {
  if (questionNumber >= MAX_QUESTION - 1) {
    displayquizResult();
    return;
  } else {
    questionNumber++;
    createQuestion();
  }
};
nextButton.addEventListener("click", displayNextQuestion);
