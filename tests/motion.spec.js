import {test,expect} from '@playwright/test';
test('desktop scrolling advances all four story chapters while the scene stays pinned',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('/');
 const geometry=await page.locator('#journey').evaluate(el=>({top:el.offsetTop,height:el.offsetHeight,sticky:el.querySelector('.journey-sticky').offsetHeight}));
 for(let i=0;i<4;i++){
  const y=geometry.top-88+(geometry.height-geometry.sticky)*(i+.2)/4;
  await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);
  await expect(page.locator('#journey-panel')).toHaveAttribute('data-scene',String(i));
  await expect(page.locator(`#step-${i}`)).toHaveAttribute('aria-selected','true');
  expect(await page.locator('.journey-sticky').evaluate(el=>Math.round(el.getBoundingClientRect().top))).toBe(88);
 }
});
test('visible motion control pauses CSS and SVG animations and persists',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:'Pause animations',exact:true}).click();
 await expect(page.locator('html')).toHaveAttribute('data-motion','reduce');
 expect(await page.locator('.motion-bars i').first().evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 expect(await page.locator('.hero-instrument svg').evaluate(el=>el.animationsPaused())).toBe(true);
 await page.reload();await expect(page.getByRole('button',{name:'Animations paused',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Animations paused',exact:true}).click();await expect(page.locator('html')).toHaveAttribute('data-motion','full');
});
test('device reduced-motion preference removes pinning and leaves manual chapters usable',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 expect(await page.locator('.journey-sticky').evaluate(el=>getComputedStyle(el).position)).not.toBe('sticky');
 await page.getByRole('tab',{name:/A relationship, continued/}).click();await expect(page.locator('#journey-panel')).toHaveAttribute('data-scene','2');
 expect(await page.locator('.wilson-avatar').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
});
test('ecosystem selection highlights the matching connection and opens the right module',async({page})=>{
 await page.goto('/');await page.getByRole('tab',{name:/Stock Management/}).click();
 await expect(page.locator('.ecosystem-spoke.active')).toHaveAttribute('data-connection','2');
 await expect(page.locator('#product-panel h3')).toHaveText('Stock Management');
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
 await page.setViewportSize({width:360,height:800});
 await expect(page.locator('header .brand-logo')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
