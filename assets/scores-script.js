var list = document.getElementById("scoresList");
var clear = document.getElementById("clearBtn");

var scores = [];

function initialStoragePull() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores === null) {
        return
    }

    for (let i=0; i< storedScores.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = storedScores[i]
        list.appendChild(listItem)
    }
}



initialStoragePull();
