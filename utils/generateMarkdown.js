// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title} 
  ${answers.description} 
  ${answers.instruction}
  ${answers.usage}
  ${answers.license}
  ${answers.contributers}
  ${answers.tests}
  ${answers.username}
  ${answers.email}
`;
}

module.exports = generateMarkdown;
