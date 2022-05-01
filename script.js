
//(1)
const pointList = document.querySelectorAll(".progress_point");
const buttonsList = document.querySelectorAll("button");
console.log("pointList", pointList);
console.log("buttonsList", buttonsList);

let currentIndex = -1;

//(2)
buttonsList.forEach((button, buttonNum) => {
    button.addEventListener("click", () => {

        //(2.1) check if button click is allowed
        if (buttonNum === 0 && currentIndex === -1 ||buttonNum === 1 && currentIndex === pointList.length -1){
            console.log("here");
            //(2.2) add class to disable button
            return;
        }

        //(2.2)
        if(buttonNum === 0){ //if button is "prev"
            pointList[currentIndex].classList.remove("active");
            currentIndex -= 1;
            console.log("currentIndex", currentIndex);
        } else  { //if button is "next"
            currentIndex += 1;
            pointList[currentIndex].classList.add("active");
            console.log("currentIndex", currentIndex);
        }

        //(2.3) Setting button to disabled
        if (currentIndex === pointList.length -1){
            buttonsList[1].disabled = true;
        } else if (currentIndex === -1){
            buttonsList[0].disabled = true;
        } else {
            buttonsList[0].disabled = false;
            buttonsList[1].disabled = false;
        }

    })
})

function clearActiveClass(){
    pointList.forEach(each => each.classList.remove(".active"));
}