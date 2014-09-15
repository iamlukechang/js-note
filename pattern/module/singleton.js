/**
 * Singleton, design pattern
 *
 * restricts the instantiation of a class
 *
 * Example:
 *
 *   var luke = new Person('Luke', 'Chang', 0);
 *   var lucas = new Person('Lucas', 'Lawrence', 0);
 *
 *   lucas.getName(); // 'Luke Chang'
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Class defining an person
 */
var Person = (function () {
  var people = {};

  /**
   * @param {string} firstName First name
   * @param {string} lastName Last name
   * @constructor
   */
  function Person(firstName, lastName, id) {
    if (typeof people[id] !== 'undefined' && people[id].constructor === Person)
        return people[id];

    this.firstName = firstName;
    this.lastName = lastName;
    /**
     * Unique id, not writable, not enumerable, not configurable
     *
     * @type {number}
     */
    Object.defineProperty(this, 'id', {
      value: id
    });

    people[id] = this;
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
