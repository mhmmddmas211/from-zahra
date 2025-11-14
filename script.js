const envelopeContainer = document.getElementById('envelopeContainer');
const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const loveText = document.getElementById('loveText');
const music = document.getElementById('bgMusic');
const mauBtn = document.getElementById('mauBtn');
const enggakBtn = document.getElementById('enggakBtn');
const question = document.querySelector('.question');
const buttonContainer = document.querySelector('.button-container');
const zahraImg = document.querySelector('.zahra-img');

const message = "Halloooo jareeee, Maaf yah aku cuma berani nyampein ini lewat sini, kita kan udah sering ketawa bareng, cerita bareng, dan ngabisin waktu bareng. Tapi di dalam hati, aku mau kita lebih dari itu. Aku maunya kita jadi sesuatu yang nyata dan serius. Aku tau kamu punya trauma yang mendalam, tapi kali ini izinin aku buat bahagiain kamu, gandeng tangan aku sampe kamu lupa pernah sehancur itu apapun aku bakal usahain buat kamu... 💚";

question.style.display = "none";
buttonContainer.style.display = "none";

envelopeContainer.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    envelopeContainer.style.display = 'none';
    content.style.display = 'block';
    music.play();
    zahraImg.style.opacity = '1';
    zahraImg.style.transform = 'scale(1)';
    createPetals();
    showText();
  }, 1200);
});

function showText() {
  let i = 0;
  const speed = 40;
  function typeWriter() {
    if (i < message.length) {
      loveText.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        question.style.display = "block";
        buttonContainer.style.display = "flex";
        fadeIn(question);
        fadeIn(buttonContainer);
      }, 800);
    }
  }
  typeWriter();
}

function fadeIn(element) {
  let opacity = 0;
  const timer = setInterval(() => {
    if (opacity >= 1) clearInterval(timer);
    element.style.opacity = opacity;
    opacity += 0.05;
  }, 50);
}

function createPetals() {
  setInterval(() => {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    petal.style.background = 'rgba(255,182,193,0.8)';
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }, 400);
}

mauBtn.addEventListener('click', () => {
  window.open("https://wa.me/6289699288972?text=Hai%20sayang%2C%20aku%20mau%20jadi%20pacar%20kamu%20💖", "_blank");
});

enggakBtn.addEventListener('click', () => {
  window.open("https://wa.me/6289699288972?text=Maaf%20ya%2C%20aku%20belum%20bisa%20jadi%20pacar%20kamu%20😢", "_blank");
});
