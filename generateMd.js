function generateMD(data) {
    const githubImageURL = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  
    return `
    \n## ${data.title} 
    
    \n ## Description
      \n${data.description}
    
    \n## ScreenShot
      \n![GitHub Logo](/screenshot/sample.png)
  
    \n## Table of Contents
      \n- [Contributors](#contributors)
      \n- [Technology](#technology)
      \n- [Usage](#usage)
      \n- [Credits](#credit)
      \n- [Installation](#installation)
      \n- [License](#license)
      \n- [Tests](#tests)
      \n- [Details](#details)
  
    \n## Collaborators
      \n${data.contributer}

    \n## Technologies
      \n${data.technology}

    \n## Installation
      \nPackages required to run this program are: ${data.installation}
    
    \n## Usage
      \nExamples of how to use this program: ${data.usage}

    \n## Credits
      \n${data.credit}
  
    \n## Installation
      \n${data.installation}

    \n## License
      \n${data.license}
  
    \n## Tests
      \nTo test, run the following command: ${data.tests}

    \n## Contact Author
      \n![Badge](${gitHub}) 
      \n![Profile Image](${githubImageURL})
      \nView the project in GitHub at: ${data.url}
      \nFor further assistance, contact the author at ${data.email}.`
     
  }
  
  module.exports = generateMD;