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

})();
