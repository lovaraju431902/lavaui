const fs = require('fs');
const path = require('path');

function renameFilesInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        renameFilesInDir(fullPath);
      }
    } else {
      if (file.includes('spectrum')) {
        let newFile = file.replace(/spectrum-ui/g, 'lavaui').replace(/spectrum/g, 'lava');
        let newPath = path.join(dir, newFile);
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed file: ${file} -> ${newFile}`);
      }
    }
  }
}

renameFilesInDir(process.cwd());
