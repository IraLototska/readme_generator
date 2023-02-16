const fs = require("fs");
const inquirer = require('inquirer');
const {questions} = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// function to get the answers from user
const promptUser = () =>{
    return inquirer.prompt(questions).then ((data) => {
        writeToFile(generateMarkdown(data));
    });
}
// function to write README file
function writeToFile(data) {
    fs.writeFile("./readme/READ.md",data, (error) => {
    error ? console.err (error) : 
    console.log("Congratulations : your README.md is in readme foulder!")
    });
}

// function to initialize program
function init() {
    console.log("Hello user! Let's start making the README file");
    console.log("------------------------------ ---------------");
    console.log('You will unswer few important question, which will help to create it');
    promptUser();
}

// function call to initialize program
init();
