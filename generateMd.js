function generateMD(data) {
    const githubImageURL = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  
    return `
    ## ${data.title} 
    
    ## Description
      ${data.description}
    
    ## ScreenShot
    ![GitHub Logo](/screenshot/sample.png)
  
    ## Table of Contents
    - [Contributors](#contributors)
    - [Technology](#technology)
    - [Usage](#usage)
    - [Credits](#credit)
    - [Installation](#installation)
    - [License](#license)
    - [Tests](#tests)
    - [Details](#details)
  
    ## Collaborators
    ${data.contributer}

    ## Technologies
    ${data.technology}

    ## Installation
    Packages required to run this program are: ${data.installation}
    
    ## Usage
    Examples of how to use this program: ${data.usage}

    ## Credits
    ${data.credit}
  
    ## Installation
    ${data.installation}

    ## License
    ${data.license}
  
    ## Tests
    To test, run the following command: ${data.tests}

    ## Contact Author
    \n![Badge](${gitHub}) 
    \n![Profile Image](${githubImageURL})
    \nView the project in GitHub at: ${data.url}
    \nFor further assistance, contact the author at ${data.email}.`
     
  }
  
  module.exports = generateMD;