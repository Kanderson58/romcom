// Create variables targetting the relevant DOM elements here 👇

var coverLocation = document.querySelector(".cover-image")
var titleLocation = document.querySelector(".cover-title")
var firstTagLocation = document.querySelector(".tagline-1")
var secondTagLocation = document.querySelector(".tagline-2")
var viewFormPage = document.querySelector(".form-view")
var viewHome = document.querySelector(".home-view")

var homeButton = document.querySelector(".home-button")
var randomCoverButton = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedCoverButton = document.querySelector(".view-saved-button")
var makeNewCoverButton = document.querySelector(".make-new-button")


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;


// Add your event listeners here 👇

window.addEventListener("load", getRandomCover)
randomCoverButton.addEventListener("click", getRandomCover)
makeNewCoverButton.addEventListener("click", showForm)

// Create your event handlers and other functions here 👇

function getRandomCover(){
  var randomCoversIndex = getRandomIndex(covers);
  var randomTitlesIndex = getRandomIndex(titles);
  var randomDescriptorsIndex1 = getRandomIndex(descriptors);
  var randomDescriptorsIndex2 = getRandomIndex(descriptors);

  var randomCoverImage = covers[randomCoversIndex]
  var randomCoverTitle = titles[randomTitlesIndex]
  var randomCoverDescriptor1 = descriptors[randomDescriptorsIndex1]
  var randomCoverDescriptor2 = descriptors[randomDescriptorsIndex2]

  coverLocation.src = randomCoverImage
  titleLocation.innerText = randomCoverTitle
  firstTagLocation.innerText = randomCoverDescriptor1
  secondTagLocation.innerText = randomCoverDescriptor2

  currentCover = new Cover(randomCoverImage, randomCoverTitle, randomCoverDescriptor1, randomCoverDescriptor2)
}

function showForm() {
  console.log("howwwdy")
  viewFormPage.classList.remove("hidden")
  viewHome.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


