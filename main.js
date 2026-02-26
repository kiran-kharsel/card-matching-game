// dom elements
const cardContainer = document.querySelector(".cards-container");
const scoreElem = document.querySelector('.score')

// game state
let selectedCards = [];
let score = 0;

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

// double and shuffle
const doubledCardArray = [...cards, ...cards];
const shuffledCards = shuffle(doubledCardArray);


// shuffle helper
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



// create catds
shuffledCards.forEach((card) => {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.dataset.id = card.id; // store id for comparison

  cardDiv.innerHTML = `
    <div class="card-front">front side</div>
    <div class="card-back">
        <img src=${card.image} alt="${card.name}">
    </div>
    `;
  cardContainer.appendChild(cardDiv);
  // Flip handler
  cardDiv.addEventListener("click", () => handleFlip(cardDiv));

  // // flip card
  // cardDiv.addEventListener("click", function () {
  //   console.log("card");
  //   cardDiv.classList.toggle("flipped");

  //   // 
  //   if(flag){
  //     secondCardId = card.id
  //     flag = false;
  //     // compare function
  //     compareCard(firstCardId, secondCardId)
  //   }else{
  //     firstCardId = card.id;
  //     flag = true
  //   }
  // });
});


// Flip logic
function handleFlip(cardDiv) {
  // Ignore if already flipped or disabled
  if (cardDiv.classList.contains("flipped") || cardDiv.classList.contains("disabled")) {
    return;
  }

  cardDiv.classList.add("flipped");
  selectedCards.push(cardDiv);

  if (selectedCards.length === 2) {
    compareCards();
  }
}


// Compare logic
function compareCards() {
  const [firstCard, secondCard] = selectedCards;
  const firstId = firstCard.dataset.id;
  const secondId = secondCard.dataset.id;

  setTimeout(() => {
    if (firstId === secondId) {
      // Match found
      selectedCards.forEach((card) => card.classList.add("disabled"));
      score++;
      scoreElem.textContent = `Score: ${score}`;
    } else {
      // Flip back unmatched cards
      selectedCards.forEach((card) => card.classList.remove("flipped"));
    }
    selectedCards = []; // reset selection
  }, 1000);
}







