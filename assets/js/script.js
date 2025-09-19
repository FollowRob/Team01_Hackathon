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
    explanation:
      "The 'lang' attribute tells assistive technologies (like screen readers) the language of the page, improving accessibility.",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    correct: "<title>",
    explanation:
      "The <title> element defines the title shown in the browser tab and used by search engines.",
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
    explanation:
      "The <a> (anchor) element is used to create hyperlinks to other pages, files, or sections within the same page.",
  },
  {
    question: "What combination is used with the <datalist> element in HTML5?",
    options: ["<option>", "<value>", "<label>", "<input>"],
    correct: "<input>",
    explanation:
      "The <datalist> element works with <input> to provide a list of predefined options while still allowing free text input.",
  },
  {
    question: "What is the main purpose of the <form> element?",
    options: [
      "To link the Javascript script sheet",
      "To input table",
      "To update the image",
      "To group and submit user input data to a server.",
    ],
    correct: "To group and submit user input data to a server.",
    explanation:
      "The <form> element collects user input and sends it to a server for processing, usually through GET or POST requests.",
  },
  {
    question: "What type of attribute is a 'control' attribute?",
    options: ["global", "boolean", "event", "element- specific"],
    correct: "boolean",
    explanation:
      "A boolean attribute represents a true/false value. If present, it's considered true (e.g., 'disabled').",
  },
  {
    question: "Select the correct syntax to link to an external stylesheet?",
    options: [
      "<style rel='stylesheet' href='styles.css'>",
      "<link rel='stylesheet' href='styles.css'>",
      "<a rel='stylesheet' href='styles.css'>",
      "<a href='stylesheet>",
    ],
    correct: "<link rel='stylesheet' href='styles.css'>",
    explanation:
      "The <link> element with rel='stylesheet' and href='...' is the correct way to link an external CSS file.",
  },
  {
    question:
      "Which pseudo-class is used to style a link only when a user hovers over it?",
    options: [":hover", ":active", ":focused", ":visited"],
    correct: ":hover",
    explanation:
      "The :hover pseudo-class applies styles when the user’s cursor is over an element.",
  },
  {
    question: "What is 1vh in CSS?",
    options: [
      "Viewport width",
      "View width of the parent element.",
      "view horizontal width ",
      "Show the visual width",
    ],
    correct: "Viewport width",
    explanation:
      "1vh equals 1% of the viewport’s height, not width. (So 100vh = full viewport height).",
  },
  {
    question: "How many ways can CSS be applied to an HTML document?",
    options: ["3", "1", "2", "0"],
    correct: "3",
    explanation:
      "There are three ways: inline CSS, internal CSS (using <style>), and external CSS (using <link>).",
  },
  {
    question:
      "Which feature of Chrome Developer Tools is most useful when troubleshooting layout issues in CSS?",
    options: ["Element", "console", "source", "network"],
    correct: "Element",
    explanation:
      "The 'Elements' panel lets you inspect and modify HTML and CSS directly, making it essential for layout debugging.",
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
    explanation:
      "Variable names cannot start with a digit, so '2names' is invalid.",
  },
  {
    question:
      "What is the option to write the multiline comment in Javascript?",
    options: ["/* */", "<!---->", "//", "/*"],
    correct: "/* */",
    explanation:
      "JavaScript supports multiline comments using /* comment here */.",
  },
  {
    question: "What is the JavaScript keyword to return the type of variable?",
    options: ["datatype", "typeof", "includes", "var"],
    correct: "typeof",
    explanation:
      "The 'typeof' operator returns the data type of a variable or expression.",
  },
  {
    question:
      "What is the method used in JavaScript to check if a value exists within an array or a string?",
    options: [".pop ()", "shifts()", ".includes()", ".values()"],
    correct: ".includes()",
    explanation:
      "The .includes() method checks if a value exists in an array or string, returning true or false.",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "Number", "Float", "String"],
    correct: "Float",
    explanation:
      "JavaScript has Number (covering integers and floats), but 'Float' itself is not a separate type.",
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
    explanation:
      "Arrays in JavaScript use square brackets []. The other options are invalid syntax.",
  },
  {
    question:
      "Select an organisation that develops standard and guidelines to help build web?",
    options: ["WWF", "WWE", "W3C", "W3S"],
    correct: "W3C",
    explanation:
      "The W3C (World Wide Web Consortium) develops open standards like HTML, CSS, and accessibility guidelines.",
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
    explanation:
      "The 'aria-label' attribute gives an accessible name to elements, read aloud by screen readers.",
  },
  {
    question: "selects an element by its ID in JavaScript?",
    options: [
      "document.getElementById()",
      "document.getByID()",
      "document.select()",
      "document.querySelector()",
    ],
    correct: "document.getElementById()",
    explanation:
      "The document.getElementById() method returns the element with the given ID.",
  },
];

