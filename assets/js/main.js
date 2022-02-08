let divBorder = document.getElementById("element");
let headLine = document.getElementById("head");

function clickSmall() {
    console.log("testsmall");
    divBorder.classList.add("small");
    divBorder.classList.remove("medium");
    divBorder.classList.remove("bigCrazy");
    headLine.classList.remove("crazyH");
    headLine.classList.add("normal");
}

function clickMedium() {
    console.log("testmedium");
    divBorder.classList.add("medium");
    divBorder.classList.remove("small");
    divBorder.classList.remove("bigCrazy");
    headLine.classList.remove("crazyH");
    headLine.classList.add("normal");
}

function clickCrazy() {
    console.log("testCrazy");
    divBorder.classList.add("bigCrazy");
    divBorder.classList.remove("medium");
    divBorder.classList.remove("small");
    headLine.classList.add("crazyH");
    headLine.classList.remove("normal");
}