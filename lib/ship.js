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
    this.game = options.game;
  };


  Ship.RADIUS = 10;
  Ship.COLOR = '#00FF00';

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
})();
