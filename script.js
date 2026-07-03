// Student Objects

let student1 = {
    name: "Riya",
    course: "Web Development",
    marks: 450,
    age: 20
};

let student2 = {
    name: "Aman",
    course: "Java",
    marks: 380,
    age: 21
};

let student3 = {
    name: "Sneha",
    course: "Python",
    marks: 300,
    age: 19
};

let student4 = {
    name: "Rahul",
    course: "Web Development",
    marks: 200,
    age: 22
};

let student5 = {
    name: "Priya",
    course: "Java",
    marks: 490,
    age: 20
};

// Array

let students = [
    student1,
    student2,
    student3,
    student4,
    student5
];

let tableBody = document.getElementById("tableBody");

let totalPercentage = 0;
let passCount = 0;

document.getElementById("students").innerHTML = students.length;

for(let i=0;i<students.length;i++){

    let percentage = (students[i].marks/500)*100;

    let result;

    if(percentage>=40){

        result="Pass";
        passCount++;

    }

    else{

        result="Fail";

    }

    let grade;

    if(percentage>=80){

        grade="A";

    }

    else if(percentage>=60){

        grade="B";

    }

    else if(percentage>=40){

        grade="C";

    }

    else{

        grade="F";

    }

    totalPercentage += percentage;

    tableBody.innerHTML += `

    <tr>

        <td>${students[i].name}</td>
        <td>${students[i].course}</td>
        <td>${students[i].marks}</td>
        <td>${percentage.toFixed(2)}%</td>
        <td>${result}</td>

    </tr>

    `;

    console.log("Name:", students[i].name);
    console.log("Total Marks:", students[i].marks);
    console.log("Percentage:", percentage.toFixed(2));
    console.log("Result:", result);
    console.log("Grade:", grade);

}

let average = totalPercentage/students.length;

document.getElementById("average").innerHTML =
average.toFixed(2)+"%";

let passPercentage = (passCount/students.length)*100;

document.getElementById("pass").innerHTML =
passPercentage.toFixed(2)+"%";