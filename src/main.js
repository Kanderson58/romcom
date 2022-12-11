// Create variables targetting the relevant DOM elements here 👇

var coverLocation = document.querySelector(".cover-image")
var titleLocation = document.querySelector(".cover-title")
var firstTagLocation = document.querySelector(".tagline-1")
var secondTagLocation = document.querySelector(".tagline-2")
var viewFormPage = document.querySelector(".form-view")
var viewHome = document.querySelector(".home-view")
var viewSaved = document.querySelector(".saved-view")
var savedCoversSection = document.querySelector(".saved-covers-section")

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
window.addEventListener("dblclick", deleteBook)
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
  displaySavedCovers()
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
  currentCover = new Cover(inputUserCover.value, inputUserTitle.value, inputUserDescriptor1.value, inputUserDescriptor2.value)
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
  for (var i = 0; i < savedCovers.length; i++){
    if(savedCovers[i].cover === currentCover.cover && savedCovers[i].title === currentCover.title && savedCovers[i].tagline1 === currentCover.tagline1 && savedCovers[i].tagline2 === currentCover.tagline2){
      return
    }
  }
  return savedCovers.push(currentCover)
}

function displaySavedCovers(){
  savedCoversSection.innerHTML = " "
  for (var i = 0; i < savedCovers.length; i++){
    savedCoversSection.innerHTML +=    
    `<div class="mini-cover" id="${[i]}">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </div>`
  } 
}

function deleteBook(event) {
  savedCovers.splice(event.target.parentNode.id, 1)
  displaySavedCovers()
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
