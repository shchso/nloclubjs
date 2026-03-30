function typeWriter(element, texts, options = {}) {
  const typeSpeed = options.typeSpeed || 50;
  const deleteSpeed = options.deleteSpeed || 50;
  const pauseAfterTyping = options.pauseAfterTyping || 100;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function animate() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      element.innerHTML = currentText.slice(0, charIndex);
      charIndex++;

      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(animate, pauseAfterTyping);
        return;
      }
    } else {
      charIndex--;
      element.innerHTML = currentText.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(animate, typeSpeed);
        return;
      }
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(animate, speed);
  }

  animate();
}

typeWriter(
  document.querySelector('.animated-text'),
  [
    '...hello...hello...hello...hello...h \nello...hello...hello...hello...hello \n...hello...hello...hello...hello...h \nello...hello...hello...hello...hello\n...hello...hello...hello...hello...h \nello...hello...hello...hello...hello \n...hello...hello...hello',
  ],
  { typeSpeed: 100 },
);

typeWriter(
  document.querySelector('.animated-text2'),
  ['ну ты модный \nну модник \nа ну покрутись \nой да ладно кому ты нужен'],
  { typeSpeed: 80, pauseAfterTyping: 1500 },
);

typeWriter(
  document.querySelector('.animated-text3'),
  [
    'SCORE..SCORE..SCORE..SCOR \nE..SCORE..SCORE..SCORE..SC \nORE..SCORE..SCORE..SCORE..S \nCORE..SCORE..SCORE..SCORE \n..SCORE..',
  ],
  { typeSpeed: 120, deleteSpeed: 60 },
);
const slider = document.getElementById('slider');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slider-image');
const bottom = document.getElementById('bottom');
const textss = [
  'пчела \n\n+ носит очень крутые \nлатексные костюмы \n\n- есть жало',
  'бабочка \n\n+ губки бантиком, \nбесплатно лутает коктейли \nсо скоростью света \n\n- встречается \nс жуком-навозником',
  'паук \n\n+ очень мило извиняется, \nкогда на танцполе наступает \nкому-то на ногу \n\n- всюду ходит с мамой',
  'кузнечик \n\n+ тот самый с карабином, \nкруче всех танцует брейкданс \n\n- немного уставший',
  'муравей \n\n+ алкоголик \n\n- распугивает всех бабочек  \nмерзкими анекдотами',
];
const mainText = document.querySelector('.letters .main');
let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth;
mainText.textContent = textss[currentSlideIndex];

function createPaginationCircle() {
  const div = document.createElement('div');
  div.className = 'pagination-circle';
  bottom.appendChild(div);
  paginationCircles.push(div);
}
function updateText() {
  mainText.textContent = textss[currentSlideIndex];
}
function addPagination() {
  slides.forEach(createPaginationCircle);
  paginationCircles[0].classList.add('active');
  paginationCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => changeSlide(index));
  });
}

function addActiveClass() {
  paginationCircles[currentSlideIndex].classList.add('active');
}

function removeActiveClass() {
  paginationCircles[currentSlideIndex].classList.remove('active');
}

function showSlide() {
  slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
  updateText();
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

function previousSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

const images = document.querySelectorAll('.backs9 img');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    images.forEach((otherImg, otherIndex) => {
      if (index !== otherIndex) {
        otherImg.classList.add('inactive');
      } else {
        otherImg.classList.remove('inactive');
      }
    });
  });
});

const images1 = document.querySelectorAll('.runbottoms img');
images1.forEach((img) => {
  img.addEventListener('click', () => {
    images1.forEach((i) => i.classList.remove('selected'));

    img.classList.add('selected');

    img.addEventListener(
      'animationend',
      () => {
        img.classList.remove('selected');
      },
      { once: true },
    );
  });
});

const shoes = document.querySelector('.shoes');
const attention = document.querySelector('.attention');
const args = document.querySelectorAll('#arg1, #arg2, #arg3');
const backs = document.querySelectorAll('.shoes01 .backs2, .shoes02 .backs8');

shoes.addEventListener('click', () => {
  shoes.classList.add('grayscale');

  args.forEach((arg) => arg.classList.add('pause-animation'));

  backs.forEach((back) => back.classList.add('pause-animation'));

  attention.style.display = 'flex';
});
const backsImages = document.querySelectorAll('.backs11 img');

backsImages.forEach((img) => {
  img.addEventListener('click', () => {
    backsImages.forEach((i) => {
      if (i !== img) {
        i.classList.add('grayscale');
      } else {
        i.classList.remove('grayscale');
      }
    });
  });
});

const rand1 = [
  '1/10',
  '2/10',
  '3/10',
  '4/10',
  '5/10',
  '6/10',
  '7/10',
  '8/10',
  '9/10',
  '10/10',
];

const rand2 = [
  '- драка с бомжами \n- увезли на скорой',
  '- разговор по душам \nв курилке \n довел до слез',
  '- ссора по телефону\n- алкогольная кома следом',
  '- забрали в обезьянник\n - залутал пачку сигарет',
  '- 10 раз назвали самым \nкрасивым человеком в клубе',
  '- нашел ашку на танцполе\n - а табак ли это?',
  '- победа в танцевальном батле\n - потеря кроссовок',
];

const rand3 = ['0 ха', 'l2', '2', '3', '4', '5', '6', '7', '15', '18', '36'];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const tab1 = document.querySelector('.greentab1 .main');
const tab2 = document.querySelector('.greentab2 .main');
const tab3 = document.querySelector('.greentab3 .main');

if (tab1) tab1.textContent = getRandom(rand1);
if (tab2) tab2.textContent = getRandom(rand2);
if (tab3) tab3.textContent = getRandom(rand3);
