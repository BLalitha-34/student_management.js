let students = [
    {
        id: 101,
        name: "Rahul",
        age: 20,
        course: "BCA",
        marks: 85
    },
    {
        id: 102,
        name: "Priya",
        age: 19,
        course: "B.Sc",
        marks: 90
    },
    {
        id: 103,
        name: "Arjun",
        age: 21,
        course: "B.Com",
        marks: 78
    }
];
function displayStudents() {
    console.log("----- Student Details -----");
  students.forEach(function(student) {
        console.log(
            "ID: " + student.id +
            ", Name: " + student.name +
            ", Age: " + student.age +
            ", Course: " + student.course +
            ", Marks: " + student.marks
        );
    });
}
function addStudent(id, name, age, course, marks) {
    let student = {
        id: id,
        name: name,
        age: age,
        course: course,
        marks: marks
    };
    students.push(student);
    console.log("\nStudent added successfully!");
}
function searchStudent(id) {
    let student = students.find(function(s) {
        return s.id === id;
    });
    if (student) {
        console.log("\nStudent Found:");
        console.log("ID: " + student.id);
        console.log("Name: " + student.name);
        console.log("Age: " + student.age);
        console.log("Course: " + student.course);
        console.log("Marks: " + student.marks);
    } else {
        console.log("\nStudent not found.");
    }
}
function calculateAverage() {
    let total = 0;
    students.forEach(function(student) {
        total += student.marks;
    });
    let average = total / students.length;
    console.log("\nAverage Marks: " + average);
}
displayStudents();
addStudent(104, "Sneha", 20, "BBA", 88);
searchStudent(104);
calculateAverage();
OUTPUT:
----- Student Details -----
ID: 101, Name: Rahul, Age: 20, Course: BCA, Marks: 85
ID: 102, Name: Priya, Age: 19, Course: B.Sc, Marks: 90
ID: 103, Name: Arjun, Age: 21, Course: B.Com, Marks: 78
Student added successfully!
Student Found:
ID: 104
Name: Sneha
Age: 20
Course: BBA
Marks: 88
Average Marks: 85.25
