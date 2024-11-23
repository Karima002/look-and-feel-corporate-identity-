// stap 1: zoek de menu-button op en sla die op in een variabele
const openButton = //In JavaScript wordt const gebruikt om een variabele te declareren die niet hernoemd of opnieuw toegewezen kan worden.
document.querySelector("header > button"); //hiermee wordt de de button menu opgezocht.

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu); // Zo ga je een event (actie) toevoegen. We moeten nog wel zeggen wat de click gaat doen:

// stap 3: voeg in de functie een class toe aan de nav
function openMenu (){
    const deNav =
    document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

// stap 4 - zoek sluit button op
const sluitButton =
document.querySelector("nav > button") //button in de navigatiebar wordt opgezocht

// stap 5: laat de menu-button luisteren naar kliks en voer dan een functie uit
sluitButton.addEventListener("click", sluitMenu);

// stap 6 - in de functie verwijder de class van de nav
function sluitMenu() {
    const deNav =
    document.querySelector("nav"); //Zoek de nav op en sla die op in een variable
    deNav.classList.remove("toonMenu");
}