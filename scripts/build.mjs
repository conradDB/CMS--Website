import { mkdir, copyFile, cp, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','app.js','content.js','web.config','motion.js','motion.css'])await copyFile(file,`dist/${file}`);
await cp('assets','dist/assets',{recursive:true});
await copyFile('docs/DEPLOYMENT.txt','dist/DEPLOYMENT.txt');
console.log('Built self-contained static website in dist/ (no runtime dependencies).');
