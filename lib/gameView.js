(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  window.livesLost = 0;
  window.candiesShot = 0;
  window.paused = false;

  var GameView = Asteroids.GameView = function(options) {
    this.ctx = options.ctx;
    this.dimX = options.width;
    this.dimY = options.height;
    this.game = new Asteroids.Game({
      height: this.dimY,
      width: this.dimX
    });
    // this.drawStatus();
  };

  GameView.moves = {
    "up": [0, -1],
    "down": [0, 1],
    "right": [1, 0],
    "left": [-1,0]
  };

  GameView.prototype.start = function() {
    var that = this;
    setInterval(
      function(){
        that.game.draw(that.ctx);
        that.game.step();
        that.drawDirections();
        that.drawScores();
        if (that.game.isWon()) {
          that.drawVictory();
        }
      }, 20);
    this.bindKeyHandlers();
  };

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.game.ship;
    Object.keys(GameView.moves).forEach( function(k) {
      var move = GameView.moves[k];
      key(k, function() {
        if (k === "right") {
          ship.rotateRight();
        } else if (k === "left") {
          ship.rotateLeft();
        } else {
          ship.power(move);
        }
      });
    });

    key("space", function(){
      ship.fireBullet();
    });

    // key("enter", function(){
    //   // debugger
    //   clearInterval(this.start);
    // }.bind(this));
  };

  GameView.prototype.drawDirections = function() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.textAlign = 'right';
    this.ctx.font = '30px Brush Script MT';
    this.ctx.fillText("Right & Left to Rotate", this.dimX - 40, this.dimY-100);
    this.ctx.fillText("Up & Down to Move", this.dimX - 40, this.dimY-70);
    this.ctx.fillText("Space to Fire!", this.dimX - 40  , this.dimY-40);
  };

  GameView.prototype.drawScores = function() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.textAlign = 'right';
    this.ctx.font = '30px Brush Script MT';
    this.ctx.fillText("Candies Shot: " + window.candiesShot, this.dimX - 40, 40);
    this.ctx.fillText("Lives Lost: " + window.livesLost, this.dimX - 40, 70);
    this.ctx.fillText("Points: 0", this.dimX - 40, 100);
  };

  GameView.prototype.drawVictory = function() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.textAlign = 'center';
    this.ctx.font = '60px Brush Script MT';
    this.ctx.fillText("Congratulations! You win!", this.dimX/2, this.dimY/2);
    if (GameView.audio) {

    } else {
      GameView.audio = new Audio('audio/candy-crush-victory.mp3');
      GameView.audio.play();
    }
  };
})();
