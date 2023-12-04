const languages = [
  { name: 'English', code: 'en' },
  { name: 'Spanish', code: 'es' },
  { name: 'French', code: 'fr' },
  { name: 'German', code: 'de' },
  { name: 'Turkish', code: 'tr' },
  { name: 'Hungarian', code: 'hu' },
  { name: 'Italian', code: 'it' },
  { name: 'Japanese', code: 'jp' },
  { name: 'Portuguese', code: 'pt' },
  { name: 'Bosnian', code: 'ba' },
  { name: 'Bengali', code: 'bn' },
  { name: 'Czech', code: 'cz' },
  { name: 'Estonian', code: 'ee' },
  { name: 'Filipino', code: 'ph' },
  { name: 'Hebrew', code: 'he' },  
  { name: 'Malay', code: 'my' },
];

let currentLanguage = [];

function initializeGame() {
  chooseRandomLanguage();
  displayOptions();
}

function chooseRandomLanguage() {
  const randomIndex = Math.floor(Math.random() * languages.length);
  currentLanguage = languages[randomIndex];
  document.getElementById('hello-text').innerText = getHelloInLanguage(currentLanguage.code);
}

function getHelloInLanguage(languageCode) {
  if (languageCode === 'en') {
    return 'Hello';
  } else if (languageCode === 'es') {
    return 'Hola';
  } else if (languageCode === 'fr') {
    return 'Bonjour';
  } else if (languageCode === 'de') {
    return 'Hallo';
  } else if (languageCode === 'hu') {
    return 'Szia';
  } else if (languageCode === 'tr') {
    return 'Merhaba';
  } else if (languageCode === 'pt') {
    return 'Olá';
  } else if (languageCode === 'it') {
    return 'Ciao';
  } else if (languageCode === 'jp') {
    return 'Konnichiwa';
  } else if (languageCode === 'my') {
    return 'Selamat pagi';
  } else if (languageCode === 'he') {
    return 'Shalom';
  } else if (languageCode === 'ph') {
    return 'Kumusta';
  } else if (languageCode === 'ee') {
    return 'Tere';
  } else if (languageCode === 'cz') {
    return 'Ahoj';
  } else if (languageCode === 'ba') {
    return 'Zdravo';
  } else {
    return 'Hello';
  }
}

function displayOptions() {
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  languages.forEach((language) => {
    const button = document.createElement('button');
    button.innerText = language.name;
    button.classList.add('option-button');

    button.addEventListener('click', () => checkAnswer(language));

    optionsContainer.appendChild(button);
  });
}


function checkAnswer(selectedLanguage) {
  if (selectedLanguage === currentLanguage) {
    document.body.style.backgroundColor = "green";
    setTimeout(() => { document.body.style.backgroundColor = "white"; }, 300);
  } else {
    document.body.style.backgroundColor = "red";
    setTimeout(() => { alert(`Incorrect. The correct answer is ${currentLanguage.name}. Try again!`);}, 10);
  }
  setTimeout(() => { document.body.style.backgroundColor = "white";}, 300);
  setTimeout(() => { initializeGame();}, 330);
}


window.onload = initializeGame;


