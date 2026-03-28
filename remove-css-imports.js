import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const dirs = ['./src/components', './app', './src'];

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, function(filePath) {
      if (filePath.endsWith('.css') && !filePath.includes('globals.css') && !filePath.includes('tailwind.css')) {
          try {
             fs.unlinkSync(filePath);
             console.log('Deleted CSS file:', filePath);
          } catch(e) {}
      } else if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        content = content.replace(/import\s+['"](?:\.\/|\.\.\/).*\.css['"];?\n?/g, (match) => {
           if(match.includes('globals.css')) return match;
           return '';
        });

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
        }
      }
    });
  }
});
