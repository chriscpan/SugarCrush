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
  };

  GameView.prototype.start = function() {
    var that = this;
    setInterval(
      function(){
        that.game.draw(that.ctx);
        that.game.step();
      }, 20);
  };

})();
