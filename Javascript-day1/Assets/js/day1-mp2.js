let quiz ={
    question: "What is Capital of india?",
    options:['A-Chennai','B-Kolkatta','C-delhi','D-Mumbai'],
    correct_answer:"C-Delhi",
    User_Answer:"A-Chennai",
    isUser1selected: false
}
console.log("The quiz result:",quiz)


let validate = quiz.correct_answer==quiz.User_Answer;
console.log("Is User select correct answer:" ,validate)