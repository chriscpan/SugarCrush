// Holds collections of the asteroids, bullets, and your ship.
// #step method calls #move on all the objects, and #checkCollisions checks for colliding objects.
// #draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  NUM_ASTEROIDS = 20;
  ASTEROID_VEC = 30;

  var Game = Asteroids.Game = function(options) {
    this.dim_x = options.width;
    this.dim_y = options.height;
    this.asteroids = [];
    this.addAsteroids();

    this.ship = new Asteroids.Ship({
      pos: this.randomPosition(),
      game: this
    });
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < NUM_ASTEROIDS ; i++ ) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: this.randomPosition(),
        vel: Asteroids.Util.randomVec(ASTEROID_VEC),
        game: this
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

    this.allObjects().forEach( function(objs) {
      objs.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    var that = this;
    this.allObjects().forEach(function(objs) {
      objs.pos = this.wrap(objs.pos);
      objs.move();
    }.bind(this));
  };

  Game.prototype.wrap = function(pos) {
    // [0, y] --> [x_max, y]
    if (pos[0] < 0 ) {
      return [ this.dim_x, pos[1] ];
    } else if (pos[0] > this.dim_x) {
      // [x_max, y] --> [0, y]
      return [0, pos[1] ];
    } else if (pos[1] < 0) {
      // [x, 0] --> [x, y_max]
      return [pos[0], this.dim_y];
    } else if (pos[1] > this.dim_y){
      // [x, y_max] --> [x, 0]
      return [pos[0], 0];
    } else {
      return pos;
    }
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.allObjects().forEach(function(objOne) {
      that.allObjects().forEach(function(objTwo) {
        if (objOne === objTwo) {
          return ;
        }

        if (objOne.isCollidedWith(objTwo)) {
          objOne.collideWith(objTwo);
        }
      });
    });
  };

  Game.prototype.step = function() {
    this.checkCollisions();
    this.moveObjects();
  };

  Game.prototype.remove = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
  };

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship);
  };
})();
