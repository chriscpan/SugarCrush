// Utility code, especially vector math stuff.

(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function(length) {
    var dx = ((Math.random() * 2 ) - 1) * length;
    var dy = Math.sqrt(Math.pow(length, 2) - Math.pow(dx, 2));
    if (Math.random() < 0.5) {
      return [dx, -dy];
    } else {
      return [dx, dy];
    }
  };

  Asteroids.Util.distance = function(pos1, pos2) {
    var dist = Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
    return dist;
  };
})();
