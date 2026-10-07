const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  if (dir.includes('node_modules') || dir.includes('.next') || dir.includes('.git')) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      scanDir(p);
    } else if (['.ts', '.tsx', '.js', '.jsx'].includes(path.extname(p))) {
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes('bg-neutral-900') || content.includes('dark:bg-white')) {
        console.log('Found hardcoded colors in:', p);
      }
    }
  }
}

scanDir(process.cwd());
