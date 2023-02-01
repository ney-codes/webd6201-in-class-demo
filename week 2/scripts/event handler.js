var welcomeLabel = document.getElementById("welcome");
var displayEvent = document.getElementById("displayEvent");

welcomeLabel.addEventListener("dblclick", function () {
    console.log("Event: dblclick");
    displayEvent.textContent = "Event: dblclick";
});
welcomeLabel.addEventListener("mouseover", function () {
    console.log("Event: mouseover");
    displayEvent.textContent = "Event: mouseover";
});