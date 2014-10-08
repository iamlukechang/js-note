/**
 * Scope and Closure
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Function Scope
 *
 * Unlike other language using the block scope(the braces "{}"), javascript
 * uses function scope("function () {}"). The big difference is, all the
 * statement that are using a block, like for, if, while, ..., don't count
 * as scope in javascript.
 */

var x = 1;
function a() {
  var y = 2;

  x; // 1
  function b() {
    var z = 3;
    y = 4;

    x; // 1
    y; // 4
    for (var i = 0; i < 10; i++) {
      // In theory, there is no significant performance difference of
      // re-declaring the variable in a loop since it's still in the same
      // scope, but we still don't do this usuallly for avoiding confusing
      var omega = 4;
    }
    omgea; // 4
  }
  y; // 2
  z; // undefined
}
y; // undefined

/**
 * Global scope
 *
 * In javascript, the top scope is the global scope, everything that's not
 * declared in a function scope and every undeclared variables will go to global.
 *
 * In a browser, every js file share the same global scope; but in node.js, each
 * js file has it's own scope, so things won't go to global unless it's an
 * undeclared variable;
 */

// declare s in the global scope
var s = 's';

s; // 's'
t; // undefined

function c() {
  // undeclared variable
  t = 't';
}

t; // 't'

/**
 * Closure
 *
 * The good part of javascript scope is closure. A function can "remember" the
 * environment it's created, so it can access things that are not accessible 
 * outside the environment, and we call the function a closure.
 *
 * Closure often used to emulate private variables or methods, or dynamically
 * create methods
 */

// Simple example

var closure;
function environment() {
  var variableInEnvironment = 0;

  closure = function () {
    return variableInEnvironment;
  };
}

environment(); // closure is assigned here

variableInEnvironment; // undefined
closure(); // 0

// private variables and methods

makeIncreaser = (function () {
  var cnt = 0;

  function plusOne() {
    cnt++;
  }

  function getCnt() {
    return cnt;
  }

  return function () {
    return {
      plusOne: plusOne,
      getCnt: getCnt
    };
  };
})();

increaser1 = makeIncreaser();

increaser1.getCnt(); // 0
increaser1.plusOne();
increaser1.getCnt(); // 1

increaser2 = makeIncreaser();

increaser2.getCnt(); // 2

// dynamically create methods
var consolerArr = [];
for (var i = 0; i < 10; i++) {
  consolerArr[i] = (function (idx) {
    return function () {
      console.log(idx);
    }
  })(i);
}

consolerArr[2](); // 2
consolerArr[5](); // 5


/**
 * Excution context & Scope chain
 *
 * When code is executed, an internal object called "execution context" is
 * created. It defines the environment of the current executing code. There are
 * three kindex of execution context:
 *
 *   Global context: when javascript is initially executed, the global execution
 *     context is created first.
 *
 *   Function context: created whenever a function is executed, will be
 *     destroyed once the function is complete executed.
 *
 *   Eval context: created when using the eval function to execute a text
 *     expression, will be dextroyed once the it's complete executed.
 *
 * Every function has an internal property called "scope chain". A scope chain
 * contains a collection of objects represent its ancestor scopes; the top one
 * represents the current scope, the bottom one represents the global scope.
 */

var justAGlobalVariable = 0;
function o() {
  function p() {
    function q() {
      function r() {
        // this will first look for the justAGlobalVariable in the local scope,
        // and then its parent, and parents parent, until the justAGlobalVariable
        // in the global scope is found. This is why we should cache things in 
        // local.
        console.log(justAGlobalVariable);
      }

      r();
    }

    q();
  }

  p();
}

o();

/**
 * "this" & bind, call, apply
 *
 * The keyword "this" refers where the current function is called; in global
 * scope it refers to the global object; There are three ways we can change
 * "this" from the original context.
 *
 *   FUnction.prototype.bind: return a new function which is as same as the
 *     current one, but its "this" is bound to the first argument
 *
 *   FUnction.prototype.call: execute the function with "this" bound to the
 *     first argument
 *
 *   FUnction.prototype.apply: sams as Function.prototype.call, but allows
 *     an array passed as the second argument to be the arguments
 *
 */

function originalFunction() {
  console.log(this);
}

originalFunction(); // the global object, in a browser, it's window

var obj = {}; 

originalFunction.call(obj); // the obj object

var originalFunctionBindObj = originalFunction.bind(obj);

originalFunctionBindObj(); // the obj object
