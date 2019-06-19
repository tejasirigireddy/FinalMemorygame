# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## I followed the below steps to develop this game.

-   At first downloded the skeleton project through the github link which was provided by the UDACITY
     in rubric structure.
-   And then extract the downloaded zip file. After extracting, I came to understand that several modifications are to be happened in `app.js`.
-   I  observed the `shuffle function` that was provided by the stackoverflow in `app.js`.
-   Create an array **childList** for listing the cards.
-   I used the slice for converting the HTMLCollection into the array format.
-   Now I got the shuffled array by setting the  `childList` array as the parameter in the `shuffle` function.
-   Added a `click` add **EventListener** with a function name of `opencard` for every card.
-   I added the timer function definition in `opencard` function.
-   The timer function is very important and it was working good.The player was playing the game and the timer was running until all the cards are matched.
-   The player flips one card to know the symbol by using `open card`.
-   The player then turns over the second card, trying to find that the two cards are matching or not.
-   If the cards are matched, both the cards stay flipped over.
-   If they are not matched, then the cards will come to the previous mode.
-   The time is calculated by using the `startTimer` function and the moves are incremented by the `movesSection`.
-   I have used the `starRating` function for displaying the stars the result.
-   If the moves are greater than fifteen then two stars will appear in the result and the moves are greater than twenty then single star appears in the output by using `starCount`.
-   The game ends once all the cards are matched correctly.
-   I have used the `sweetalert2` for displaying the popup.
-   Then the pop  will appear by showing the number of moves, time and stars.
-   If you want to play again then click on `restart` button.
