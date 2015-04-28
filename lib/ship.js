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

  Ship.prototype.fireBullet = function() {

    var norm = Asteroids.Util.dist([0,0], this.vel);
    if (norm === 0) {
      return ;
    }
    // debugger

    var bulletSpeed = 5;
    var bulletVel = [ this.vel[0] * bulletSpeed, this.vel[1] * bulletSpeed];
    // var bulletVel = [5, 5];
    var bullet = new Asteroids.Bullet({
      game: this.game,
      pos: this.pos.slice(0),
      vel: bulletVel
    });
    this.game.add(bullet);
  };
})();
