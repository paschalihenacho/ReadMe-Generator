function generateMD(data) {
    const githubImageURL = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  
    return `
    \n## ${data.title} 
    
    \n ## Description
    \n${data.description}
    
    ## ScreenShot
    \n![GitHub Logo](/screenshot/sample.png)
  
    ## Table of Contents
    \n- [Contributors](#contributors)
    \n- [Technology](#technology)
    \n- [Usage](#usage)
    \n- [Credits](#credit)
    \n- [Installation](#installation)
    \n- [License](#license)
    \n- [Tests](#tests)
    \n- [Details](#details)
  
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