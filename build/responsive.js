var hideCardLink = document.getElementById("hide-card");
var showCardLink = document.getElementById("show-card");
var cardContent = document.getElementById("card-content");

function hideCard() {
  hideCardLink.style.display = "none";
  showCardLink.style.display = "inline";
  cardContent.style.display = "none";
}

function showCard() {
  hideCardLink.style.display = "inline";
  showCardLink.style.display = "none";
  cardContent.style.display = "block";
}