// function to generate markdown for README
function getLicense(license_code) {
  let license = ``;
  switch (license_code) {
    case 'MIT':
      license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'IBM':
      license = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case 'ISC':
      license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case 'Mozilla':
      license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'GNU':
      license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'None':
      license = ``;
      break;
    default:
      break;
  }

  return license;
}

function displayToC(data) {
  return '## Table of Contents' +
    '\n\n' +
    (data.description !== '' ? '- [Description](#description)\n' : '') +
    (data.installation !== '' ? '- [Installation](#installation)\n' : '') +
    (data.usage !== '' ? '- [Usage](#usage)\n' : '') +
    (data.license !== '' ? '- [License](#license)\n' : '') +
    (data.contributing !== '' ? '- [Contributing](#contributing)\n' : '') +
    (data.test !== '' ? '- [Tests](#test)\n' : '') +
    ((data.username !== '' ) || (data.email !== '') ? '- [Questions](#questions)\n' : '') ;
}

function displayDescription(data){
  return (data.description !== '' ? `## Description\n\n${data.description}\n\n\n` : '')
}
function displayInstallation(data){
  return (data.installation !== '' ? `## Installation\n\n${data.installation}\n\n\n` : '')
}
function displayUsage(data){
  return (data.usage !== '' ? `## Usage\n\n${data.usage}\n\n\n` : '')
}
function displayLicense(data){
  return (data.license !== '' ? `## License\n\n${getLicense(data.license)}\n\n\n` : '')
}
function displayContributing(data){
  return (data.contributing !== '' ? `## Contributing\n\n${data.contributing ? 'Yes, I would like other developers to contribute.' : 'No contribution is required.'}\n\n\n` : '')
}

function displayTests(data){
  return (data.test !== '' ? `## Tests\n\n${data.test}\n\n\n` : '')
}

function displayQuestion(data){
  return ((data.username !== '' )|| (data.email !== '') ? `## Questions\n\n${
    data.username !== '' ? `- Github Profile: [${data.username}](${data.userlink})` : ''
  }\n\n${data.email !== '' ? `- Email: ${data.email}` : ''}` : '')
}


function generateMarkdown(data) {
  return `# ${data.title}

${displayToC(data)}

${displayDescription(data)}

${displayInstallation(data)}

${displayUsage(data)}

${displayLicense(data)}

${displayContributing(data)}

${displayTests(data)}

${displayQuestion(data)}
`;
}

module.exports = generateMarkdown;
