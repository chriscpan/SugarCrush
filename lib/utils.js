// Utility code, especially vector math stuff.

(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  Asteroids.Util = {};

  var inherits = Asteroids.Util.inherits = function(childClass, parentClass){
    function Surrogate () { this.constructor = childClass};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  var Asteroids.Util.randomVec(length) {
    var angle = Math.random * Math.PI * 2;
    return angle;
  }
})();
