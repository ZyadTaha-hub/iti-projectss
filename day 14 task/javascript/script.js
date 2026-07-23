
const numbers = [1, 2, 3, 4];

for (var i=0;i<4;i++)
    console.log(numbers[i]*2)

const nums = [10, 25, 5, 30, 15, 40];

const result = nums.filter((num) => {
    return num > 20;
});

console.log(result);

const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];

const user = users.find((item) => {
    return item.age > 25;
});

console.log(user);


const names = ["ali", "mona", "ahmed"];

const upperNames = names.map((name) => {
    return name.toUpperCase();
});

console.log(upperNames);

const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

for (const index in fruits) {
    console.log(index);
}

fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});

const sum = (a, b) => {
    return a + b;
};

console.log(sum(5, 7));


const userData = {
    name: "Mostafa",
    age: 25
};

const { name, age } = userData;

console.log(name);
console.log(age);


console.log(`Hello ${name}`);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


const students = [
    { name: "zyad", degree: 70 },
    { name: "taha", degree: 95 },
    { name: "mosafa", degree: 40 },
    { name: "ali", degree: 85 },
    { name: "Omar", degree: 55 }
];

const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);


const passedStudents = students.filter((student) => {
    return student.degree >= 60;
});

console.log(passedStudents);


const topStudent = students.find((student) => {
    return student.degree > 90;
});

console.log(topStudent);

students.forEach((student) => {
    console.log(student.name);
});

const nums2 = [5, 10, 15, 20];
const total = nums2.reduce((sum, current) => {
    return sum + current;
}, 0);

console.log(total);