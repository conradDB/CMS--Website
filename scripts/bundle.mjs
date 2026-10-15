import {build} from 'esbuild';
await build({entryPoints:['src/scene.js'],bundle:true,minify:true,format:'iife',target:['es2020'],outfile:'assets/scene.js',legalComments:'eof'});
