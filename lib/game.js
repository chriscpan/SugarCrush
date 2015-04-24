// Holds collections of the asteroids, bullets, and your ship.
// #step method calls #move on all the objects, and #checkCollisions checks for colliding objects.
// #draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  NUM_ASTEROIDS = 4;
  ASTEROID_VEC = 10;
  DIM_X = 500;
  DIM_Y = 500;

  var Game = Asteroids.Game = function(options) {
    this.dim_x = options.width;
    this.dim_y = options.height;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < NUM_ASTEROIDS ; i++ ) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: this.randomPosition(),
        vel: Asteroids.Util.randomVec(ASTEROID_VEC)
      }));
    }
  };

  Game.prototype.randomPosition = function() {
    var x = Math.random() * this.dim_x;
    var y = Math.random() * this.dim_y;
    return [x, y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    this.asteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };
})();
