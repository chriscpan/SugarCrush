// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game#step.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function(ctx, xDim, yDim) {
    this.ctx = ctx;
    this.game = new window.Asteroids.Game(xDim, yDim);
  };

  GameView.prototype.start = function(){
    this.game.draw(this.ctx);
    setInterval(this.callback.bind(this), 20);
  };

  GameView.prototype.callback = function() {
    this.game.move();
    this.game.draw(this.ctx);
    this.game.checkCollisions();
  };
})();
