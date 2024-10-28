const fs = require('fs');
const inquirer = require('inquirer');

// License options
const licenses = [
    { name: 'MIT', value: 'MIT' },
    { name: 'Apache 2.0', value: 'Apache 2.0' },
    { name: 'GPL 3.0', value: 'GPL 3.0' },
    { name: 'BSD 3', value: 'BSD 3' },
    { name: 'None', value: 'None' }
];

// Function to generate README content
function generateMarkdown(data) {
    return `# ${data.title}

![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
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
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
You can also find me on GitHub: [${data.github}](https://github.com/${data.github}).
`;
}

// Inquirer prompts
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: licenses,
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?',
        },
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
    ])
    .then((data) => {
        const markdown = generateMarkdown(data);
        fs.writeFile('README.md', markdown, (err) =>
            err ? console.error(err) : console.log('Successfully created README.md!')
        );
    });
