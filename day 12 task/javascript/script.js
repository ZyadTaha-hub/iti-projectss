
window.alert("Welcome!");

let studentName = "zyad"; 
let studentAge = 21;    

console.log(`Student Name: ${studentName}, Age: ${studentAge} years.`);


let student = {
    name: "zyad",
    track: "Frontend  using React",
    isCompleted: true,
    getDetails: function() {
        return `${this.name} is currently learning the ${this.track} track.`;
    }
};

console.log(student.getDetails());

if (studentAge >= 18) {
    console.log("you are adult");
} else {
    console.log("you stil achild :)");
}

let courseLevel = "Intermediate";

switch (courseLevel) {
    case "beginner":
        console.log("Beginner Level");
        break;
    case "intermedate":
        console.log("Intermediate Level");
        break; 
    default:
        console.log("expert ");
}

const calculateScore = (score1, score2) => {
    return score1 + score2;
};

console.log("total score by arrow function :", calculateScore(85, 90));

function showWelcomeMessage(name) {
    return `welcome back, ${name}!`;
}

console.log(showWelcomeMessage(studentName));

let tasksList = ["Study html ", "study css ", "study js"];

console.log("Daily Tasks List" );
for (let i = 0; i < tasksList.length; i++) {
    console.log({`${i + 1}}: ${tasksList[i]}`);
}