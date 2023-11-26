"use strict";
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
// Union
const newDeveloper = {
    name: "sujon",
    expertise: "JavaScript",
    experience: 1,
};
const developer = {
    name: "sujon",
    expertise: "JavaScript",
    experience: 1,
    leaderShipExp: 2,
};
console.log(newDeveloper);
console.log(developer);
