const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Function to read the YAML front matter from a file
function readYamlFrontMatter(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const match = fileContents.match(/---\r\n([\s\S]*?)\r\n---/);
    if (match && match[1]) {
      let frontMatter = yaml.loadAll(match[1]);
      frontMatter = frontMatter[0];
      let path = filePath.replace(/\\/g, '/').replace('/_index.md', '');
      return frontMatter;
    }
  } catch (err) {
    // console.error(`Error reading YAML front matter from ${filePath}: ${err.message}`);
  }
  return {};
}

// Function to generate a JSON representation of a directory and its subdirectories
function generateDirectoryJSON(dirPath, rootPath = '') {
  const stats = fs.statSync(dirPath);
  if (!stats.isDirectory()) {
    return null; // Return null for non-directory paths
  }

  const dirObject = {
    name: path.basename(dirPath),
    type: 'directory',
    path: path.relative(rootPath, dirPath), // Calculate relative path
    children: [],
    frontMatter: readYamlFrontMatter(path.join(dirPath, '_index.md')), // Read YAML front matter
  };

  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const fileStats = fs.statSync(filePath);
    if (fileStats.isDirectory()) {
      const subDirObject = generateDirectoryJSON(filePath, rootPath);
      if (subDirObject) {
        dirObject.children.push(subDirObject);
      }
    }
  });

  return dirObject;
}

function main() {
  // Starting directory path
  const rootDirPath = './public/docs';
  // Generate the JSON representation of the directory hierarchy
  const directoryJSON = generateDirectoryJSON(rootDirPath, rootDirPath);
  // Write the JSON to a file
  fs.writeFileSync('./src/data/side-menu.json', JSON.stringify(directoryJSON, null, 2))
}

main();
