const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `
# ${data.title.toUpperCase()}

<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="profile-pic" title="${data.name}" width="100" height="100"></a>

![License: ${(data.lic) ? data.lic : 'MIT'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'MIT'}-brightgreen)





## Repository by  ${data.name}\n\n\n




---

## ${data.rmTitle}\n\n

## Project Description:\n${data.rmDesc}\n\n

## URL:\n${data.rmUrl}\n\n

## Installation:\n${data.inst}\n\n

## Usage:\n${data.use}\n\n

## License:\n${data.rmLic}\n\n

## Contributors:\n${data.con}\n\n

## Tests:\n${data.test}\n\n

## Questions:\n${data.qs}\n\n
`
}

module.exports = generateMarkdown