// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game#step.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(options) {
    this.ctx = options.ctx;
    this.dimX = options.width;
    this.dimY = options.height;
    this.game = new Asteroids.Game({
      height: this.dimY,
      width: this.dimX
    });
    Asteroids.cur_game = this.game;
  };

  GameView.moves = {
    "up": [0, -1],
    "down": [0, 1],
    "right": [1, 0],
    "left": [-1,0]
  };

  GameView.prototype.start = function() {
    var that = this;
    setInterval(
      function(){
        that.game.draw(that.ctx);
        that.game.step();
      }, 10);
    this.bindKeyHandlers();
  };

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.game.ship;
    Object.keys(GameView.moves).forEach( function(k) {
      var move = GameView.moves[k];
      key(k, function() {
        if (k === "right") {
          ship.rotateRight();
          console.log("right!");
        } else if (k === "left") {
          console.log("left");
          ship.rotateLeft();
        } else {
          ship.power(move);
        }
      });
    });

    key("space", function(){
      ship.fireBullet();
    });
  };

})();
