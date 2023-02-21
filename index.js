const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const emailValidator = require('email-validator');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?',
        validate: title => {
            if(title === ""){
                return 'This field cannot be empty!!';
            }else{
                return true;
            }
        }
    },
    {
        name: 'description',
        type: 'input',
        message: 'Give a brief desciprtion about your project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples of use:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license do you want to add?',
        choices: ['MIT', 'IBM', 'ISC', 'Mozilla', 'GNU', 'None']
    },
    {
        name: 'contributing',
        type: 'confirm',
        message: 'Would you like other developers to contribute to your project?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Write a test for your project:'
    },
    {
        name: 'username',
        type: 'input',
        message: 'Provide your Github username:'

    },
    {
        name: 'userlink',
        type: 'input',
        message: 'Provide your Github profile link:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Provide your email address:',
        validate: email => {
            const valid = emailValidator.validate(email);
            return valid ? true : 'Enter a valid email address';
        }
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success');;
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch(err => console.log(err))
}

// function call to initialize program
init();
