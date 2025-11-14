    const profilePictures = ["profpic.jpg", "teslapic.png", "youtupic.png", "eyepic.jpg", "badrawpic.png"];
    const akaNames = ["a ghooooooost", "youuur mom!", "ElSkeptico", "is a weird acronym", "Steeeve", "AKA AKA AKA AKA" , "Your wierd hippie uncle", "Help, I'm trapped writing AKA names!", "Markus Persson :O", "Alex Hirsch", "NTK", "Sentient Snowglobe", "FOOD????????"];

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
