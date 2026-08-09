const questions = ["to help", "to dance", "to drink", "to walk", "to sing", "to eat", "to buy", "to run", "ought to/should", "to draw", "to write", "to listen", "to study", "to talk/speak", "to read", "to call/be named", "to watch/look", "to ride/mount", "to swim", "to need", "to pass/spend time", "to paint", "to practice", "to prepare", "to recieve", "to review", "to touch/play an instrument", "to take in/drink", "to work", "to travel", "to live", "to skate", "to do/to make", "to have", "to want/to like", "to understand", "to think", "to be able to (can)", "to play a sport", "to go", "to be", "to be (located)", "to know"];
const answers = ["ayudar", "bailar", "beber", "caminar", "cantar", "comer", "comprar", "correr", "deber", "dibujar", "escribir", "escuchar", "estudiar", "hablar", "leer", "llamar", "mirar", "montar", "nadar", "necesitar", "pasar", "pintar", "practicar", "preparar", "recibir", "repasar", "tocar", "tomar", "trabajar", "viajar", "vivir", "patinar", "hacer", "tener", "querer", "entender", "pensar", "poder", "juger", "ir", "ser", "estar", "saber"];
const empty = [];
const questionText = document.getElementById("question");
const inputField = document.getElementById("inputfield");
const submitButton = document.getElementById("submitbutton");
var tempquestions = questions;
var tempanswers = answers;
var score = 0;
var numberofquestions = 1;
var version = "goodpoint";
let correctanswer;

var random = Math.floor(Math.random() * questions.length);
document.getElementById("question").textContent = questions[random];
correctanswer = answers[random];

submitButton.addEventListener('click', function() {
    let answer = inputField.value;
    if (answer.toLowerCase == correctanswer) {
        alert("Correct!");
        score += 1;
    } else if (answer.toLowerCase != correctanswer) {
        alert("Incorrect! The correct answer was " + answers[random]);
    }
    random = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[random];
    numberofquestions += 1;
    correctanswer = answers[random];
});

function question() {
    var random = Math.floor(Math.random() * questions.length)
    document.getElementById("question").textContent = questions[random];

}