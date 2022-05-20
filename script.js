const foodImage = document.querySelector("[data-food-img]")
const foodName = document.querySelector("[data-food-name]")
const eatButton = document.querySelector("[data-eat-button]")
const soundButton = document.querySelector("[data-sound-button]")
const audio = document.querySelector("[data-audio]")

// create array object that has all the food and image

const food = [
  {
    food: "sushi",
    imgUrl: "./icons/sushi.png",
  },
  {
    food: "nasi lemak",
    imgUrl: "./icons/nasi-lemak.png",
  },
  {
    food: "pasta",
    imgUrl: "./icons/pasta.png",
  },
  {
    food: "pizza",
    imgUrl: "./icons/pizza.png",
  },
  {
    food: "salad",
    imgUrl: "./icons/salad.png",
  },
  {
    food: "satay",
    imgUrl: "./icons/satay.png",
  },
  {
    food: "burger",
    imgUrl: "./icons/burger.png",
  },
  {
    food: "hotpot",
    imgUrl: "./icons/hotpot.png",
  },
  {
    food: "bibimbap",
    imgUrl: "./icons/bibimbap.png",
  },
  {
    food: "ramen",
    imgUrl: "./icons/ramen.png",
  },
  {
    food: "laksa",
    imgUrl: "./icons/laksa.png",
  },
  {
    food: "roti canai",
    imgUrl: "./icons/roti-canai.png",
  },
  {
    food: "chicken rice",
    imgUrl: "./icons/chicken-rice.png",
  },
  {
    food: "fried rice",
    imgUrl: "./icons/fried-rice.png",
  },
  {
    food: "mixed rice",
    imgUrl: "./icons/economic-rice.png",
  },
  {
    food: "nasi briyani",
    imgUrl: "./icons/nasi-briyani.png",
  },
  {
    food: "rendang",
    imgUrl: "./icons/rendang.png",
  },
]

// add Event Listener to the button to modify

eatButton.addEventListener("click", () => {
  eatButton.innerHTML = "Finding"
  eatButton.style.pointerEvents = "none"
  const findFood = setInterval(() => {
    randomFood = food[Math.floor(Math.random() * food.length)]
    foodName.innerHTML = randomFood.food
    foodImage.src = randomFood.imgUrl
  }, 80)

  setTimeout(() => {
    clearInterval(findFood)
  }, 1000)

  const findFood2 = setInterval(() => {
    randomFood = food[Math.floor(Math.random() * food.length)]
    foodName.innerHTML = randomFood.food
    foodImage.src = randomFood.imgUrl
  }, 140)

  setTimeout(() => {
    clearInterval(findFood2)
    eatButton.innerHTML = "Let's go"
    eatButton.style.pointerEvents = "auto"
  }, 2000)
})

document.addEventListener("DOMContentLoaded", () => {
  audio.muted = false
  soundButton.src = "./icons/sound-on.png"
  console.log("testing")
})

soundButton.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false
    soundButton.src = "./icons/sound-on.png"
  } else {
    audio.muted = true
    soundButton.src = "./icons/sound-off.png"
  }
})
