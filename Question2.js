function fetchQuestion(question) {
    return new Promise((resolve, reject) => {
        if (question === "What is your name? ") {
            resolve();
        }
        else {
            reject();
        }
    });
}
let question = "What is your name? ";
fetchQuestion(question)
    .then(() => {
    console.log(question);
})
    .catch((error) => {
    console.error('Something went wrong:', error);
});
export {};
