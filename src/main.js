// Create variables targetting the relevant DOM elements here 👇

var coverLocation = document.querySelector(".cover-image")
var titleLocation = document.querySelector(".cover-title")
var firstTagLocation = document.querySelector(".tagline-1")
var secondTagLocation = document.querySelector(".tagline-2")
var viewFormPage = document.querySelector(".form-view")
var viewHome = document.querySelector(".home-view")
var viewSaved = document.querySelector(".saved-view")

var homeButton = document.querySelector(".home-button")
var randomCoverButton = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedCoverButton = document.querySelector(".view-saved-button")
var makeNewCoverButton = document.querySelector(".make-new-button")
var createNewCoverButton = document.querySelector(".create-new-book-button")

var inputUserCover = document.querySelector(".user-cover")
var inputUserTitle = document.querySelector(".user-title")
var inputUserDescriptor1 = document.querySelector(".user-desc1")
var inputUserDescriptor2 = document.querySelector(".user-desc2")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇

window.addEventListener("load", getRandomCover)
randomCoverButton.addEventListener("click", getRandomCover)
makeNewCoverButton.addEventListener("click", showForm)
viewSavedCoverButton.addEventListener("click", showSavedCovers)
homeButton.addEventListener("click", showHome)
createNewCoverButton.addEventListener("click", storeBookCoverUserInfo)
saveCoverButton.addEventListener("click", addToSavedCovers)

// Create your event handlers and other functions here 👇

function getRandomCover(){
  var randomCoverImage = covers[getRandomIndex(covers)];
  var randomCoverTitle = titles[getRandomIndex(titles)];
  var randomCoverDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomCoverDescriptor2 = descriptors[getRandomIndex(descriptors)];

  coverLocation.src = randomCoverImage
  titleLocation.innerText = randomCoverTitle
  firstTagLocation.innerText = randomCoverDescriptor1
  secondTagLocation.innerText = randomCoverDescriptor2

  currentCover = new Cover(randomCoverImage, randomCoverTitle, randomCoverDescriptor1, randomCoverDescriptor2)
}

function showForm() {
  viewFormPage.classList.remove("hidden")
  viewHome.classList.add("hidden")
  viewSaved.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
}

function showSavedCovers(){
  viewFormPage.classList.add("hidden")
  viewHome.classList.add("hidden")
  viewSaved.classList.remove("hidden")
  randomCoverButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
}

function showHome(){
  viewFormPage.classList.add("hidden")
  viewHome.classList.remove("hidden")
  viewSaved.classList.add("hidden")
  randomCoverButton.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
  homeButton.classList.add("hidden")
}

function storeBookCoverUserInfo(event) {
  event.preventDefault()
  covers.push(inputUserCover.value)
  titles.push(inputUserTitle.value)
  descriptors.push(inputUserDescriptor1.value)
  descriptors.push(inputUserDescriptor2.value)
  showHome()
  showCreatedCover(inputUserCover.value, inputUserTitle.value, inputUserDescriptor1.value, inputUserDescriptor2.value)
}

function showCreatedCover(userImage, userTitle, userDesc1, userDesc2) {
    coverLocation.src = userImage
    titleLocation.innerText = userTitle
    firstTagLocation.innerText = userDesc1
    secondTagLocation.innerText = userDesc2
}

function addToSavedCovers() {
  var saveNewCover = new Cover(inputUserCover.value, inputUserTitle.value, inputUserDescriptor1.value, inputUserDescriptor2.value)
  savedCovers.push(saveNewCover)
  console.log(savedCovers)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array
// If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates) - iterate through with for statement, check if any index positions match the current one and do not push if true
// When a user clicks the “View Saved Covers” button, we should see the saved covers section - iteration plus HTML code in javascript plus interpolation - take the home page HTML that displays a cover, iterate through saved array, display each iteration in the saved page with interpolated data to individualize each displayed cover
// All the covers in the savedCovers array should be displayed in the saved covers section