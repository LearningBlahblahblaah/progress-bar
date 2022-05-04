// STEP 1:
// To select only 1 element by id. Observe, no need to #idName
const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
//To select multiple elements by querySelectorAll. returns an nodeList array
const circles = document.querySelectorAll(".circle")

//STEP 2:
let currentActive = 1;

//STEP 3: add event listener
next.addEventListener("click", () => {
    currentActive++;

    //To keep it within the boundaries
    if( currentActive > circles.length ){
        currentActive = circles.length;
    }
    console.log("currentActive", currentActive);

    //calling fn to update the dom
    update();

})

prev.addEventListener("click", () => {
    currentActive--;

    //To keep it within the boundaries
    if( currentActive < 1 ){
        currentActive = 1;
    }
    console.log("currentActive", currentActive);

     //calling fn to update the dom
     update();

})


//STEP 4: creating a fn to update the DOM
//if the circle index is < currentActive, add them to class ".active"
function update(){

    //4.1
    circles.forEach((circle, index) => {
        if (index < currentActive){
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    //4.2 To handle the progress bar via %
    const actives = document.querySelectorAll(".active");
    console.log(actives.length, circles.length);
    console.log((actives.length / circles.length) * 100, "%");
    //where actives.length is current circles tt are actives
    //where circles.length is the TOTAL num of circles

    //! To set the css style
    // progress.style.width = (actives.length / circles.length) * 100 + "%";
    //however, if 50%, it will be midway between 2 circles. not the right UI
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";


    //4.3 To toggle button disable
    if(currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }


}