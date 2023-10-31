export const getAllQuiz = () =>  {
    //Backend connection is required, a sample mock data will be used
    return [{id:"randomid1", name: "JavaScript Level 1"}]

}

export const getQuestionsFromId = (id) => {
    //Backend connection is required, a sample mock data will be used
   
    return [{id: "randomid1", question: "What is the Javascript release date?", solution: "a", a: "1995", b:"1996", c: "1994", d: "1995"}]
}

export const sendExamResult = (quizId, resultMap) => {
   
    //Must connect to backend and send data. This project is just an interface project.


}