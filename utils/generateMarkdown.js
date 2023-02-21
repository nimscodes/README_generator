// function to generate markdown for README
function getLicense(license_code){
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



function generateMarkdown(data) {
  return `# ${data.title}

    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license) 
    - [Contribution](#contributing)
    - [Tests](#test)
    - [Questions](#questions)
      - [Github](#username)
      - [Email](#email)

    # Description

    ${data.description}

    # Installation Guide

    ${data.installation}

    # Usage

    ${data.usage}

    # License

    ${getLicense(data.license)}

    # Contributing

    ${data.contributing ? 'Yes, I would like other developers to contribute.' : 'No contribution is required.'}

    # Test

    ${data.test}

    # Questions

    - Github Profile: [${data.username}](${data.userlink})

    - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
