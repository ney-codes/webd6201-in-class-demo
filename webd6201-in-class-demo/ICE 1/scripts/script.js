/*Name: Neema Mwansembo
Date Modified: 13th January 2023
Bootsrap demo from week 1 online class WEBD6201
All about dealing with buttons, css+js+html*/

var getPtag = document.getElementById("ptag");
var getTagOne = document.getElementById("tagOne")

getPtag.innerHTML = "This is being input through a javascript script"
getTagOne.innerHTML = "This is another input"

function randomAlert() {
    alert("Welcome to WEBD6201 Section 01")
}

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}