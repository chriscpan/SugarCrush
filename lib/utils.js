// Utility code, especially vector math stuff.

(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  Asteroids.Util = {};

  var inherits = Asteroids.Util.inherits = function(childClass, parentClass){
    function Surrogate () { this.constructor = childClass; }
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function(length) {
    var angle = Math.random() * Math.PI * 2;
    var angle2 = Math.random() * Math.PI * 2;
    return [angle, angle2];
  };

  var dist = Asteroids.Util.dist = function(pos1, pos2) {
    var distance = Math.sqrt(
      Math.pow( (pos1[0] - pos2[0]), 2) + Math.pow( (pos1[1] - pos2[1]), 2 )
    );
    return distance;
  };

  // var scale = Asteroids.Util.scale = function (vec, m) {
  //   return [vec[0] * m, vec[1] * m];
  // };
  //
  // var dir = Asteroids.Util.dir = function (vec) {
  //   var norm = Asteroids.Util.dist([0,0], vec);
  //   return Asteroids.Util.scale(vec, 1 / norm);
  // };

})();
