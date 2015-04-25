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

  Asteroids.Util.dist = function(pos1, pos2) {
    var distance = Math.sqrt(
      Math.pow( (pos1[0] - pos2[0]), 2) + Math.pow( (pos1[1] - pos2[1]), 2 )
    );
    return distance;
  };
})();
