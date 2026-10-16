import {execFileSync} from 'node:child_process';
import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
execFileSync('python3',['-c',`
from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
root=Path.cwd()
folders=['assets','config','layout','locales','sections','snippets','templates']
preview_only={'lt-watch-gold.png','lt-watch-black.png','lt-watch-silver.png'}
with ZipFile(root/'dist/Luxurytime-Atelier-Shopify.zip','w',ZIP_DEFLATED) as z:
 for folder in folders:
  for p in sorted((root/folder).rglob('*')):
   if p.is_file() and p.name not in preview_only:z.write(p,p.relative_to(root))
with ZipFile(root/'dist/Luxurytime-Atelier-source.zip','w',ZIP_DEFLATED) as z:
 for folder in folders+['src','scripts','tests','docs']:
  for p in sorted((root/folder).rglob('*')):
   if p.is_file():z.write(p,p.relative_to(root))
 for name in ['README.md','LICENSE.md','package.json','package-lock.json','playwright.config.js','.gitignore','.theme-check.yml']:
  z.write(root/name,name)
for name in ['Luxurytime-Atelier-Shopify.zip','Luxurytime-Atelier-source.zip']:
 with ZipFile(root/'dist'/name) as z:
  assert z.testzip() is None
  assert 'layout/theme.liquid' in z.namelist()
  assert 'assets/luxurytime.js' in z.namelist()
  assert not any(n.startswith(('node_modules/','.git/','preview/')) for n in z.namelist())
  print(name, len(z.namelist()),'files', (root/'dist'/name).stat().st_size,'bytes; archive verified')
`],{stdio:'inherit'});
await copyFile('docs/UPLOAD-AND-PREVIEW.txt','dist/UPLOAD-AND-PREVIEW.txt');
