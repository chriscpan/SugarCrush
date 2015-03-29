// Base class for anything that moves.
// Most important methods are #move, #draw(ctx), #isCollidedWith(otherMovingObject).
(function () {
  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(attributes){
    this.pos = attributes.pos;
    this.vel = attributes.vel;
    this.radius = attributes.radius;
    this.color = attributes.color;
    this.game = attributes.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function(){
    var tempPos = [];
    tempPos.push(this.pos[0] + this.vel[0]);
    tempPos.push(this.pos[1] + this.vel[1]);
    this.pos = this.game.wrap(tempPos);
  };
})();
