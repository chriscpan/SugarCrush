// Spacerock. It inherits from MovingObject.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: Asteroids.Util.randomVec(Asteroid.VELOCITY),
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      game: game
    });
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
  Asteroid.COLOR = "#A9A9A9";
  Asteroid.RADIUS = 20;
  Asteroid.VELOCITY = 10;
})();
