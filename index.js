const inquirer = require('inquirer');
const fs = require('node:fs');
const shapes = require('./lib/shapes');

const questions = [
  'Choose a shape',
  'Enter text (up to 3 characters)',
  'Enter a color for the text',
  'Enter a color for the shape'
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName,
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${data.render()}
</svg>`, err => {
    if(err) {
      console.error(err);
    } else {
      console.log('file written succcesfully');
    }
  })
}

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
        name: "shape",
        type: "list",
        message: questions[0],
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        name: "text",
        type: "input",
        message: questions[1],
      },
      {
        name: "textColor",
        type: "input",
        message: questions[2],
      },
      {
        name: "shapeColor",
        type: "input",
        message: questions[3],
      },
    ])
    .then((answer) => {
      let data;

      switch(answer.shape) {
        case 'Circle':
          data = new shapes.Circle(answer.text, answer.textColor, answer.shapeColor) 
          break;
        case 'Triangle':
          data = new shapes.Triangle(answer.text, answer.textColor, answer.shapeColor) 
          break;
        case 'Square':
          data = new shapes.Square(answer.text, answer.textColor, answer.shapeColor) 
          break;
      }



      writeToFile(data.text.replace(/ /g,'-')+'.svg', data);
    })
}

init();