// Select the elements from the DOM
const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextButton = document.querySelector(".quiz-container .next-button");
const results = document.querySelector(".results");
const answerExplanation = document.querySelector(".answer-explanation");
const retakeQuizButton = document.querySelector(".retake-button");
if (retakeQuizButton) {
  retakeQuizButton.addEventListener("click", setupQuiz);
}
// Add Timer element
const timer = document.querySelector(".quiz-container.timer");

// Variable to track the current question number from the above array
let questionNumber = 0;
let score = 0;
// Total number of questions
const MAX_QUESTION = quizData.length;
let countDown = 10;

// Function to shuffle the options array
function shuffleArray(array) {
  //Shuffles Array
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

// Function to create and display a question
const createQuestion = () => {
  // Ask questions in order
  let currentIndex = questionNumber;
  let timeLeft = 10;
  const timerDisplay = document.querySelector(".timer");
  //
  function startTimer() {
    clearInterval(countDown);
    timeLeft = 10; // Reset time left to 10 seconds
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
    }
  if (timerDisplay) {
    timerDisplay.classList.remove("danger");
    timerDisplay.textContent = `Time left:${timeLeft} seconds`;

    countDown = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Time left:${timeLeft} seconds`;
      if (timeLeft < 5) {
        timerDisplay.classList.add("danger");
      }
      if(timeLeft <= 0) {
        clearInterval(countDown);
        timerDisplay.textContent = "⏰ Time's up!";
        setTimeout(() => {
          displayNextQuestion();
        }, 1000); // short delay for user to see "Time's up!"
      }
    }, 1000);
  }
  //
  function startQuiz() {
  loadNextQuestion(); // ✅ this loads the first question AND starts the timer
 }

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

    //sets up a function to run whenever the user clicks on an answer button (option), the timer stops and the code prepares to show feedback about whether the answer was correct or not..
      option.addEventListener("click", function () {
        clearInterval(countDown);
      var correctMessage = " ";
      

      // Compare trimmed values to avoid whitespace issues
      if (o.trim() === quizData[currentIndex].correct.trim()) {
        option.classList.add("correct");
        correctMessage = "Correct!";
        score++;
      } else {
        option.classList.add("incorrect");
        correctMessage = "Incorrect.";

        // Find and highlight the correct answer button
        Array.from(options.children).forEach((btn) => {
          if (
            btn.textContent.trim() === quizData[currentIndex].correct.trim()
          ) {
            btn.classList.add("correct");
          }
        });
      }
      // Show explanation
      answerExplanation.textContent =
        correctMessage + quizData[currentIndex].explanation;

      // Optionally, disable all buttons after selection
      Array.from(options.children).forEach((btn) => (btn.disabled = true));
    });
    options.appendChild(option);
  });
};


// Function to display quiz results
const displayquizResult = () => {
  let resultMessage = `You scored ${score} out of ${MAX_QUESTION}.`;
  results.textContent = resultMessage;

  // Voice thanking the contestant
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance('Thank you for participating in the quiz!');
    window.speechSynthesis.speak(utter);
  }
};

function setupQuiz() {
  score = 0;
  questionNumber = 0;
  window.location.href = "quiz.html";
}

createQuestion();

const displayNextQuestion = () => {
  clearInterval(countDown);
  if (questionNumber >= MAX_QUESTION - 1) {
    displayquizResult();
    return;
  } else {
    questionNumber++;
    createQuestion();
  }
};
nextButton.addEventListener("click", displayNextQuestion);

// Navbar functionality

document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    var navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });
});
