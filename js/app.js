"use strict";
var deck = document.getElementById("deck");
console.log(deck);
/*
 * Create a list that holds all of your cards
 */
var min, sec, hours;
var childa = document.getElementsByClassName("card");
var childList = [].slice.call(document.getElementsByClassName("card"));
console.log(childList);
let status = 0;
var timeArea = document.getElementById("time");
var moves = 0;
var time;
var movesSection = document.getElementById("moves");
var cardsStore = [];
var starCount = 3;
var starsSection = Array.prototype.slice.call(document.getElementsByClassName("fa-star"));
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
window.onload = inceptGame();

function inceptGame() {
  var changedCards = shuffle(childList);
  var i = 0;
  while (i < changedCards.length) {
    deck.appendChild(changedCards[i]);
    i++;
  }
}
// Adding EventListener to the cards
for (var i in childList) {
  childList[i].addEventListener("click", openCard);
}
// For opening the card
function openCard() {
  if (status == 0) {
    startTimer();
    status = status + 1;
  }
  this.classList.add("card");
  this.classList.add("open");
  this.classList.add("show");
  this.classList.add("disable");

  cardsStore.push(this);
  if (cardsStore.length == 2) {
    moves = moves + 1;
    movesSection.innerHTML = moves;
    starsRating();
    // For matching the cards
    if (cardsStore[0].children[0].classList.item(1) == cardsStore[1].children[0].classList.item(1)) {
      matched();
      if (equalCards.length == 16) {
        clearInterval(time);
        // For displaying thr POPUP
        Swal.fire({
          title: "Good Job",
          html: 'You have earned' + starCount + ' <i class="fa fa-star"> </i> <br> And You completed this game with the time of <br>' + hours + ' hours :' + min + ' minutes :' + sec + ' seconds :' + moves + ' moves ',
          confirmButtonText: '<i class="fa fa-thumbs-up"</i> Restart',
        }).then(() => {
          document.location.reload();
        });
      }
      cardsStore = [];

    } else {
      unmatch();
    }
  }
}
var equalCards = document.getElementsByClassName("match");
//Timer functionality
function startTimer() {
  sec = 0;
  min = 0;
  hours = 0;
  time = setInterval(() => {
    sec = sec + 1;
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hours = hours + 1;
    }
    timeArea.innerHTML = hours + " :: " + min + " :: " + sec;
  }, 1000)
}

function matched() {
  cardsStore.forEach((item) => {
    item.classList.add("match");
  })
}

function unmatch() {
  cardsStore.forEach((item) => {
    item.classList.add("unmatch");
  })
  cardsStore.map((card) => {
    setTimeout(() => {
      card.classList.remove("unmatch", "open", "show", "disable");
    }, 200);
  })
  cardsStore = [];
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// For displaying the stars
function starsRating() {
  if (moves >= 15 && moves <= 20) {
    starCount = 2;
    starsSection[2].style.display = "none";
  }
  if (moves >= 20) {
    starCount = 1;
    starsSection[1].style.display = "none";
  }
}
