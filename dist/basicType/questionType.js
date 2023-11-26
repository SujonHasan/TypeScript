"use strict";
// Ternary operator
const age = 22;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
//Nullish Coeslancing operator (just use null & undefined)
const isAuthenticatedUser = null; // it's work for null & undefined value
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log(userName, userName2);
