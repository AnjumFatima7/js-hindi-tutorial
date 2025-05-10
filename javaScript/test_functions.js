const students = [
    { name: "Ali", age: 20, grade: 85, subjects: ["Math", "Science"] },
    { name: "Fatima", age: 22, grade: 90, subjects: ["English", "History"] },
    { name: "Sara", age: 19, grade: 72, subjects: ["Math", "Science"] },
    { name: "Omar", age: 21, grade: 95, subjects: ["English", "History"] },
    { name: "Anjum", age: 23, grade: 88, subjects: ["Math", "Science", "History"] }
];

  
// Use map() to return an array of only the names of students who are older than 20.
    const mapName = students.filter( student => student.age>20  ).map( student => student.name )
    console.log(mapName);
    
// Use filter() to find all students who have a grade above 80.


// Use reduce() to find the total sum of all student grades.

// Use find() to get the first student whose name is "Omar".

// Use every() to check if all students have a grade greater than 70.

// Use some() to check if any student has "History" as a subject.

// Use sort() to return a new array of students sorted by grade in descending order.

// Use map() to return an array of strings like:
// "Ali is 20 years old and got 85 marks" for each student.

// Use filter() to return all students who study both "Math" and "Science".

// Use reduce() to return the average grade of all students.
