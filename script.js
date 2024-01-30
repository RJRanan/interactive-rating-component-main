const submitBtn = document.querySelector("#submit");
const ratingButton = document.getElementsByClassName("btn");
const selectedBtn = document.querySelector(".selected-number");
const ratingContainer = document.querySelector(".container");
const thankYouCard = document.querySelector(".thankyou-card");

let currentButton = 1;
for (let i = 0; i < ratingButton.length; i++) {
  ratingButton[i].addEventListener("click", function () {
    for (let j = 0; j < ratingButton.length; j++) {
      ratingButton[j].classList.remove("active");
      ratingButton[i].classList.add("active");
    }
    currentButton = ratingButton[i].textContent;
    selectedBtn.textContent = currentButton;
  });
}

submitBtn.addEventListener("click", function () {
  ratingContainer.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
});
