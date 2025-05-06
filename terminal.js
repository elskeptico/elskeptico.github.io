const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    output.innerHTML += `> ${command}\n`;
    input.value = "";

    handleCommand(command.toLowerCase());
  }
});

function handleCommand(command) {
  let response = "";

  switch (command) {
    case "help":
      response = "you get none";
      break;
    case "hello":
      response = "yo angelo";
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
    case "clear":
      output.innerHTML = "";
      return;
    default:
      response = `Command not recognized: ${command}`;
  }

  output.innerHTML += response + "\n";
}
