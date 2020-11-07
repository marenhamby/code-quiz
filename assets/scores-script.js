var list = document.getElementById("scoresList");
var clear = document.getElementById("clearBtn");

var scores = [];

function initialStoragePull() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores === null) {
        return
    }

    for (let i = 0; i < storedScores.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = "Initials: " + storedScores[i].intials + " Score: " + storedScores[i].score
        list.appendChild(listItem)
    }
}


clear.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        localStorage.clear();
        location.reload();
    }
})


initialStoragePull();
