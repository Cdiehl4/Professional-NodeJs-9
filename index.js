// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
        },
        {
          type: 'input',
          name: 'title',
          message: "What is your project's title?",
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please write a short description of your project',
        },
        {
          type: 'list',
          name: 'license',
          message: 'What kind of license should your project have?',
          choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD 3', 'None'],
        },
      {
          type: 'input',
          name: 'installation',
          message: 'What command should be run to install dependencies?',
          default: 'npm i',
        },
        {
          type: 'input',
          name: 'test',
          message: 'What command should be run to run tests (list instructions)?',
          default: 'npm test',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What does the user need to know about using the repo?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'What does the user need to know about contributing guidelines to the repo?',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.log(err) : console.log('Successfully created index.html!'))
  };
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile('NodeREADME.md',generateMarkdown(answers))
        });
}

// Function call to initialize app
init();
