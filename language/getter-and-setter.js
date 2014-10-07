/**
 * Getter and Setter
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Getter and Setter
 *
 * Like some other languages, javascript allows us to define getter and setter
 * for an object property. There are two ways to define getter and setter:
 *
 *   Object.defineProperty:
 *
 *     Object.defineProperty(obj, 'prop', {
 *       get: function () {...},
 *       set: function () {...}
 *     })
 *
 *   Define when creating an object:
 *
 *     obj = {
 *       get prop() {...},
 *       set prop() {...}
 *     }
 *
 * Note: a property with setter does not mean it's setting the property value,
 * what it's doing is running a function when we access the property with an
 * assignment operator(ex: =, +=, -=, ...), and for getter it's running when we
 * just access the property. In the other hand, we cannot define a property with
 * getter/setter and writable or value at the same time.
 */

(function () {
  var cnt = 0;

  obj = {
    set prop(x) {
      return cnt = x;
    },
    get prop() {
      return cnt++;
    }
  };
})();

obj.prop; // 0
obj.prop; // 1
obj.prop; // 2
obj.prop = 0;
obj.prop; // 0
obj.prop; // 1

/**
 * Using getter and setter to implement watcher/notifier
 *
 * Since the getter and setter are functions, we can easily to update other
 * variable or object properties when access an object property. And the cool
 * thing is this also helps on implementing the "two-way data binding" feature
 * like what Angular.js does.
 */

var targets = [];

(function () {
  var prop;

  modle = {
    set prop(arg) {
      for (var i = 0, len = targets.length; i < len; i++) {
        targets[i].prop = arg;
      }

      return prop = arg;
    },
    get prop() {
      return prop;
    }
  }
})();

targets.push({prop: 0})
targets.push({prop: 3})

targets[0].prop; // 0
targets[1].prop; // 3

modle.prop = 5;
modle.prop; // 5

targets[0].prop // 5
targets[1].prop // 5
