/**
 * Object property attributes
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Object property attributes
 *
 * Basically, javascript object properties have three attributes:
 *
 *   configurable: the property can be deleted and property attributes can be 
 *   updated in the run time
 *
 *   enumerable: the property counts during enumeration of this object,
 *   ex: for-in loop
 *
 *   writable: the property value can be updated in the run time 
 *
 * In the normal cases, these three attributes are all true, but when using
 * a var to declare a variable, that variable will be non-configurable of its
 * excution context (global or function)
 */

// declare an object obj with a property prop
var obj = {prop: 'a property'};

// writable
obj.prop = 'an updated property!';

// enmurable
for (var p in obj) { // 'an updated property'
  console.log(obj[p]);
}

// the property is configurable
delete obj.prop; // true

// but the obj itself is non-configurable
delete obj; // false

// undeclared variable x 
x = 'x';

// configurable
delete x; // true

// a function with a declared variable y in its scope
var f = function () {var y = 'y'; return delete y;};

// y is non-configurable in function scope
f(); // false

/**
 * Object.getOwnPropertyDescriptor & Object.defineProperty (ECMA 5)
 *
 * There are two useful methods that can help us to check and define property
 * attributes:
 *
 *   Object.getOwnPropertyDescriptor: check the current attributes of a property
 *
 *   Object.defineProperty: define attributes for a property
 *   (including value, getter, and setter)
 *
 *   Object.defineProperties: define attributes for mulpitle properties
 *   (including value, getter, and setter)
 *
 * When using Object.defineProperty to create a property, all of configurable,
 * enumerable, and writable are false by default.
 */

var obj2 = {};

// define a property through Object.defineProperty
Object.defineProperty(obj2, 'prop', {
  value: 'obj2 property',
});

Object.getOwnPropertyDescriptor(obj2, 'prop'); // writable: false, enmurable: false, configurable: false ...

Object.defineProperty(obj2, 'prop', { // TypeError: Cannot redefine property: prop
  configurable: true
});

// define another property through Object.defineProperty with configurable: true
Object.defineProperty(obj2, 'prop2', {
  value: 'obj2 property2',
  configurable: true
});

// non-writable
obj2.prop2 = 'updated!'
obj2.prop2; // 'obj2 property2'

// non-enumerable
for (var p in obj2) { // undefined
  console.log(obj2[p]);
}

// but configurable!
delete obj2.prop2 // true
