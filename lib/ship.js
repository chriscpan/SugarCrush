// This is you! Another MovingObject subclass.
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    this.vel = [0, 0];
    this.color = Ship.COLOR;
    this.radius = Ship.RADIUS;
    this.pos = options.pos;
  };


  Ship.RADIUS = 50;
  Ship.COLOR = '#00FF00';

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
})();
