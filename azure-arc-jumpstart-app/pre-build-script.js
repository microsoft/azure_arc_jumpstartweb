const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// const matches = {};

// // Function to read the YAML front matter from a file
// function readYamlFrontMatter(filePath) {
//   try {
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     const match = fileContents.match(/---\r\n([\s\S]*?)\r\n---/);
//     if (match && match[1]) {
//       let frontMatter = yaml.loadAll(match[1]);
//       frontMatter = frontMatter[0];
//       let path = filePath.replace(/\\/g, '/').replace('/_index.md', '');
//       matches[path] = frontMatter;
//       return frontMatter;
//     }
//   } catch (err) {
//     // console.error(`Error reading YAML front matter from ${filePath}: ${err.message}`);
//   }
//   return {};
// }

// // Function to generate a JSON representation of a directory and its subdirectories
// function generateDirectoryJSON(dirPath, rootPath = '') {
//   const stats = fs.statSync(dirPath);
//   if (!stats.isDirectory()) {
//     return null; // Return null for non-directory paths
//   }

//   const dirObject = {
//     name: path.basename(dirPath),
//     type: 'directory',
//     path: path.relative(rootPath, dirPath), // Calculate relative path
//     children: [],
//     frontMatter: readYamlFrontMatter(path.join(dirPath, '_index.md')), // Read YAML front matter
//   };

//   const files = fs.readdirSync(dirPath);
//   files.forEach((file) => {
//     const filePath = path.join(dirPath, file);
//     const fileStats = fs.statSync(filePath);
//     if (fileStats.isDirectory()) {
//       const subDirObject = generateDirectoryJSON(filePath, rootPath);
//       if (subDirObject) {
//         dirObject.children.push(subDirObject);
//       }
//     }
//   });

//   return dirObject;
// }

// function main() {
//   // Starting directory path
//   const rootDirPath = './public/docs';
//   // Generate the JSON representation of the directory hierarchy
//   const directoryJSON = generateDirectoryJSON(rootDirPath, rootDirPath);
//   // Write the JSON to a file
//   fs.writeFileSync('./public/side-menu.json', JSON.stringify(directoryJSON, null, 2));
//   // console.log('Directory hierarchy JSON has been created.');
//   // fs.writeFileSync('./public/yamlmatches.json', JSON.stringify(matches, null, 2));
// }

// main();


const nodes = [{
  "Title": "Either the title or the linkTitle from the _index.md file's yaml frontmater",
  "Description": "the description from the _index.md file's yaml frontmater",
  "Weight": "the weight from the _index.md file's yaml frontmater",
  "Link": "Path to this _index.md file",
  "Items": [
    {
      "Title": "Either the title or the linkTitle from the _index.md file's yaml frontmater",
      "Description": "the description from the _index.md file's yaml frontmater",
      "Weight": "the weight from the _index.md file's yaml frontmater",
      "Link": "Path to this _index.md file",
      "Items": []
    }
  ]
}];

// read the directory and return the directory as a node following the above structure use the yaml frontmatter found in the _index.md file in the directory
function readDirWithLink(dirPath, rootPath = '') {
  const stats = fs.statSync(dirPath);
  if (!stats.isDirectory()) {
    return null; // Return null for non-directory paths
  }

  const dirObject = {
    "Title": "",
    "Description": "",
    "Weight": "",
    "Link": "",
    "Items": [],
  };

  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const fileStats = fs.statSync(filePath);
    if (fileStats.isDirectory()) {
      const subDirObject = readDirWithLink(filePath, rootPath);
      if (subDirObject) {
        dirObject.Items.push(subDirObject);
      }
    }
    if (fileStats.isFile() && file === '_index.md') {
      const frontMatter = readYamlFrontMatter(filePath);
      dirObject.Title = frontMatter.title || frontMatter.linkTitle || '';
      dirObject.Description = frontMatter.description || '';
      dirObject.Weight = frontMatter.weight || '';
      dirObject.Link = path.relative(rootPath, filePath).replace(/\\/g, '/').replace('/_index.md', '');
    }
  });

  return dirObject;
}

// read the yaml frontmatter from the _index.md file
function readYamlFrontMatter(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const match = fileContents.match(/---\r\n([\s\S]*?)\r\n---/);
    if (match && match[1]) {
      let frontMatter = yaml.loadAll(match[1]);
      frontMatter = frontMatter[0];
      return frontMatter;
    }
  } catch (err) {
    // console.error(`Error reading YAML front matter from ${filePath}: ${err.message}`);
  }
  return {};
}


// write the nodes array to a file
function main() {
  const rootDirPath = './public/docs';
  const directoryJSON = readDirWithLink(rootDirPath, rootDirPath);
  fs.writeFileSync('./public/side-menu-test.json', JSON.stringify(directoryJSON, null, 2));
}

main();