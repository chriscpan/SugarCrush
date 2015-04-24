// Spacerock. It inherits from MovingObject.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroid.COLOR = '#FF47A3';
  Asteroid.RADIUS = 10;

  var Asteroid = Asteroids.Asteroid = function(options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.pos = options.pos;
    options.vel = Asteroids.Util.randomVec(10);

    Asteroids.MovingObject.call(this, options);
  };

  
})
