export const getAllQuiz = () =>  {
    //Backend connection is required, a sample mock data will be used
    return [{id:"randomid1", name: "JavaScript Level 1"}, {id:"randomid2", name: "JavaScript Level 2"}, {id:"randomid3", name: "JavaScript Level 3"}]

}

export const getQuestionsFromId = (id) => {
    //Backend connection is required, a sample mock data will be used
   
    return [{id: "randomid1", question: "What is the Javascript release date?", solution: "a", a: "1995", b:"1996", c: "1994", d: "1995"}, 
    {id: "randomid1", question: "Example 2", solution: "b", a: "1", b:"2", c: "3", d: "4"}]
}