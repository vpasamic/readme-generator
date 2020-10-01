// function to generate markdown for README
function generateMarkdown(answers) {
  return  `
  #${answers.Title} 

  ##Table of Contents
  -[Description](#Description)
  -[Installation](#Installation Instructions)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributers](#Contributers)
  -[Tests](#Tests)
  -[Contact ME](#Contact Me)

  ##Description
  ${answers.description} 

  ##Installation Instructions
  ${answers.instruction}

  ##Usage
  ${answers.usage}

  ##License
  ${answers.license}

  ##Contributers
  ${answers.contributers}

  ##Tests
  ${answers.tests}
  
  #Contact Me
  ##Github
  ${answers.username}
  ##Email
  ${answers.email}
`
}

module.exports = generateMarkdown;
