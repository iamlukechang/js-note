/**
 * Constructor Inheritance Chain, design pattern
 *
 * Example:
 *
 *   var luke = new Developer('Luke', 'Chang', [javascript, java]);
 *
 *   luke.canCode('javascript'); // true
 *   luke.canCode('ruby'); // false 
 *   luke.getName(); // Luke Chang
 *
 *   var lucia = new Developer('Lucia', 'Chambers', 'piano');
 *   lucia.play(); // Playing piano...
 *   lucia.getName(); // Lucia Chambers
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
 * Class defining a developer
 *
 * @param {string} firstName First name
 * @param {string} lastName Last name
 * @param {array} languages Languages
 * @constructor
 */
function Developer(firstName, lastName, languages) {
  Person.call(this, firstName, lastName);

  this.languages = languages;
}

Developer.prototype = Object.create(Person.prototype);

/**
 * Check what language does this developer use
 *
 * @param {string} language An language
 * @return {boolean}
 */
Developer.prototype.canCode = function (language) {
  return (this.languages.indexOf(language) >= 0) ? true : false;
};

/**
 * Class defining a musician
 *
 * @param {string} firstName First name
 * @param {string} lastName Last name
 * @param {string} instrument Major instrument 
 * @constructor
 */
function Musician(firstName, lastName, instrument) {
  Person.call(this, firstName, lastName);

  this.instrument = instrument;
}

Musician.prototype = Object.create(Person.prototype);

/**
 * Play an instrument
 *
 * return {string} Playing an instrument
 */
Musician.prototype.play = function () {
  return 'Playing ' + this.instrument + '...';
};

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  exports.Person = Person;
  exports.Developer = Developer;
  exports.Musician = Musician;
}
