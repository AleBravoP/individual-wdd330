// Add a reference to the #timer element 
// as a property of the <<view>> object
timer: document.querySelector("#timer strong");

this.secondsRemaining = 20;
this.timer = setInterval(this.countdown , 1000);

countdown() {
    // reduce the secondsRemaining by 1 using the -- operator
    game.secondsRemaining--;

    // display the number of seconds remaining
    view.render(view.timer,game.secondsRemaining);

    // check to see if the time fell below zero
    if(game.secondsRemaining < 0) {
        game.gameOver;
    }
};

gameOver() {
    view.render(view.info, `Game Over ${this.score} point ${this.score !== 1 ? "s" : ""}`);
    view.teardown();
    clearInterval(this.timer);
}