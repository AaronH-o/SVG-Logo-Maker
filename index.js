const inquirer = require('inquirer');
const fs = require('node:fs');

const questions = [
  'Enter text (up to 3 characters',
  'Enter a color for the text',
  'Choose a shape',
  'Enter a color for the shape'
];

function init() {
  let data = {
    text: '',
    textColor: '',
    shape: '',
    shapeColor: '',
  };

  inquirer
    .prompt([
      {
        name: "text",
        type: "input",
        message: questions[0],
      },
      {
        name: "textColor",
        type: "input",
        message: questions[1],
      },
      {
        name: "shape",
        type: "list",
        message: questions[2],
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: questions[3],
      },
    ])
    .then((answer) => {
      data.text = answer.text;
      data.textColor = answer.textColor;
      data.shape = answer.shape;
      data.shapeColor = answer.shapeColor;



    })
}