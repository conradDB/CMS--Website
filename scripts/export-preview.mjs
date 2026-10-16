import {readFile, writeFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {pageFor} from './preview.mjs';

// A file:// compatible preview: no server, CDN, Shopify login or build required.
const mime={'.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf'};
const assets=new Map();
async function dataURL(name){
  name=path.basename(name);
  if(!assets.has(name)) assets.set(name,`data:${mime[path.extname(name)]};base64,${(await readFile('assets/'+name)).toString('base64')}`);
  return assets.get(name);
}
async function inlineHTML(html){
  // The preview fixtures use the same image for both responsive sizes.
  html=html.replace(/\s+srcset="[^"]*"/g,'');
  for(const match of [...html.matchAll(/src="\/assets\/([^"]+)"/g)]){
    html=html.replaceAll(match[0],`src="${await dataURL(match[1])}"`);
  }
  return html.replace(/href="\/([^"]*)"/g,(_,route)=>`href="${route.startsWith('#')?route:'#/'+route}"`);
}
let css=await readFile('assets/luxurytime.css','utf8');
for(const match of [...css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)]){
  css=css.replaceAll(match[0],`url('${await dataURL(match[1])}')`);
}
const bundle=(await readFile('assets/luxurytime.js','utf8')).replace(/<\/script/gi,'<\\/script');
let home=await pageFor(new URL('http://preview/'));
home=home.replace('<link rel="stylesheet" href="/assets/luxurytime.css">',`<style>${css}</style>`)
  .replace('<script src="/assets/luxurytime.js" defer></script>','');
home=await inlineHTML(home);
const pages={};
for(const route of ['/collections/all',...Array.from({length:4},(_,i)=>'/products/preview-'+i)]){
  const page=await pageFor(new URL(route,'http://preview/'));
  pages[route]=await inlineHTML(page.match(/<main id="MainContent">([\s\S]*?)<\/main>/)[1]);
}
const navigation=`
(()=>{
  const pages=${JSON.stringify(pages).replace(/</g,'\\u003c')};
  const main=document.getElementById('MainContent');
  const homepage=main.innerHTML;
  let current='/';
  function navigate(){
    const hash=location.hash;
    const route=hash.startsWith('#/')?hash.slice(1):'/';
    if(route!==current){
      main.innerHTML=pages[route.startsWith('/collections')?'/collections/all':route]||homepage;
      current=route;
      document.title=route.startsWith('/products/')?'Luxurytime — Illustrative product preview':'Luxurytime — The art of time';
      scrollTo({top:0,behavior:'instant'});
      main.setAttribute('tabindex','-1');main.focus({preventScroll:true});
    }
    if(hash&&!hash.startsWith('#/')) requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView());
    if(hash==='#/')scrollTo({top:0,behavior:'instant'});
  }
  addEventListener('hashchange',navigate);
  main.addEventListener('click',e=>{const button=e.target.closest('[data-preview]');if(button)openPreview(button.dataset.preview);});
  navigate();
})();`;
home=home.replace('</body>',()=>`<script>${bundle}</script><script>${navigation}</script></body>`);
await mkdir('downloads',{recursive:true});
await writeFile('downloads/Luxurytime-Preview.html',home);
execFileSync('python3',['-c',`from zipfile import ZipFile, ZIP_DEFLATED
with ZipFile('downloads/Luxurytime-Preview.zip','w',ZIP_DEFLATED) as archive:
 archive.write('downloads/Luxurytime-Preview.html','Luxurytime-Preview.html')
`]);
console.log(`Standalone preview exported (${(Buffer.byteLength(home)/1024/1024).toFixed(1)} MB). All artwork, fonts and animation code are embedded.`);
