// 1. Student Grade Calculator

function calculateGrade() {
    const subject1 = parseInt(prompt("Enter marks for Subject 1:"));
    const subject2 = parseInt(prompt("Enter marks for Subject 2:"));
    const subject3 = parseInt(prompt("Enter marks for Subject 3:"));
    const subject4 = parseInt(prompt("Enter marks for Subject 4:"));
    const subject5 = parseInt(prompt("Enter marks for Subject 5:"));

    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const average = total / 5;

    let grade;
    if (average >= 90) {
        console.log(grade = "A");
    } else if (average >= 75) {
        console.log(grade = "B");
    } else if (average >= 50) {
        console.log(grade = "C");
    } else {
        console.log(grade = "F");
    }
    console.log(`Total Marks: ${total} /500`);
    console.log(`Average Mark: ${average}`);
    console.log(`Grade: ${grade}`);
}
calculateGrade()