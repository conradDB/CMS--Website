(() => {
 const root=document.documentElement;
 const reduced=()=>root.dataset.motion==='reduce';
 const motion=document.querySelector('.motion-control');
 function motionState(){const paused=reduced();motion.setAttribute('aria-label',paused?'Animations paused':'Pause animations');motion.setAttribute('aria-pressed',String(paused));motion.querySelector('.motion-control-label').textContent=paused?'Motion off':'Motion on';}
 motion.addEventListener('click',()=>document.querySelector('.motion-toggle').click());
 document.addEventListener('cms:motion',motionState);motionState();
 const section=document.querySelector('#connection'),pin=section.querySelector('.connection-pin');
 const statements=[['One opportunity.','Every possibility.','When your people, processes and information connect, your whole dealership moves forward.'],['One connected view.','A clearer next move.','From sales and stock to service and customer care. The right information brings every team together.'],['One shared direction.','More ways forward.','Nine connected solutions. Automotive expertise since 1999. Built around the way your business works.']];
 let active=-1,manual=false;
 function setStatement(i){if(i===active)return;active=i;pin.dataset.statement=String(i);document.querySelectorAll('.statement-line').forEach((el,j)=>{el.textContent=statements[i][j];if(!reduced())el.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)'});});document.querySelector('#connection-description').textContent=statements[i][2];document.querySelector('#connection-count').textContent=`0${i+1} — 03`;document.querySelectorAll('button[data-statement]').forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j));});section.style.setProperty('--ring-scale',String(1+i*.12));}
 setStatement(0);
 document.querySelectorAll('button[data-statement]').forEach(b=>b.addEventListener('click',()=>{manual=true;setStatement(Number(b.dataset.statement));}));
 let lastScroll=scrollY,queued=false;
 function scrollStory(){const delta=Math.abs(scrollY-lastScroll);lastScroll=scrollY;if(delta>8)manual=false;const top=section.offsetTop-(innerWidth<=760?70:88),travel=section.offsetHeight-pin.offsetHeight;const progress=Math.max(0,Math.min(.999,(scrollY-top)/Math.max(1,travel)));if(!manual&&!reduced()&&scrollY>top-60&&scrollY<top+travel+60)setStatement(Math.floor(progress*3));queued=false;}
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(scrollStory);}},{passive:true});addEventListener('resize',scrollStory);
 const groups={sales:{index:0,text:'Turn an enquiry into your next great relationship.'},operations:{index:2,text:'Keep your stock, workshop and people moving together.'},growth:{index:5,text:'See the whole picture. Find your next opportunity.'}};
 function showGroup(name){document.querySelectorAll('[data-group]').forEach(b=>{b.classList.toggle('active',b.dataset.group===name);b.setAttribute('aria-pressed',String(b.dataset.group===name));});document.querySelector('#category-description').textContent=groups[name].text;}
 document.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{showGroup(b.dataset.group);document.querySelector(`[data-product="${groups[b.dataset.group].index}"]`).click();}));
 document.addEventListener('cms:product',e=>{const i=e.detail.index;showGroup([0,1,4,6].includes(i)?'sales':[2,3,7].includes(i)?'operations':'growth');});
 const phrases=['It starts with<br>one connection.','The right match.<br>The next chapter.','Stay connected.<br>Long after delivery.','Every detail.<br>A clearer direction.'];
 document.addEventListener('cms:journey',e=>{const i=e.detail.index;document.querySelector('#journey-panel').dataset.scene=String(i);document.querySelector('#journey-numeral').textContent=`0${i+1}`;document.querySelector('#journey-phrase').innerHTML=phrases[i];if(!reduced())document.querySelector('#journey-screen').animate([{opacity:.2,transform:'translateY(15px)'},{opacity:1,transform:'none'}],{duration:450,easing:'ease-out'});});
 // Animate editorial rules and paragraphs only once, leaving reading and focus unaffected.
 const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;reveal.unobserve(e.target);if(!reduced())e.target.animate([{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'translateY(0)'}],{duration:900,easing:'cubic-bezier(.2,.8,.2,1)'});}),{threshold:.15});
 document.querySelectorAll('.section-label,.section-heading,.about-heading,.facts,.partner-names,.wilson-copy,.contact-copy').forEach(el=>reveal.observe(el));
})();
