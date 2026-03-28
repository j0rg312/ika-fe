import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    if (content.includes('import.meta.env')) {
      content = content.replace(/import\.meta\.env\.VITE_/g, 'process.env.NEXT_PUBLIC_');
      content = content.replace(/import\.meta\.env/g, 'process.env');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});

['.env', '.env.production'].forEach(envFile => {
  if (fs.existsSync(envFile)) {
    let content = fs.readFileSync(envFile, 'utf8');
    content = content.replace(/VITE_/g, 'NEXT_PUBLIC_');
    fs.writeFileSync(envFile, content, 'utf8');
  }
});
