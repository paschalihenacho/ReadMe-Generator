const fs = require("fs");
const inquirer = require("inquirer");

// Questions User Answers
function askQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter your GitHub username.",
      name: "username"
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "email"
    },
    {
      type: "input",
      message: "Enter project URL from GitHub.",
      name: "url"
    },
    {
      type: "input",
      message: "Enter your project title.",
      name: "title"
    },
    {
      type: "input",
      message: "Enter your project description.",
      name: "description"
    },
    {
      type: "input",
      message: "List packages need to run this project.",
      name: "installation"
    },
    {
      type: "input",
      message: "List Technologies used to build this project.",
      name: "technology"
    },
    {
      type: "input",
      message: "List project use cases.",
      name: "usage"
    },
    {
      type: "list",
      name: "license",
      message: "Choose kind of licese to have.",
      name: "license",
      choices: ["APACHE 2.0", "MIT", "BSD 3", "GPL v3", "None"]
    },
    {
      type: "input",
      message: "List out all the projec contributors including yourself",
      name: "contributer"
    },
    {
      type: "input",
      message: "What command is used to run a test",
      name: "tests",
    }
  ]);
};



    

