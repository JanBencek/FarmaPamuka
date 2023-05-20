//Kad se klikne karta stavi .active klasu ili ak vec ima makne
cards = document.getElementsByClassName("card");
console.log(cards.length);
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("card-active");
    if (this.classList.contains("card-active")) {
      this.classList.remove("card-active");
    } else {
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" card-active", "");
      }
      this.classList.add("card-active");
    }
  });
}
