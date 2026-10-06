const fs = require('fs');
const path = require('path');

const dirsToRename = ['components/spectrumui', 'app/registry/spectrumui'];

dirsToRename.forEach(dir => {
  const oldPath = path.join(process.cwd(), dir);
  const newPath = path.join(process.cwd(), dir.replace('spectrumui', 'lavaui'));
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log('Renamed ' + oldPath + ' to ' + newPath);
  } else {
    console.log('Not found (might already be renamed): ' + oldPath);
  }
});
