// initial page has header with link to high scores page on the top left and timer at 0 on the top right
// initial page has a centered h1 title and description (in a card) with a "Start Quiz" button at the bottom

// link the "Start Quiz" button to 1) change the screen to hide current card contents, 2) display the first question and answer choices, and 3) start the timer
// questions should display 4 possible responses
// when you click the correct answer, the next question and responses are displayed
// when you click the wrong answer, the timer subtracts time and the next question and responses are displayed
// **not in the requirements: have the page indicate if the selected response was correct or not

// when time runs out OR when all questions have been answered, 1) the all done text should display 2) the time left should be noted as the score
// the all done text should include a text entry bos with a submit button
// the submit button should 1) cause the entry to be appended to the final score, 2) cause the entry and score to be saved to local storage, 3) bring the user to the high scores page
// the saved entries should be displayed from local storage into a list

//high scores page does not have link to page or timer displayed
//high scores page shows an ordered list of the previous initials and scores
//high scores page has a "go back" button and a "clear highscores" button
//go back button brings the user back to the initial coding quiz page

var startButton = document.getElementById("#startBtn")
var introduction = document.getElementById("#introPage")




var questions = [
    {
        question: "Here is question number 1?",
        choices: [
            "Answer choice 1a",
            "Answer choice 2a",
            "Answer choice 3a",
            "Answer choice 4a"
        ],
        answerIndex: 0,
    },
    {
        question: "Here is question number 2?",
        choices: [
            "Answer choice 1b",
            "Answer choice 2b",
            "Answer choice 3b",
            "Answer choice 4b",
        ],
        answerIndex: 0,
    },
    {
        question: "Here is question number 3?",
        choices: [
            "Answer choice 1c",
            "Answer choice 2c",
            "Answer choice 3c",
            "Answer choice 4c",
        ],
        answerIndex: 0,
    },
    {
        question: "Here is question number 4?",
        choices: [
            "Answer choice 1d",
            "Answer choice 2d",
            "Answer choice 3d",
            "Answer choice 4d",
        ],
        answerIndex: 0,
    },
    {
        question: "Here is question number 5?",
        choices: [
            "Answer choice 1e",
            "Answer choice 2e",
            "Answer choice 3e",
            "Answer choice 4e",
        ],
        answerIndex: 0,
    }
]

var currentQuestionIndex = 0;

window.onload = startQuiz

function startQuiz() {
    // hide the intro page;
    displayQuestion()
}

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    // display the questions
    //display the choices
    document.getElementById("questionDisplay").textContent = questions[currentQuestionIndex].question;
    
    document.getElementById("answer1").children[0].textContent = questions[currentQuestionIndex].choices[0];
    
    document.getElementById("answer2").children[0].textContent = questions[currentQuestionIndex].choices[1];

    document.getElementById("answer3").children[0].textContent = questions[currentQuestionIndex].choices[2];

    document.getElementById("answer4").children[0].textContent = questions[currentQuestionIndex].choices[3];


    // for (var i = 0; i < currentQuestion.choices.length; i++) {
    //     var choice = document.createElement("li")
    //     choice.setAttribute("id", i);
    //append choice to list
}

function answerChosen(event) {
    currentQuestionIndex++;
    displayQuestion();
}

choiceList.addEventListener("click", answerChosen)

// startButton.addEventListener("click", startQuiz);


