// Quiz data array containing questions, options, and correct answers

let quizData = [
    {
        question: "What is the color of jupiter?", 
        options:["red ", "blue", "orange", "brown"],
        correct: "brown",


    },
    {question: "What is the famous scientist to develop theory of general relativity?", 
        options:["Newton", "Einstein", "Tesla", "Edison"],
        correct: "Einstein ",
    },

    {       
        question: "What is the capital of Australia?",
        options:["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: "Canberra",
    },
    {
        question: "What is the largest mammal in the world?",
        options:["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: "Blue Whale",      
    },
    {
        question: "What is the smallest prime number?",
        options:["0", "1", "2", "3"],
        correct: "2",
    },
    {
        question: "What year was javaScript launched?",
        options:["1996", "1995", "1994", "none of the above"],
        correct: "1995",
    },
    {
        question: "Who wrote the novel 'Pride and Prejudice?'",
        options:["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Mary Shelley"],
        correct: "Jane Austen",
    },
    {
        question: "What is the fuction in javascript?",
        options:["toString()", "toFixed()", "parseInt()", "All of the above"],
        correct: "All of the above",
    },

    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options:["Tofu", "Seaweed", "Miso paste", "Rice"],
        correct: "Miso paste",
    },
    {   
        question: "What is the hardest natural substance on Earth?",
        options:["Gold", "Iron", "Diamond", "Platinum"],
        correct: "Diamond",

    }
    
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
    question.innerHTML = `<span class = "question-number"> ${questionNumber + 1}/${MAX_QUESTION}   </span>${quizData[currentIndex].question}`;

    const shuffledOptions = [...quizData[currentIndex].options];
    shuffleArray(shuffledOptions);
    shuffledOptions.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;

        // create event listener for each option i.e color of the option button changes based on correct or incorrect answer selected
        option.addEventListener("click", (e) => {
            checkAnswer(e);
        });
            option.addEventListener("click", function() {
                // Compare trimmed values to avoid whitespace issues
                if (o.trim() === quizData[currentIndex].correct.trim()) {
                    option.classList.add("correct");
                } else {
                    option.classList.add("incorrect");
                    // Find and highlight the correct answer button
                    Array.from(options.children).forEach(btn => {
                        if (btn.textContent.trim() === quizData[currentIndex].correct.trim()) {
                            btn.classList.add("correct");
                        }
                    });
                }
                // Optionally, disable all buttons after selection
                Array.from(options.children).forEach(btn => btn.disabled = true);
            });
        options.appendChild(option);
    });
};

// Function to display quiz results
const displayquizResult = () => {
    window.location.href = "results.html";
}

function setupQuiz() {
    score = 0;
    questionNumber = 0;
    window.location.href = "quiz.html";
}

createQuestion();

const displayNextQuestion = () => {
     if (questionNumber >= MAX_QUESTION-1) {
        displayquizResult();
        return;
    }else { 
    questionNumber++;
        createQuestion();
    }
    

};
nextButton.addEventListener("click", displayNextQuestion);
