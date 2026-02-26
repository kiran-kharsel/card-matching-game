// dom element
const cardContainer = document.querySelector(".cards-container");

// card array
const cards = [
  {
    id: 1,
    image: "./assets/mango.png",
    name: "mango",
  },
  {
    id: 2,
    image: "./assets/apple.png",
    name: "apple",
  },
  {
    id: 3,
    image: "./assets/orange.png",
    name: "orange",
  },
  {
    id: 4,
    image: "./assets/pear.png",
    name: "pear",
  },
  {
    id: 5,
    image: "./assets/strawberry.png",
    name: "strawberry",
  },
  {
    id: 6,
    image: "./assets/watermelon.png",
    name: "watermelon",
  },
];

// double each card
const doubledCardArray = [...cards, ...cards];

// shuffle card randomly
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //swap
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffledCards = shuffle(doubledCardArray);

// create each card
shuffledCards.forEach((card) => {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
    <div class="card-front">front side</div>
    <div class="card-back">
        <img src=${card.image} alt="">
    </div>
    `;
  cardContainer.appendChild(cardDiv);

  // flip card
  cardDiv.addEventListener("click", function () {
    console.log("card");
    cardDiv.classList.toggle("flipped");
  });
});

const card = document.querySelector(".card");
