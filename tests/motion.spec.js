import {test,expect} from '@playwright/test';
test('desktop scrolling advances three editorial chapters inside the pinned scene',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('/');
 const geometry=await page.locator('#connection').evaluate(el=>({top:el.offsetTop,height:el.offsetHeight,sticky:el.querySelector('.connection-pin').offsetHeight}));
 for(let i=0;i<3;i++){
  const y=geometry.top-88+(geometry.height-geometry.sticky)*(i+.2)/3;
  await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);
  await expect(page.locator('.connection-pin')).toHaveAttribute('data-statement',String(i));
  await expect(page.locator(`button[data-statement="${i}"]`)).toHaveAttribute('aria-pressed','true');
  expect(await page.locator('.connection-pin').evaluate(el=>Math.round(el.getBoundingClientRect().top))).toBe(88);
 }
});
test('3D renderer follows sections and survives a desktop-to-mobile resize',async({page})=>{
 await page.goto('/');await expect(page.locator('html')).toHaveAttribute('data-render-mode','webgl');
 const canvas=page.locator('#scene-canvas');await expect(canvas).toHaveAttribute('data-scene','hero');
 await page.locator('#network').evaluate(el=>scrollTo({top:el.offsetTop-88,behavior:'instant'}));
 await expect(canvas).toHaveAttribute('data-scene','network');
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
 await expect(canvas).toHaveAttribute('data-scene','hero');
 const pose=(await canvas.getAttribute('data-pose')).split(',').map(Number);expect(pose[0]).toBeGreaterThan(0);expect(pose[0]).toBeLessThan(390);expect(pose[1]).toBeGreaterThan(300);expect(pose[1]).toBeLessThan(844);
});
test('visible motion control pauses animations and persists',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:'Pause animations',exact:true}).click();
 await expect(page.locator('html')).toHaveAttribute('data-motion','reduce');
 expect(await page.locator('.motion-bars i').first().evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 await expect(page.locator('#scene-canvas')).toHaveAttribute('data-motion','paused');
 await page.reload();await expect(page.getByRole('button',{name:'Animations paused',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Animations paused',exact:true}).click();await expect(page.locator('html')).toHaveAttribute('data-motion','full');
});
test('device reduced-motion preference removes pinning and keeps all manual chapters usable',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 expect(await page.locator('.connection-pin').evaluate(el=>getComputedStyle(el).position)).not.toBe('sticky');
 await page.getByRole('button',{name:'One shared direction',exact:true}).click();await expect(page.locator('#connection-heading')).toContainText('One shared direction.');
 await page.getByRole('tab',{name:/A relationship, continued/}).click();await expect(page.locator('#journey-panel')).toHaveAttribute('data-scene','2');
});
test('business goals select the appropriate product and preserve all nine modules',async({page})=>{
 await page.goto('/');await page.locator('[data-group="operations"]').click();
 await expect(page.locator('#product-panel h3')).toHaveText('Stock Management');
 await expect(page.locator('.product-tab')).toHaveCount(9);
 await page.locator('#product-more').click();await expect(page.locator('#product-detail h2')).toHaveText('Stock Management');
});
test('original CMS artwork loads in both themes and on mobile',async({page})=>{
 await page.goto('/');
 for(const theme of ['light','dark']){
  await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);
  const logos=page.locator('img[src="assets/brand/cms-logo-full-colour.png"]');
  expect(await logos.count()).toBeGreaterThanOrEqual(3);
  expect(await logos.evaluateAll(imgs=>imgs.every(img=>img.complete&&img.naturalWidth===1000&&img.naturalHeight===275))).toBe(true);
 }
 await page.setViewportSize({width:360,height:800});await expect(page.locator('header .brand-logo')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
test('a browser without WebGL receives visible local artwork and working controls',async({page})=>{
 await page.addInitScript(()=>{const getContext=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/.test(type)?null:getContext.call(this,type,...args);};});
 await page.goto('/');await expect(page.locator('html')).toHaveAttribute('data-render-mode','static');
 await expect(page.locator('.hero-core .core-fallback')).toBeVisible();
 await page.getByRole('button',{name:'Switch to dark mode'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await page.getByRole('button',{name:'Book a demo',exact:true}).click();await expect(page.locator('#demo-dialog')).toBeVisible();
});
