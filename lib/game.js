// Holds collections of the asteroids, bullets, and your ship.
// #step method calls #move on all the objects, and #checkCollisions checks for colliding objects.
// #draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
    this.asteroids = [];
    this.addAsteroids();
  };
  var NUM_ASTEROIDS = 20;

  Game.prototype.randomPosition = function() {
    var rando = Math.random();
    var x, y;
    if (rando < 0.25) {
      y = this.yDim * Math.random();
      return [0, y];
    } else if (rando < 0.5) {
      x = this.xDim * Math.random();
      return [x, 0];
    } else if (rando < 0.75) {
      y = this.yDim * Math.random();
      return [this.xDim, y];
    } else {
      x = this.xDim * Math.random();
      return [x, this.yDim];
    }
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.asteroids.push(new window.Asteroids.Asteroid(this.randomPosition(), this));
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.move = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
      return [this.xDim, pos[1]];
    } else if (pos[1] < 0) {
      return [pos[0], this.yDim];
    } else if (pos[0] > this.xDim) {
      return [0, pos[1]];
    } else if (pos[1] > this.yDim) {
      return [pos[0], 0];
    }
    return pos;
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = i+ 1; j < this.asteroids.length; j++){
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  };

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
    // this.asteroids[index] = new Asteroids.Asteroid({game: this});

  };
})();
