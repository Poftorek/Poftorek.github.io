const texts = [
  '..to ja zaktualizuję pół flaszki',
  'ja mam rączki tutaj',
  'knyflem tam najedź',
  'seksem tu pachnie',
  'zuza do komody wypierdalaj',
  'spać kurwo',
  'morda tam krótko wenero',
  'weź no naszprycuj tego psa',
  'ja ci nie ufam(hyhyhy)',
  'sztarta klikamy',
  'mów ale oddychaj',
  'nie reguluj gałki w okolicach pralki',
  'tytytytytytyty',
  'weź to kurwa skasuj Bogdan',
  'ja się dopiero rozkręcam Andrzej kurwa',
  'odbierdolta się ode mnie',
  'idę jebnąć lufkę',
  'a co ja jestem uleczarka ?',
  'weźta się zrestartujcie',
  'barrrrdzo dobra wódeczka',
  'to worek na głowę i za ojczyznę',
  'to miej pod ręką chloroform',
  'a to trzeba tam być trzeźwym ?',
  'eehm..kłaczek',
  'idź tam żryj swój bidżys',
  'ty się tam nie gorączkuj rambo',
  'my se tylko tu pijamy tak sobie',
  'dobra zamknij sie tam Rysiek',
  'uspokój się tam Waldek',
  'ja pije, pije, pije, pije',
  'trzymajcie mnie, bo kurwa nie ręczę za siebie',
  'nie tak szybko, logan, mordo kochana, nie tak szybko',
  'ja nie wyzywam, tylko powiedziałem',
  'bardzo pyszna lufeczka, milordzie',
  'grałem dzisiaj na serwisie',
  'tytytyytytytyty za dużo tytyty aż mnie zęby bolą, tytytyty',
  'skośnooki nas pobili',
  'tu jest Polska tu się pije',
  'ale to nie do mnie to, do mnie nie..już mi się nie podobasz',
  '  naprawdę, w tym momencie, w ryj chcesz czy co, o co ci chodzi',
  'dopiero dzisiaj mnie coś natchnęło, żeby se jebnąć zero siódemkę',
  'ja wczoraj ani grama alokoholu nie miałem w ustach, a korciło..a korciło, sahara w ustach, ale mówię wstrzymam się, mam silną wolę',
  'ja jestem trzeźwy, o 10 rano pól litra wypiłem ale potem spałem',
  'Pchasz sie w gips kolego',
  'ja chyba boomerem jestem, nie wiem o co chodzi, co ? mam klaskać ? mów do mnie jeszcze',
  '  my chcemy awanti, my chcemy awanti!my tutaj pijemy czy co robimy ?',
  'szczeliło mi w kościach',
  'mówi się co jest kurwa 1 2 3 ? a my mówimy gówno 4 5 6',
  'ide trysnąć z ogóra',
  'MAXIKING OŁRAJT',
  'jestem dżona kupa, odpierdolta się ode mnie',
  'ja nie chce z Toba chodzic, ja lubie cipki',
  'ja mam noz od delmy, chcesz w ryj ?',
  'TYRTUM PYRTUM',
  'pierdolona gnida siedzi w Tobie od roku',
  'bo jak ona ma być to ja idę sobie trysnąć z ogóra',
  'ciebie sie nikt pytanie nie ten',
  'cisza na eterze',
  'kto pije ten pije a kto nie pije ten nie żyje',
  'jakieś świnie latają mi tu po rejonie',
  'moja pałka tańczy dla Ciebie',
  'bobo wjedża na rejony wszyscy ręce w góre',
  'nie gorączkuj się tam Rambo',
  'oni tańcowali a ja tankowałem',
  'idę na plaże - dupę pokaże',
  'kurwa nózka mnie boli - au au au aua',
  'wpisz sobie na gejflixie',
  'ogarnijcie siurka, ty',
  'która godzina pyta rodzina',
  'twój fetysz - twoja sprawa',
  'gorzała za mną chodzi',
  'do pełni szczęścia musze się napić',
  'normalnie aż chuj mi puchnie',
  'skurwysyny, narkomany',
  'po co ten język nienawiści?',
  'do kobiety to jeszcze pare lat',
  'ale ma dzyndzony odjeban',
  'ten kot jest nafidowany',
  'kot Gacek spacja Szczecin',
  'weź tam ogarnij jarząbka',
  '03.09.2021 22:49 - BoBoTV nie ma ochoty napić się piwa',
  'drodzy państwo kochani moi',
  'każdy mi to mówi o alkoholu, chcą mnie zniechęcić',
  'nóżki mi latają same a chuj się napompował',
  'idę trysnąć z bogdana',
];
const quoteElement = document.querySelector('.quote');
const nextQuoteElement = document.querySelector('.btn-first');
const offSoundElement = document.querySelector('.btn-secondary');
const lectorElement = document.querySelector('.btn-third');
const numberElement = document.querySelector('.number');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const showQuote = () => {
  let textNumber = getRandomIntInclusive(0, texts.length - 1);
  quoteElement.textContent = texts[textNumber];
  numberElement.textContent = `BoboTV #${textNumber}`;
  if (localStorage.getItem('lector') == 'yes') {
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pl-PL';
    utter.text = texts[textNumber];
    utter.volume = 0.5;
    utter.pitch = -5;
    utter.voice = window.speechSynthesis.getVoices()[19]
    window.speechSynthesis.speak(utter);
  }
}

