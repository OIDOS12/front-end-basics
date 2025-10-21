// Завдання 1
const element8 = document.querySelector('#element8');
const element9 = document.querySelector('#element9');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColors(element) {
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
}

if (element8) {
    element8.addEventListener('click', () => {
        changeColors(element8);
    });
} else {
    console.error("Елемент з ID 8 не знайдено");
}

if (element9) {
    element9.addEventListener('click', () => {
        changeColors(element9);
    });
} else {
    console.error("Елемент з ID 9 не знайдено");
}

// Завдання 2
const STEP = 50;
const getCurrentImage = () => document.getElementById('image');

function addImage(){
    const img = getCurrentImage();
    if (!img) {
        const newImg = document.createElement('img');
        newImg.id = 'image';
        newImg.src = 'prague.jpg';
        newImg.alt = 'A beautiful collage of Prague';
        document.getElementById('image-link').appendChild(newImg);
    }
    else {
        img.width = 500;
    }
}

function deleteImage(){
    const img = getCurrentImage();
    if (img) {
        img.remove();
    }
}

function increaseImageSize() {
    const img = getCurrentImage();
    if (img) {
        img.width += STEP;
    }
}

function decreaseImageSize() {
    const img = getCurrentImage();
    if (img) {
        img.width -= STEP;
    }
}
