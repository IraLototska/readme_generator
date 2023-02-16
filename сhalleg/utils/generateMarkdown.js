// function to generate markdown for README
function generateMarkdown(data) {

  var license = "";
  var githubPage = "https://github.com/";
  

  switch (data.license) {
    case 1:
      license = "Apache License 2.0";
      break;
    case 2:
      license = "GNU General Public Licence v3.0";
      break;
    case 3:
       license = "MIT License";
      break;
    case 4:
        license = "Boost Software Licence 1.0";
      break;
  }

  return `# ${data.title}


  ## Description
  ${data.description}

  ### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${license}

### Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please, write [${data.email}](mailto:${data.email})
GitHub : [${githubPage}](${githubPage}) 
`;
}

module.exports = generateMarkdown;
