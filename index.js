const imgs = document.querySelectorAll(".imgs img");
const bullets = document.querySelector(".bullets");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentImg = 1;

// create bullets as the count of imgs
for (let i = 1; i <= imgs.length; i++) {
  // create span as a bullet
  const bullet = document.createElement("span");

  // give the first one class active
  if (i === 1) {
    bullet.classList.add("active");
  }

  // give every img dataset number
  bullet.setAttribute("data-img", i);

  // append the bullet to bullets element
  bullets.append(bullet);
}

// get all span bullets
const spans = document.querySelectorAll(".bullets span");

nextBtn.addEventListener("click", () => {
  // move to the next img
  moveToNextImg();
});

prevBtn.addEventListener("click", () => {
  // move to previous img
  moveToPrevImg();
});

function moveToNextImg() {
  // stop the event if it is the last child
  if (currentImg === imgs.length) return;

  // move the current img to the left by adding class left
  imgs[currentImg - 1].classList.add("left");

  // increment currentImg
  currentImg++;

  // remove active class from bullets and imgs
  removeActive();

  // add active class to the next bullet and img
  addActive();
}

function moveToPrevImg() {
  // stop the function if it is the first child
  if (currentImg === 1) return;

  // remove class left from the previous img sibling
  imgs[currentImg - 2].classList.remove("left");

  // decrement currentImg
  currentImg--;

  // remove active class from bullets and imgs
  removeActive();

  // add active class to the next bullet and img
  addActive();
}

// remove active class from bullets and imgs
function removeActive() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });

  spans.forEach((span) => {
    span.classList.remove("active");
  });
}

// add active class to bullet and img
function addActive() {
  imgs[currentImg - 1].classList.add("active");
  spans[currentImg - 1].classList.add("active");
}
