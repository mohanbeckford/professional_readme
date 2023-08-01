// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {
    return '';
}

const licenseBadges = {
  'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
};

if (license in licenseBadges) {
  return licenseBadges[license];
}

return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return '';
  }


const licenseLinks = {
  'MIT': 'https://opensource.org/licenses/MIT',
  'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
};

if (license in licenseLinks) {
  return licenseLinks[license];
}

return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  }
  const licenseSections = {
    'MIT': `
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.`,
    'Apache 2.0': `
## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE.md](LICENSE.md) file for details.`,

  };

  if (license in licenseSections) {
    return licenseSections[license];
  }

  return '';
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Use the license functions to get the license badge, link, and section based on the provided license
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

${data.installation ? '- [Installation](#installation)\n' : ''}
${data.usage ? '- [Usage](#usage)\n' : ''}
${data.contributing ? '- [Contributing](#contributing)\n' : ''}
${data.tests ? '- [Tests](#tests)\n' : ''}
${licenseLink ? '- [License](#license)\n' : ''}
- [Questions](#questions)

${data.installation ? `## Installation\n${data.installation}\n` : ''}
${data.usage ? `## Usage\n${data.usage}\n` : ''}
${data.contributing ? `## Contributing\n${data.contributing}\n` : ''}
${data.tests ? `## Tests\n${data.tests}\n` : ''}
${licenseSection}

## Questions

If you have any questions, feel free to reach out via the following channels:
- Email: ${data.email}
- GitHub: [${data.username}](https://github.com/${data.username}/)
`;
}

module.exports = generateMarkdown;
