
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

// list of questions to be rendered in quiz
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

//start the timer in the corner, when it reaches 0, the timer stops and the quiz is stopped
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

// the timer is displayed in the corner
function displayTime() {
    timeLeftSpan.textContent = timeLeft
    clearInterval(timer)
    timerEl.textContent = "Timer: 0"
}

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    // display the questions
    //display the choices
    //increment the questions one after the other
    for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {

        document.getElementById("answer" + (i + 1)).children[0].textContent = questions[currentQuestionIndex].choices[i];

    }

    document.getElementById("questionDisplay").textContent = questions[currentQuestionIndex].question;
};

function displayEntry() {
    document.getElementById("finalPage").style.display = "block";
    document.getElementById("quizContent").style.display = "none";
}

//start quiz when the start button is clicked
startButton.addEventListener("click", startQuiz);

//when an answer is chosen, it's checked to be correct or not; then the next question is incremented to be displayed until all questions have been displayed
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

// save input of initials with the final score to local storage 
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

//when an answer is chosen the next question is incremented
buttonArea.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        answerChosen(e.target.value)
    }
})

