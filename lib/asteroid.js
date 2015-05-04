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
  Asteroid.IMG.src = 'img/blue-candy.png';
  Asteroid.COLOR = '#FF47A3';
  Asteroid.RADIUS = 40;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
      window.livesLost += 1;
    } else if (otherObject instanceof Asteroids.Bullet) {
      window.candiesShot += 1;
    }
  };

  Asteroid.prototype.draw = function(ctx){
    var halfRadius = Asteroid.RADIUS / 2;
    // debugger
    ctx.drawImage(
          Asteroid.IMG,
          this.pos[0],
          this.pos[1],
          Asteroid.RADIUS,
          Asteroid.RADIUS
        );
  };
})();
