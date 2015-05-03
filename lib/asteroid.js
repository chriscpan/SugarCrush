(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.pos = options.pos;
    options.vel = Asteroids.Util.randomVec(1);
    options.img = Asteroid.IMG;
    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.IMG = new Image();
  Asteroid.IMG.src = 'img/red-candy.png';
  Asteroid.COLOR = '#FF47A3';
  Asteroid.RADIUS = 20;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      console.log('hello');
      otherObject.relocate();
      window.livesLost += 1;
    } else if (otherObject instanceof Asteroids.Bullet) {
      console.log('hit');
      window.candiesShot += 1;
    }
  };
})();
