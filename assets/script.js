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

var startButton = document.getElementById("startBtn");
var introduction = document.getElementById("introPage");
var buttonArea = document.getElementById("buttonArea");
var timerEl = document.getElementById("timerDisplay")
var timer
var timeLeftSpan = document.querySelector("#timeLeft")
var initialInput = document.querySelector("#formGroupExampleInput")
var initialForm = document.querySelector("#initialsForm")

var scores = [];

initialStoragePull();

var questions = [
    {
        question: "What does JS stand for in coding language?",
        choices: [
            "JavaShop",
            "JavaShape",
            "JavaScript",
            "JumpingShape"
        ],
        answerIndex: 2,
    },
    {
        question: "What does CSS stand for in coding?",
        choices: [
            "Concise Styling Source",
            "Cascading Style Sheets",
            "Coding Style Support",
            "Coding Support Sheets",
        ],
        answerIndex: 1,
    },
    {
        question: "What's the name of the online source that helps with formatting?",
        choices: [
            "Bootstrap",
            "Bandsong",
            "Booghost",
            "Beststyle",
        ],
        answerIndex: 0,
    },
    {
        question: "What is the type of development called that involves working on the front and back end of a webpage?",
        choices: [
            "Front-side",
            "Full-shot",
            "Fast-shop",
            "Full-stack",
        ],
        answerIndex: 3,
    },
    {
        question: "What does HTML stand for in coding?",
        choices: [
            "Hashtag Moves Laterally",
            "Hover Tags Mine Language ",
            "Hypertext Markup Language",
            "Holding Text Marks Locally",
        ],
        answerIndex: 2,
    },
]

var currentQuestionIndex = 0;

window.onload = resetPage()

function initialStoragePull() {
    //get items that have already been in local storage
    //parse the string into an object
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores
    }
}

function resetPage() {
    // hide the quiz question, display the intro;
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("introPage").style.display = "block";
    document.getElementById("finalPage").style.display = "none";
}


function startQuiz() {
    console.log("test")
    // hide the intro page, display the quiz question;
    document.getElementById("introPage").style.display = "none";
    document.getElementById("quizContent").style.display = "block";

    // run the function to pull in the correct content into the quiz content
    startTimer()
    displayQuestion()
};

var timeLeft = 60

function startTimer() {
    timer = setInterval(function () {
        console.log("this is my time left" + timeLeft)
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer)
            displayEntry()
        }
    }, 1000);
}

function displayTime() {
    timeLeftSpan.textContent = timeLeft
    clearInterval(timer)
    timerEl.textContent = "Timer: 0"
}

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    // display the questions
    //display the choices
    for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {

        document.getElementById("answer" + (i + 1)).children[0].textContent = questions[currentQuestionIndex].choices[i];

    }

    document.getElementById("questionDisplay").textContent = questions[currentQuestionIndex].question;
};

function displayEntry() {
    document.getElementById("finalPage").style.display = "block";
    document.getElementById("quizContent").style.display = "none";
}



startButton.addEventListener("click", startQuiz);



function answerChosen(guess) {
    console.log(guess)
    if (questions[currentQuestionIndex].answerIndex !== parseInt(guess)) {
        timeLeft -= 10
        console.log("you are wrong")
    }
    currentQuestionIndex++;
    if (currentQuestionIndex > questions.length - 1) {
        displayEntry();
        displayTime();
    } else {
        displayQuestion();
    }

};

initialForm.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.matches("button")) {

        //trim any extra spaces on either side of the text
        var initialsText = initialInput.value.trim();

        // if field is blank, do nothing
        if (initialsText === "") {
            return;
        }

        //add to array
        scores.push({ intials: initialsText, score: timeLeft });

        //clear the field
        initialInput.value = "";

        //store in local storage
        localStorage.setItem("scores", JSON.stringify(scores))
        window.location.href = "high-scores.html"
    }
})

buttonArea.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        answerChosen(e.target.value)
    }
})

