// Liste med spørsmål (den er dynamisk så du kan gjøre den så stor som du vil)
const questions = [
  "SV vil at det skal være mindre skatt på lave inntekter og mer skatt på formue, arv og eiendom. Er du enig?",
  "SV vil gjøre slik at det ikke er dyrere å dra til tannlege enn å dra til legen. Er du enig?",
  "SV vil ha karakterfri 8. klasse så det er mer fokus på læring fra barneskolen til ungdomskolen. Er du enig?",
  "SV vil fjerne fraværsgrensa fra vidregående skole. Er du enig?",
  "SV vil erstatte eksamen med andre vurderingsformer som f.eks mappevurdering. Er du enig?",
  "SV vil øke støtten vi gir til regnskog og fornybar energi i utviklingsland. Er du enig?",
  "SV vil sikre asylretten. Er du enig?",
  "SV vil gi beskyttelse til kvinner i land hvor abort er ulovlig. Er du enig.",
  "SV vil forlenge og styrke jernbanen i Nord-Norge. Er du enig?",
  "SV vil innføre et nasjonalt ungdomskort med rimelige priser for ungdom under 20 år og styrke rabattordningene i jernbanen. Er du enig?",
  "SV vil øke antallet kvoteflyktninger som Norge tar imot. Er du enig?",
  "SV vil senke botidskravet for å oppnå permanent oppholdstillatelse for flyktninger tilbake til 3 år. Er du enig?",
  "SV vil prioritere hensynet til barnets beste bør være fremtredende, med forrang for barnets beste foran hensyn knyttet til regulering av innvandring. Er du enig?",
  "SV vil utnytte avgiftssystemet for å redusere lokal forurensning og klimagassutslipp på en måte som sikrer en rettferdig sosial profil, bør være et mål. Er du enig?",
  "SV vil bruk kjøpsavgifter for å favorisere elbiler over bensin- og dieselbiler i nybilsalget. Er du enig?",
  "SV vil planlegge byer som er tette, trivelige, og som reduserer behovet for transport. Er du enig?",
  "SV vil utnytte avgiftssystemet for å redusere lokal forurensning og klimagassutslipp på en måte som sikrer en rettferdig sosial profil, bør være et mål. Er du enig?",
  "SV vil ta havet tilbake til kystsamfunnene og ta våre spredte jordressurser i bruk igjen for å skape en bærekraftig og fremtidsrettet utvikling av Norge. Er du enig?",
  "SV vil øke CO2 – avgiften. Er du enig?",
  "SV vil stanse nedbyggingen av norsk natur og tapet av naturmangfold gjennom økt vern og avslag på naturødeleggende utbygginger for å ta vare på naturen. Er du enig?",
  "SV vil styrke ettervernet. Et sted å bo og stabilitet i livet er avgjørende for å lykkes med behandling og for å gi en trygg overgang til et bedre liv. Er du enig?",
  "SV vil gjennomføre en rusreform som avkriminaliserer bruk og besittelse av ulovlige rusmidler, med hovedmålet om å tilby hjelp i stedet for straff til rusmiddelavhengige. Er du enig?",
  "SV vil opprettholde vinmonopolordningen og implementere en avgifts- og skjenkepolitikk som har forebygging av skade som sitt sentrale mål. Er du enig?",
  "SV vil gjennomføre en omfattende revisjon av legemiddelassistert rehabilitering (LAR) for å styrke den sosialfaglige støtten og forbedre programmet generelt. Er du enig?",
  "SV vil sikre asylretten. Er du enig?",
];

let poengliste = []; // En liste som holder poengene for hvert svar
let poeng = 0; // Total poengsum
let currentQuestion = 0; // Indeks for nåværende spørsmål

// Henter HTML-elementer, knapper og progressbar
const questionElement = document.querySelector("p");

const enigButton = document.getElementById("enig");
const litenigButton = document.getElementById("litenig");
const uenigButton = document.getElementById("uenig");
const lituenigButton = document.getElementById("lituenig");
const nøytralButton = document.getElementById("nøytral");

const startpånyttButton = document.getElementById("startpånytt");
const gatilbakeButton = document.getElementById("gatilbake");

const progressbar = document.getElementById("progressbar");
const startbutton = document.getElementById("start");
const storboks2 = document.getElementById("storboks2");
const storboks1 = document.getElementById("storboks1");

// Skjuler tilbake og start på nytt-knappene i begynnelsen
function skjulTilbake() {
  gatilbakeButton.style.display = "none";
  startpånyttButton.style.display = "none";
}
skjulTilbake();

//funksjon for å skjule velkomen boksen og vise spørsmål boksen
function start() {
  storboks1.style.display = "none";
  storboks2.style.display = "block";
}

// Funksjon for å vise nåværende spørsmål
function displayQuestion() {
  questionElement.textContent = questions[currentQuestion];
}

//funksjon for å opptatere progressbaren
function progressBarUpdate() {
  progressbar.value = currentQuestion;
}

// Funksjon for å vise eller sjule svaralternativer (knapper) og progressbar
function visKnapper(x) {
  enigButton.style.display = x;
  litenigButton.style.display = x;
  uenigButton.style.display = x;
  lituenigButton.style.display = x;
  nøytralButton.style.display = x;
}

// Funksjon for å skjule "gå tilbake"-knappen hvis vi er på det første spørsmålet
function gjommKnapperStart(x) {
  if (currentQuestion === 0) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Funksjon for å gå til neste spørsmål
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    visKnapper("block");
    progressBarUpdate()
  } else {
    // Vis resultatet når alle spørsmål er besvart
    questionElement.textContent = "Takk for at du svarte på spørsmålene! Du er " + poeng + "% enig med SV";
    visKnapper("none");
    progressBarUpdate()
  }
  gjommKnapperStart(gatilbakeButton);
  gjommKnapperStart(startpånyttButton);
}

// Funksjon for å starte på nytt
function reset() {
  currentQuestion = 0;
  displayQuestion();
  visKnapper("block");
  skjulTilbake();
  poeng = 0;
  progressBarUpdate()
}

// Funksjon for å gå tilbake til forrige spørsmål
function forieSpørsmaal() {
  currentQuestion -= 2;
  nextQuestion();
  let pop = poengliste.pop();
  poeng -= pop;
  console.log(poeng);
}

// Funksjon for å legge til poeng basert på svaret (enig, litenig, osv.)
function valg(verdig) {
  poeng += verdig;
  poengliste.push(verdig);
  console.log(poeng);
}

// Legg til event listeners for knappene og kall tilhørende funksjoner
enigButton.addEventListener("click", () => valg(4));
litenigButton.addEventListener("click", () => valg(3));
lituenigButton.addEventListener("click", () => valg(1));
nøytralButton.addEventListener("click", () => valg(2));
uenigButton.addEventListener("click", () => valg(0));

enigButton.addEventListener("click", nextQuestion);
litenigButton.addEventListener("click", nextQuestion);
uenigButton.addEventListener("click", nextQuestion);
lituenigButton.addEventListener("click", nextQuestion);
nøytralButton.addEventListener("click", nextQuestion);
startpånyttButton.addEventListener("click", reset);
gatilbakeButton.addEventListener("click", forieSpørsmaal);
startbutton.addEventListener("click", start);

//start
displayQuestion();
