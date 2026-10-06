const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        replaceInDir(fullPath);
      }
    } else {
      const ext = path.extname(fullPath);
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mjs'].includes(ext) || file === '.env') {
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;
        
        // Order matters! Replace longer phrases first
        content = content.replace(/Lava UI/g, 'Lava UI');
        content = content.replace(/lava ui/g, 'lava ui');
        content = content.replace(/lavaui/g, 'lavaui');
        content = content.replace(/Lava/g, 'Lava');
        content = content.replace(/lava/g, 'lava');
        
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated ${fullPath}`);
        }
      }
    }
  }
}

replaceInDir(process.cwd());
