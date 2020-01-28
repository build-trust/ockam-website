const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function changeFrontMatter(dir) {
  walkDir(dir, function(filePath) {
    let ext = path.extname(filePath);
    if(ext === '.md') {
      const contents = fs.readFileSync(filePath, 'utf8');
      const lines = contents.split(/\r?\n/);
      // if first line is '```yaml'
      if (lines[0] === '```yaml') {
        let endIndex = lines.findIndex((line) => line === '```');
        // replace start of front matter
        lines[0] = '---';
        // replace end of front matter
        lines[endIndex] = '---';
        fs.writeFileSync(filePath, lines.join('\n'))
      }
    }
  });
}

changeFrontMatter("src/content")
