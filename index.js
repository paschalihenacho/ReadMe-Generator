const fs = require("fs");
const inquirer = require("inquirer");
const generator = require("./generator")
const api = require("./githubApi")

// Questions User Answers
function Questions() {
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

function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) {
        throw err;
      }
      console.log("You have successfully written your README file");
    });
  };  

  async function init() {
    try {
      const answers = await Questions();
      writetoFile("README.md", generator(answers));
  
      } catch (err) {
        console.log(err);
      }
  };
  
  init();