const PROFILE_PICTURES = ["images/profpics/profpic.jpg", "images/profpics/teslapic.png", "images/profpics/youtupic.png", "images/profpics/eyepic.jpg", "images/profpics/badrawpic.png", "images/profpics/ivanpic.png", "images/profpics/unipic.png"];
const AKA_NAMES = ["a ghooooooost", "youuur mom!", "ElSkeptico", "is a weird acronym", "Steeeve", "AKA AKA AKA AKA" , "Your wierd hippie uncle", "Help, I'm trapped writing AKA names!", "Markus Persson :O", "Alex Hirsch", "NTK", "Sentient Snowglobe", "FOOD????????", "Otto Von Cheesebiscuit", "Sole heir to the hot nut mix fortune", "Lord Clapham", "the elephant in the room", "Aaron Burr, sir", "Carl", "Crow", "Tom Servo", "Cambot", "Gypsy", "The free space on bingo cards everywhere", "Automatic pilot", "Gomez", "Ellipses question mark", "The clam before the storm", "Boards", "Abhilas", "Dancin' Dash", "A casual lumity enjoyer", "you can still close your exercise ring, elskeptico! Just a brisk, 42-minute walk and you're there.", "Casual ratsweep shipper", "https://em-content.zobj.net/source/apple/419/face-with-bags-under-eyes_1fae9.png", "ARG enthusiast", "Mouthpiece meme enthusiast", "shapeshifting enthusiast", "The Little Mermaid fearer", "food enthusiast", "black hole enthusiast", "spelling enthusiast correctly enthusiast", "Github enthusiast", "enthusiasm enthusiast", "pages build and deployment #69", "Zaphod Beeblebrox", "froody", "sunken eyes emoji (apple edition) enthusiast", "strange website easter egg enthusiast", "gladoskisser", "haha i just realized this can be as long as i want. I legitimately have no clue what will happen with a name this freaking long. It might scale correcty and it might really really not. But its not quite long enough yet. So I will keep writing this until I feel it is sufficiently completely absurd in length. Oh yes, we're getting there now. The FitnessGram pacer test is a multistage aerobic capacity test that progressively gets harder as it continues. The twenty meter pacer test wil begin in thirty seconds line up at the start. I dont have the rest memorised :pensive: I did do that from memory by the way. Completely. On your mark, get ready, START", "DOCTOR FATE"];
var akaTimes = 0
var profTimes = 0
const PROFILE_PICTURE = document.getElementById("profile-picture");
const AKA_NAME = document.getElementById("aka-name");

console.log("hey man why are you in the console get out of here")

function changeText(element, version) {
  element.innerHTML = "<a href='/images/koalasandwich.png'>KOALA SANDWICH</a>";
}

function restoreText(element, version) {
  element.innerHTML = "k";
}


PROFILE_PICTURE.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * PROFILE_PICTURES.length);
    PROFILE_PICTURE.src = PROFILE_PICTURES[randomIndex];
    profTimes += 1
    if (profTimes === 5) {
        console.log("Hey man why you clicking my pcture so much")
        console.log("You don't like it?")
        console.log("That...")
        console.log("*sniff*")
        console.log("That hurts my feelings...")
        console.log("But don't worry!")
        console.log("You can make it up to me with marinara sauce!")
    }
});

AKA_NAME.parentElement.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * AKA_NAMES.length);
    AKA_NAME.textContent = AKA_NAMES[randomIndex];
    akaTimes += 1
    if (akaTimes === 10) {
        console.log("Hey man why you clicking my name so much")
        console.log("Is it cause you wanna change it?")
        console.log("Oliver aint good enough for ya?")
        console.log("Dont call me olive oil")
        console.log("Or olive garden")
        console.log("Ive heard em both")
        console.log("Ollie bollie is fine though")
        console.log("especially if you're Hao")
        console.log("Homeowners association")
        console.log("Hi Hao")
    }
});
