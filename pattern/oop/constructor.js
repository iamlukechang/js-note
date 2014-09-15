/**
 * Constructor, design pattern
 *
 * Example:
 *   var luke = new Person('Luke', 'Chang');
 *
 *   luke.getName(); // 'Luke Chang'
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

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  exports.Person = Person;
}
