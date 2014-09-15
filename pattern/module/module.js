/**
 * Module, design pattern
 *
 * Allows shared private methods or variables between instances
 *
 * Example:
 *   var luke = new Person('Luke', 'Chang');
 *   var jeff = new Person('Jeff', 'Whitney');
 *
 *   luke.id // 0;
 *   jeft.id // 1;
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Class defining an person
 */
var Person = (function () {
  /**
   * Counter for personal id
   *
   * @private
   */
  var cnt = 0;

  /**
   * @param {string} firstName First name
   * @param {string} lastName Last name
   * @constructor
   */
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    /**
     * Unique id
     *
     * @type {number}
     */
    this.id = cnt++;
  }

  /**
   * Get the name
   *
   * return {string} The full name
   */
  Person.prototype.getName = function () {
    return this.firstName + ' ' + this.lastName;
  };

  return Person;
})();

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  exports.Person = Person;
}
