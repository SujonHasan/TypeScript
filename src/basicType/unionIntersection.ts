type NoobDeveloper = {
    name: string
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

// Intersection
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}

enum Level {
    junior="junior",
    mid="mid",
    senior="senior",
}

type nextLevelDeveloper = JuniorDeveloper & {
    leaderShipExp: number,
    level: Level,
}

// Union
const newDeveloper : NoobDeveloper | JuniorDeveloper ={
    name: "sujon",
    expertise: "JavaScript",
    experience: 1,
}

const developer : JuniorDeveloper | nextLevelDeveloper = {
    name: "sujon",
    expertise: "JavaScript",
    experience: 1,
    leaderShipExp: 2,
}

console.log(newDeveloper);
console.log(developer);

