/**
 * Mixin, design pattern
 *
 * Example:
 *
 *   var luke = new Person('Luke', 'Chang');
 *
 *   luke.run(); // 'Luke is running!'
 *
 * Note:
 *
 *   If we update the run in actionMixin, the luke.run will not be updated
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Class defining an person
 *
 * @param {string} firstName First name
 * @param {string} lastName Last name
 * @constructor
 */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

/**
 * Get the name
 *
 * return {string} The full name
 */
Person.prototype.getName = function () {
  return this.firstName + ' ' + this.lastName;
};

/**
 * A mixin object that contains some action methods
 */
var actionMixin = {
  run: function () {
    console.log(this.firstName + ' is running!');
  } ,
  sleep: function () {
    console.log(this.firstName + ' is sleeping!');
  }
}

/**
 * Extend a target's prototype
 *
 * @param {class} targetClass A constructor
 * @param {array} [methods] An array of mixin's method name 
 */
Object.defineProperty(actionMixin, 'assign', {
  value: function (targetClass, methods) {
    if (typeof targetClass !== 'function') return;

    if (Array.isArray(methods)) {
      var method;
      for (var i = 0, len = methods.length; i < len; i++) {
        method = methods[i];

        if (typeof this[method] !== 'function') {
          console.log(method + ' cannot be found in the mixin.');
        } else {
          targetClass.prototype[method] = this[method];
        }
      }
    } else {
      for (var p in this) {
        targetClass.prototype[p] = this[p];
      }
    }
  }
});

// extend the Person from the actionMixin
actionMixin.assign(Person);

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  exports.Person = Person;
}
