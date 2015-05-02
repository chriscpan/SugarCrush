// Spacerock. It inherits from MovingObject.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.pos = options.pos;
    options.vel = Asteroids.Util.randomVec(0);

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = '#FF47A3';
  Asteroid.RADIUS = 30;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      console.log('hello');
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      console.log('hit');
    }
  };
})();
