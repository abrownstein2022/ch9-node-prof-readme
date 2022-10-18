// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ projtitle, descr, installioninstructions, usageinfo, contributionguidelines, testinstructions, license, githubusername, email}) =>
  `hello readme`;


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projtitle',
      message: 'Enter the project title:',
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a project title.");
        }
        return true;
       }
    },
    {
      type: 'input',
      name: 'descr',
      message: 'Enter the description:',
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a description.");
        }
        return true;
       }
    },
    {
      type: 'input',
      name: 'installioninstructions',
      message: 'Enter the installation instructions:',
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter installation instructions.");
        }
        return true;
       }
    },
    {
      type: 'input',
      name: 'usageinfo',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'contributionguidelines',
      message: 'Enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'testinstructions',
      message: 'Enter the test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'GPL', 'Apache', 'compliant', 'ppl1.3c-ofl','none'],
      default: 'MIT',
      message: 'Select a license:',
    },
    {
      type: 'input',
      name: 'githubusername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    }        
];


// .then((answers) => {
//     const readmePageContent = generateREADME(answers);

//     fs.writeFile('README.md', readmePageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created README file!')
//     );
//   });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Your README.md file has been generated!")
  });
}


// TODO: Create a function to initialize app
//function init() {}
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();
