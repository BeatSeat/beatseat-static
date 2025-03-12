const fs = require('fs/promises')

const pageageFile = {
  "name": "beatseat-static",
  "version": `0.0.${Date.now()}`,
  "description": "This is beatseat's static for blogs",
  "main": "README.md",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/BeatSeat/beatseat-static.git"
  },
  "dependencies": {
  },
  "keywords": ["beatseat", "static"],
  "author": "BeatSeat",
  "license": "The Unlicense",
  "bugs": {
    "url": "https://github.com/BeatSeat/beatseat-static/issues"
  },
  "homepage": "https://github.com/BeatSeat/beatseat-static#readme"
}
const pageageFileStr = JSON.stringify(pageageFile)
fs.writeFile('./package.json', pageageFileStr, 'utf8', (err) => {
  if (err) throw err
})

