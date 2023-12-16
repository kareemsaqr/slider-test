// Get Slider Items | Array.From [ES6 Feature]
const sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Sliders
const sliderNumbers = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number  Element
const sliderNumberElement = document.getElementById("slider-number");

// Previous And Next
const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Handle  Click On Previous And Next Button
previousButton.onclick = previousSlide;
nextButton.onclick = nextSlide;

// Create The Main UL Element
const paginationElement = document.createElement("ul");

// Set Id On CreateElement Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create Last Items Based On Slides Count
for (var i = 1; i <= sliderNumbers; i++) {
  // Create The Li
  const paginationListItem = document.createElement("li");

  // Set Custom Attribute
  paginationListItem.setAttribute("data-index", i);

  // Set item Content
  paginationListItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationListItem);
}

// Add UL To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
const paginationUl = document.getElementById("pagination-ul");

// Get Pagination Items | Array.From [ES6 Feature]
const PaginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop All Bullets Items
for (var i = 0; i < PaginationBullets.length; i++) {
  PaginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// Trigger Checker Function
checker();

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // Do Nothing
  } else {
    currentSlide++;

    checker();
  }
}

// Previous Slide Function
function previousSlide() {
  if (previousButton.classList.contains("disabled")) {
    // Do Nothing
  } else {
    currentSlide--;

    checker();
  }
}

// Create The Checker Function
function checker() {
  // Set The Slide Number
  sliderNumberElement.textContent =
    "Slide #" + currentSlide + " Of " + sliderNumbers;

  // Remove All Active
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationUl.children[currentSlide - 1].classList.add("active");

  // Check If Current Slide Is The First
  if (currentSlide == 1) {
    // Add Disabled Classes On Previous Button
    previousButton.classList.add("disabled");
  } else {
    // Remove Disabled Classes From Previous Button
    previousButton.classList.remove("disabled");
  }

  // Check If Current Slide Is The Last
  if (currentSlide == sliderNumbers) {
    // Add Disabled Classes On Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Classes From Next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images Pagination And Bullets
function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  PaginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