const manageSound = function () {
  if (localStorage.getItem('sound') == 'yes') {
    localStorage.setItem('sound', 'no');
    whenSoundOff();
  } else if (localStorage.getItem('sound') == 'no') {
    localStorage.setItem('sound', 'yes');
    whenSoundOn();
  }
}

const manageLector = function () {
  if (localStorage.getItem('lector') == 'no') {
    whenLectorOn();
  } else {
    whenLectorOff();
  }
}

function whenLectorOn() {
  localStorage.setItem('lector', 'yes');
  localStorage.setItem('sound', 'no');
  offSoundElement.style.cursor = 'not-allowed';
  offSoundElement.disabled = 'true';
  lectorElement.textContent = 'Wyłącz lektora';
  lectorElement.classList.remove('btn-enable');
  lectorElement.classList.add('btn-disable');
}

function whenLectorOff() {
  localStorage.setItem('lector', 'no');
  offSoundElement.style.cursor = '';
  offSoundElement.disabled = '';
  lectorElement.textContent = 'Włącz lektora';
  lectorElement.classList.remove('btn-disable');
  lectorElement.classList.add('btn-enable');
}


const sounds = ['./a_ty_nie_nagrywaj.mp3', './myslalem_ze_mnie_ktos_zbanowal.mp3', './no_i_chuj.mp3', './tak_bylo_bylo.mp3', './wiec_zapinam.mp3', './zostales_nominowany.mp3'];
const play = () => {
  if (localStorage.getItem('sound') == 'yes') {
    var audio = new Audio(sounds[getRandomIntInclusive(0, sounds.length - 1)]);
    audio.volume = 0.2;
    audio.play();
  }
}

function whenSoundOn() {
  offSoundElement.textContent = 'Wyłącz dźwięk';
  offSoundElement.classList.add('btn-disable');
  offSoundElement.classList.remove('btn-enable');
  lectorElement.style.cursor = 'not-allowed';
  lectorElement.disabled = 'true';
}

function whenSoundOff() {
  offSoundElement.textContent = 'Włącz dźwięk';
  offSoundElement.classList.add('btn-enable');
  offSoundElement.classList.remove('btn-disable');
  lectorElement.style.cursor = '';
  lectorElement.disabled = '';
}

const start = () => {
  if (!localStorage.getItem('sound')) {
    localStorage.setItem('sound', 'yes');
  }
  if (!localStorage.getItem('lector')) {
    localStorage.setItem('lector', 'no');
  }
  if (localStorage.getItem('sound') == 'yes') {
    whenSoundOn();
  } else if (localStorage.getItem('sound') == 'no') {
    whenSoundOff();
  }

  if (localStorage.getItem('lector') == 'yes') {
    whenLectorOn();
  } else if (localStorage.getItem('lector') == 'no') {
    whenLectorOff();
  }

  showQuote();
}

document.addEventListener('DOMContentLoaded', start);
offSoundElement.addEventListener('click', manageSound);
lectorElement.addEventListener('click', manageLector);
nextQuoteElement.addEventListener('click', showQuote);
nextQuoteElement.addEventListener('click', play);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

