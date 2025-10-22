// DON'T SCROLL

const passwordArray = [
  " ",
  "RAZ",
  "WYKOPALISKA",
  "PORTRET",
  "104",
  "OGNISKO",
  "KOSZARY",
  "14NWSW",
  "7NENW",
  "WHISKEY",
  "401",
  "NOTATKI",
  "TRANSMISJA",
  "FARSZ",
  "SZOK",
  "KOLEJNOŚĆ",
  "TONA",
  "SREBRO",
  "POMOC",
  "OFIARA",
  "BRZEMIĘ",
  "KASK",
  "ODWAGA",
  "BECZKA",
  "ŚLEPY",
  "DIAMENT",
  "TYDZIEŃ",
  "ADSORBER",
  "POCHODNIA",
  "LASER",
  "WZORY",
  "SZPILA",
  "SZALEŃSTWO",
  "SMUTEK",
  "DNO",
  "CIĘŻAR",
  "PRAWDA",
  "JEDWAB",
  "ZASTRZYK",
  "ISTOTA",
  "OKULTYZM",
  "SIEKIERA",
  "MI",
  "POTRZEBA",
  "SUSPENS",
];
const answersArray = [
  "HEROICZNE",
  "375",
  "PROSPEKT",
  "5188",
  "MROK",
  "697",
  "439",
  "STRACH",
  "KOSZMAR",
  "72213",
  "OTCHŁAŃ",
  "513210",
  "366",
  "WTEM",
  "41391",
  "28530",
  "LUKA",
  "157",
  "GNIOT",
  "OMEN",
  "STATEK",
  "ROZPACZ",
  "H2O",
  "823",
  "ECFA",
  "CHAOS",
  "KONTAKT",
  "HORYZONT",
  "4536",
  "704",
  "SZKIELET",
  "ECHO",
  "HAHHAAHHA",
  "288",
  "352",
  "3507",
  "461983",
  "2685 LUB 2630",
  "EYSMEA",
  "OZOH",
  "310022",
  "OTWIERAĆ",
  "TYSIĄC",
  "3542",
  "TO",
];
const firstHintArray = [
  "tec_niczne, uzupełnij luki",
  "zacznijmy liczyć",
  "wyglądają jak rosyjskie litery, ale nimi nie są",
  "symbole na skałach można łączyć",
  "pająk zostawił ci wiadomość.",
  "od A do B do C…",
  "zapal latarnie",
  "zaznacz to, co ważne",
  "odejmowanie",
  "północ południe wschód zachód (N S E W)",
  "skopiuj poziomo wielkie litery",
  "zacznij od policzenia pęknięć w kasku, następnie…",
  "kontynuuj rzucanie kostką, pamiętaj o punkcie wyjścia",
  "Whiskey Tango Echo",
  "trzecia pionowa kolumna symboli to dobry początek",
  "po podniesieniu dźwigni części się połączą.",
  "dobry zwiadowca zawsze potrafi rozpoznać ślady zwierząt, zwłaszcza słonia",
  "to kwestia jednostek miary",
  "masz 22, ale potrzebujesz 26",
  "krzyż pośrodku",
  "złóż stronę, to jest to, co musisz zrobić, tylna strona pomoże ci w kroku 2",
  "porównaj glify z literami, które masz",
  "od A do Z",
  "osiągnąłeś w tej książce poziom, na którym powinieneś nabrać do niej dystansu",
  "potrzebujesz czterech liter",
  "liczba na polu oznacza liczbę min, które obecnie stykają się z tym polem - potrzebujesz słowa.",
  "wykres pulsu serca jest na wysokościach 1, 0, -1",
  "7 dni od teraz",
  "pierścień porusza się w dwóch kierunkach",
  "potrzebujesz ołówka",
  "dopasuj te same symbole i słowa",
  "nie krzycz do książki",
  "większe i mniejsze",
  "strzałki dzielą okrąg",
  "połącz odpowiednie litery",
  "4 fragmenty mapy, 4 potrzebne liczby",
  "istnieją trzy gatunki grzybów niejadowitych",
  "w plecaku miał tylko tę książkę",
  "muchy się poruszają",
  "potrzebujesz nazwy kultu, notatki ci w tym pomogą",
  "wydziel i oblicz",
  "schody są rozwiązaniem",
  "8-literowe słowa reprezentowane przez 4 wzory",
  "nie potrzebujesz żadnych obliczeń",
  "To jest tym, co potrzebujesz",
];
const secondHintArray = [
  "stwórz słowo z brakujących liter",
  "2 (3) 4 5",
  "lustro może pomóc w odczytaniu",
  "skały 3 i 2 tworzą 4 (3 + 2 = 5)",
  "w pajęczej sieci ukryte są cztery litery, w lewym dolnym rogu znajduje się litera M",
  " ",
  "użyj ołówka, aby zrekonstruować kolumny - potrzebujesz ich cieni",
  "jeżeli wszystkie litery hasła kodowego są zaznaczone poprawnie, zobaczysz hasło",
  "odejmij dolne symbole od górnych i zobacz, co pozostało",
  "zacznij od liczby i kieruj się wskazówkami N = GÓRA S = DÓŁ …",
  "C Z Y T A J (w pionie)",
  "pęknięcia, latarka, dziurki",
  "śledź ślad każdego rzutu, jeśli nie masz własnego, sprawdź notatki",
  "użyj pierwszych liter",
  "trzecia pionowa kolumna daje 2 opcje: 3 i 2 lub 4 i 1, proszę kontynuować...",
  "być może potrzebujesz innego punktu widzenia...",
  "potrzebujesz liter wskazanych przez cyfry na każdym śladzie zwierzęcia",
  "1T = 1000KG = ? KAMIENI",
  "brakujące litery alfabetu",
  "suma i ABC",
  "po złożeniu trójkątów na prawej stronie spróbuj wykonać drugi krok, łącząc linie - znajduje się tam kotwica, która pomoże ci w tym, co widzisz",
  "każde słowo zawiera litery potrzebne do utworzenia ostatniego słowa",
  "czujesz pragnienie?",
  "nie widzisz trzech potrzebnych liczb?",
  "połączenie linii pionowych i poziomych da ci brakujące litery",
  "po znalezieniu wszystkich prawidłowych miejsc, w których znajdują się miny, pamiętaj, że nietoperze są ślepe",
  "użyj liter z każdego słowa zgodnie ze wskazaniem wykresu uderzeń serca",
  "połącz strony z teraz i za tydzień",
  "teraz policz, ile jest ich na lewej stronie",
  "zaznacz swoją ścieżkę, a pojawią się liczby",
  "teraz usuń to, co mają wspólnego, i zachowaj to, co pozostało",
  "halo - alo, alo, lo, lo…",
  "prawidłowe wskaźniki dadzą dokładny śmiech",
  "9 to dobry początek",
  "pierwsze hasło daje Ci 3",
  "wskaźniki na tabeli to współrzędne fragmentów mapy, otrzymasz cztery liczby",
  "ramy mogą wydawać się identyczne, ale tak nie jest",
  "oblicz masę netto książki, plecaka i zsumuj je",
  "sprawdź wzorzec ruchu każdej muchy",
  "obróć czarne urządzenie dekodujące, które znalazłeś w notatkach, a otwory ujawnią nazwę kultu",
  "zabij bezużytecznych, aby znaleźć liczby",
  "jeśli nie masz schodów, stwórz je",
  "każdy wzór reprezentuje dwie litery",
  "jeden wiersz to kolejność",
  "to jest tym, co potrzebujesz",
];

