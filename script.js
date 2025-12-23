    const profilePictures = ["profpic.jpg", "teslapic.png", "youtupic.png", "eyepic.jpg", "badrawpic.png"];
    const akaNames = ["a ghooooooost", "youuur mom!", "ElSkeptico", "is a weird acronym", "Steeeve", "AKA AKA AKA AKA" , "Your wierd hippie uncle", "Help, I'm trapped writing AKA names!", "Markus Persson :O", "Alex Hirsch", "NTK", "Sentient Snowglobe", "FOOD????????", "Otto Von Cheesebiscuit", "Sole heir to the hot nut mix fortune", "Lord Clapham", "the elephant in the room", "Aaron Burr, sir", "Carl", "Crow", "Tom Servo", "Cambot", "Gypsy", "The free space on bingo cards everywhere", "Automatic pilot", "Gomez", "Ellipses question mark", "The clam before the storm", "Boards", "Abhilas", "Dancin' Dash", "A casual lumity enjoyer", "you can still close your exercise ring, elskeptico! Just a brisk, 42-minute walk and you're there.", "Casual ratsweep shipper", "https://em-content.zobj.net/source/apple/419/face-with-bags-under-eyes_1fae9.png", "ARG enthusiast", "Mouthpiece meme enthusiast", "shapeshifting enthusiast", "The Little Mermaid fearer", "food enthusiast", "black hole enthusiast", "spelling enthusiast correctly enthusiast", "Github enthusiast", "enthusiasm enthusiast", "pages build and deployment #69", "Zaphod Beeblebrox", "froody", "sunken eyes emoji (apple edition) enthusiast", "strange website easter egg enthusiast", "gladoskisser"];

    const profilePicture = document.getElementById("profile-picture");
    const akaName = document.getElementById("aka-name");

    profilePicture.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * profilePictures.length);
        profilePicture.src = profilePictures[randomIndex];
    });

    akaName.parentElement.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * akaNames.length);
        akaName.textContent = akaNames[randomIndex];
    });
