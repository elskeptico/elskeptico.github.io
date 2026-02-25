console.log("Start");
let theVariable = 0;
function runItTheThing() {
    if (theVariable = 0) {
        console.log("this hasn't run yet");
    } else if (theVariable = 1) {
        console.log("this has run 1 time!");
    } else {
        console.log("this has run " + theVariable.toString() + " times!");
    }
    theVariable += 1;
    runItTheThing();
}
setTimeout(() => {
  runItTheThing();
}, 2000);