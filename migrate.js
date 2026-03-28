import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      content = '"use client";\n' + content;
      changed = true;
    }

    if (content.includes('react-router-dom')) {
      content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]react-router-dom['"];?/g, (match, p1) => {
        let imports = p1.split(',').map(s => s.trim());
        let newImports = [];
        if (imports.includes('Link')) {
          newImports.push("import Link from 'next/link';");
        }
        if (imports.includes('useLocation')) {
          newImports.push("import { usePathname } from 'next/navigation';");
        }
        if (imports.includes('useNavigate') || imports.includes('Navigate')) {
          newImports.push("import { useRouter } from 'next/navigation';");
        }
        return newImports.join('\n');
      });
      changed = true;
    }

    if (content.includes('<Link')) {
      content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
      changed = true;
    }

    if (content.includes('useLocation()')) {
      content = content.replace(/const\s+{\s*pathname\s*}\s*=\s*useLocation\(\)/g, 'const pathname = usePathname()');
      content = content.replace(/useLocation\(\)/g, '{ pathname: usePathname() }');
      changed = true;
    }
    
    if (content.includes('useNavigate()')) {
      content = content.replace(/useNavigate\(\)/g, 'useRouter()');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
