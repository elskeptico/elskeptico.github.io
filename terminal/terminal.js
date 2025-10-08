const input = document.getElementById("commandInput");
const output = document.getElementById("output");
var kill = 0;
var admin = false;
var needtapepassword = false;
var needunblockpassword = false;

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    output.innerHTML += `<span>></span> ${command}\n`;
    input.value = "";

    handleCommand(command.toLowerCase());
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function handleCommand(command) {
  let response = "";

  switch (command) {
    case "help":
      response = "you get none";
      break;
    case "list":
      response = "Usable commands:      help,list,hello,bill cipher,who are you, null, minecraft, trump, doge, you, me, greetings, me, whoami, elskeptico, tradenarkers, date, the_tape, the_tape_login, cat, gomez, kill, n, haha, mainframe, oliver, system, help me, systemchange";
      break;
    case "boot tipcalc":
      response = "If you insist."
      window.location.href = "elskeptico.gihub.io/projects/tipcalc"
      break;                                                   
    case "penis":
      response = "fuck you";
      break;
    case "sex":
      response = "die";
      break;
    case "daddy":
      response = "no please";
      break;
    case "hejjo":
      response = "yo angejjo";
      break;
    case "meme":
      response = "memesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemesmemes";
      break;
    case "pokemon":
      response = "GOTTA CATCH EM ALLLL BRRRROOOOOOIOIOIEFH:?KJNBG:IYRBCNREW!!!!!!1!11!1!!1!!!1!11!1";
      break;
    case "yu-gi-oh":
      response = "*sigh* hi atticus";
      break;
    case "ultraman":
      response = "yes, I know atticus";
      break;
    case "kamen rider":
      response = "shut upppppp";
      break;
    
    case "bill cipher":
      response = "wrong website dumbass";
      break;
    case "who are you":
      response = "Either your father or steve";
      break;
    case "null":
      response = "nay, herobrine";
      break;
    case "minecraft":
      response = "yes";
      break;
    case "hello":
      response = "yo angelo";
      break;
    case "trump":
      response = "bloated cheeto";
      break;
    case "doge":
      response = "idiots in power";
      break;
    case "you":
      response = "me";
      break;
    case "greetings":
      response = "earthlings";
      break;
    case "unblock":
      response = "It's possible.";
      break;
    case "unblock_login":
      response = "Enter password";
      break;
    case "":
      response = "You didn't actually say anything";
      break;
    case "me":
      response = "you";
      break;
    case "whoami":
      response = "Not sure, but probably a weirdo on a weirdo's website using weird commands";
      break;
    case "elskeptico":
      response = "A handsome young man, to be sure";
      break;
    case "tradenarkers":
      response = "I haven't heard that name in a long time";
      break;
    case "date":
      response = "December 10, 1932 - the emus won";
      break;
    case "the_tape":
      response = "A collection of pure comedy";
      break;
    case "the_tape_login":
      response = "Password please!";
      needtapepassword = true;
      break;
    case "cat":
      response = "meow :)";
      break;
    case "gomez":
      if (needtapepassword == true) {
        response = "Access granted"
        window.location.href = "the_tape"
      }
      response = "A genius password to a tape";
      break;
    case "kill":
      response = "You? y/n";
      kill += 1;
      break;
    case "y":
      if (kill === 1) {
        window.location.href = "https://988lifeline.org"
      }
      if (kill === 2) {
        window.location.href = "deadskeptico.jpg"
      }
      break;
    case "n":
      if (kill === 1) {
        response = "Me? y/n";
        kill += 1;
      }
      if (kill === 2) {
        response = "Good choice"
      }
      else {
        response = "Don't say it..."
      }
      break;
    case "haha":
      response = "ho ho ho, that's a good chap";
      break;
    case "mainframe":
      response = "hack into it!";
      break;
    case "oliver":
      response = "*elskeptico";
      break;
    case "system":
      response = "elskeptico.github.io runs on The Very Essence Of The Universe(TVEOTU) version 1.5.7.∞";
      break;
    case "help me":
      response = "No!";
      break;
    case "systemchange":
      if (admin = true) {}
      break;
    case "unblocker":
      response = "access granted";
      window.location.href = "unblock"
      break;
    case "clear":
      output.innerHTML = "";
      return;
    default:
      response = `Command not recognized: ${command}`;
  }

  output.innerHTML += response + "\n";
}