// Pobieranie elementów z DOM
const puzzleInput = document.getElementById("puzzle");
const answerInput = document.getElementById("answer");
const checkAnswerBtn = document.getElementById("check_answer");
const answerStatus = document.getElementById("answer_status");
const revealHint1Btn = document.getElementById("reveal_hint1");
const hint1 = document.getElementById("hint1");
const revealHint2Btn = document.getElementById("reveal_hint2");
const hint2 = document.getElementById("hint2");

let currentIndex = -1;

// Zmiana numeru zagadki
puzzleInput.addEventListener("input", () => {
  resetFields();
  currentIndex = parseInt(puzzleInput.value, 10);

  if (
    isNaN(currentIndex) ||
    currentIndex < 1 ||
    currentIndex > passwordArray.length
  ) {
    currentIndex = -1;
  }
});

// Sprawdzanie odpowiedzi po kliknięciu przycisku
checkAnswerBtn.addEventListener("click", () => {
  if (currentIndex === -1) return;

  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = answersArray[currentIndex].trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    answerStatus.textContent = "✅ " + passwordArray[currentIndex];
  } else {
    answerStatus.textContent = "❌";
  }
});

// Sprawdzanie odpowiedzi po wciśnięciu Enter
answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswerBtn.click(); // symulacja kliknięcia przycisku
  }
});

// Pokazanie pierwszej podpowiedzi
revealHint1Btn.addEventListener("click", () => {
  if (currentIndex === -1) return;
  hint1.textContent = firstHintArray[currentIndex];
});

// Pokazanie drugiej podpowiedzi
revealHint2Btn.addEventListener("click", () => {
  if (currentIndex === -1) return;
  hint2.textContent = secondHintArray[currentIndex];
});

// Reset pól po wpisaniu nowego numeru
function resetFields() {
  answerInput.value = "";
  answerStatus.textContent = "";
  hint1.textContent = "";
  hint2.textContent = "";
}
