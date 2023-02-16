// Array of questions, which will help user to create READ.me
const questions = [
    {
        name: 'title',
        message: 'What is title of your project?'
    },
    {
        name: 'description',
        message: 'Write short description, which will help more clear understand the main options, purpose of this project creation.'
    },
    {
        name: 'installation',
        message: 'What is the way of installing it?'
    },
    {
        name: 'usage',
        message: 'How to use it?'
    },
    {
        name: 'license',
        message: 'License',
        type: 'list',
        choices: [ 
            {name:"Apache License 2.0",
            value:1},
            {name: "GNU General Public Licence v3.0",
            value:2},
            {name:"MIT License",
            value:3},
            {name:"Boost Software Licence 1.0",
            value:4}
            ]
       
    },
    {
        name: 'contributing',
        message: 'Which resourses/sites have you used?'
    },
    {
        name: 'tests',
        message: 'Write few steps to test project (if it is not only one)'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    },
    {
        name: 'githubusername',
        message: 'What is your GitHub username?'
    }
  ];
  //We can define what parts of module should be visible and usable by other modules
  module.exports.questions = questions;