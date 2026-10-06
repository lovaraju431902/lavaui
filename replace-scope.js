const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (['.ts', '.tsx', '.mjs', '.json'].includes(path.extname(fullPath))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@lavaui')) {
        content = content.split('@lavaui').join('@lava');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

['app', 'scripts', 'content', 'components'].forEach(dir => replaceInDir(path.join(process.cwd(), dir)));
