import {build} from 'esbuild';
import {copyFile,mkdir} from 'node:fs/promises';
await mkdir('preview',{recursive:true});
await build({entryPoints:['src/luxurytime.js'],outfile:'assets/luxurytime.js',bundle:true,minify:true,format:'iife',target:['es2020'],legalComments:'eof'});
for(const [from,to] of [['@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2','lt-serif.woff2'],['@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff2','lt-serif-italic.woff2'],['@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2','lt-sans.woff2'],['@fontsource/cormorant-garamond/LICENSE','LT-SERIF-LICENSE.txt'],['@fontsource/dm-sans/LICENSE','LT-SANS-LICENSE.txt']])await copyFile('node_modules/'+from,'assets/'+to);
console.log('Built self-contained Luxurytime animation and local fonts.');
