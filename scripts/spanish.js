const u0q = ["to help", "to dance", "to drink", "to walk", "to sing", "to eat", "to buy", "to run", "ought to/should", "to draw", "to write", "to listen", "to study", "to talk/speak", "to read", "to call/be named", "to watch/look", "to ride/mount", "to swim", "to need", "to pass/spend time", "to paint", "to practice", "to prepare", "to recieve", "to review", "to touch/play an instrument", "to take in/drink", "to work", "to travel", "to live", "to skate", "to do/to make", "to have", "to want/to like", "to understand", "to think", "to be able to (can)", "to play a sport", "to go", "to be", "to be (located)", "to know"];
const u0a = ["ayudar", "bailar", "beber", "caminar", "cantar", "comer", "comprar", "correr", "deber", "dibujar", "escribir", "escuchar", "estudiar", "hablar", "leer", "llamar", "mirar", "montar", "nadar", "necesitar", "pasar", "pintar", "practicar", "preparar", "recibir", "repasar", "tocar", "tomar", "trabajar", "viajar", "vivir", "patinar", "hacer", "tener", "querer", "entender", "pensar", "poder", "juger", "ir", "ser", "estar", "saber"];
const questions = ["Good morning.", "Good evening.", "Good afternoon.", "Hello!", "What is your name?", "My name is...", "Delighted. (masculine)", "Delighted. (feminine)", "Likewise.", "Pleased to meet you.", "sir, Mr.", "madam, Mrs.", "miss, Miss", "How are you? (formal)", "How are you? (familiar)", "What's happening?", "How are you?", "And you? (familiar)", "And you? (formal)", "(very) well", "nothing", "okay/so-so", "thank you", "Good-bye!", "See you later.", "See you tomorrow.", "See you!", "What time is it?", "It's one o'clock.", "It's nine-thirty.", "It's 1:29.", "It's 3:10.", "It's 12:54.", "pen", "folder", "notebook", "sheet of paper", "student (masculine)", "student (feminine)", "pencil", "book", "teacher (masculine)", "teacher (feminine)", "classroom", "year", "day", "month", "week", "What day is today", "What is the date?", "It's the 28 of August.", "It's the first of January.", "today", "tomorrow", "today", "how many (masculine)", "how many (feminine)", "in", "there is/there are", "please", "How do you say...?", "You say...", "How is...spelled?", "It's spelled", "What does...mean?", "It means...", "What's the weather like?", "It's hot.", "It's cold.", "It's sunny.", "It's raining.", "It's snowing.", "season", "winter", "fall/autumn", "spring/blunumn", "summer", "the eye", "the mouth", "the leg", "the foot", "the hand", "the finger", "the arm", "the stomach", "the nose", "the head"];
const answers = ["Buenos días.", "Buenas noches.", "Buenas tardes.", "¡Hola!", "¿Cómo te llamas?", "Me llamo...", "Encantado.", "Encantada.", "Igualmente.", "Mucho gusto.", "señor, Sr.", "señora, Sra.", "señorita, Srta.", "¿Cómo está Ud.?", "¿Cómo estás?", "¿Qué pasa?", "¿Qué pasa?", "Y tú?", "Y Ud.?", "(muy) bien", "nada", "regular", "gracias", "¡Adiós!", "Hasta luego.", "Hasta mañana.", "¡Nos vemos!", "¿Qué hora es?", "Es la una.", "Son las nueve y media.", "Son las uno y veintinueve.", "Son las tres y diez.", "Es el uno menos seis.", "el bolígrafo", "la carpeta", "el cuaderno", "la hoja de papel", "el estudiante", "la estudiante", "el lápiz", "el libro", "el profesor", "la profesora", "el pupitre", "la sala de clases", "el año", "el día", "el mes", "la semana", "¿Qué día es hoy?", "¿Cuál es la fecha?", "Es el veintiocho de Agosto.", "Es el primero de enero.", "hoy", "mañana", "¿cuántos?", "¿cuántas?", "en", "hay", "por favor", "¿Cómo se dice...?", "Se dice...", "¿Cómo se escribe...?", "Se escribe...", "¿Qué quiere decir...?", "Quiere decir...", "¿Qué tiempo hace?", "Hace calor.", "Hace frío.", "Hace sol.", "Hace viento.", "Llueve.", "Nieva.", "la estación", "el invierno", "el otoño", "la primavera", "el verano", "el ojo", "la boca", "la pierna", "el pie", "la mano", "el dedo", "el brazo", "es estómago", "la nariz", "la cabeza"];
const empty = [];
const questionText = document.getElementById("question");
const inputField = document.getElementById("inputfield");
const submitButton = document.getElementById("submitbutton");
const finishButton = document.getElementById("finishbutton");
var tempquestions = questions;
var tempanswers = answers;
var score = 0;
var numberofquestions = 1;
var version = "gooint";
let correctanswer;
let answer;

var random = Math.floor(Math.random() * questions.length);
document.getElementById("question").textContent = questions[random];
correctanswer = answers[random];

submitButton.addEventListener('click', function() {
    submit();
});

finishButton.addEventListener('click', function() {
    finishTest();
});

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        submit();
    }
});

function finishTest() {
    let accuracy = ((numberofquestions / score) * 100).toFixed(2);
    alert("Practice complete. \nAccuracy: " + accuracy + "% (" + score + " / " + numberofquestions + ") \nPressing OK will start another round.");
}

function submit() {
    answer = inputField.value;
    answer = answer.toLowerCase;
    if (answer == correctanswer) {
        alert("Correct!");
        score += 1;
        questions.splice(random, 1);
        answers.splice(random, 1);
    }
    if (answer != correctanswer) {
        alert("Incorrect! The correct answer was " + answers[random]);
    }
    if (questions.length == 0) {
        finishTest();
    } else {
        random = Math.floor(Math.random() * questions.length);
        questionText.textContent = questions[random];
        numberofquestions += 1;
        correctanswer = answers[random];
    }
}