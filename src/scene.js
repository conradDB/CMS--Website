import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';

// All geometry and studio lighting are generated locally. No model, CDN or API requests.
const root=document.documentElement,canvas=document.querySelector('#scene-canvas');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{root.dataset.renderMode='static';}
if(renderer){
 root.dataset.renderMode='webgl';
 const gl=renderer.getContext(),debug=gl.getExtension('WEBGL_debug_renderer_info');
 const software=debug&&/SwiftShader|llvmpipe|Software/i.test(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL));
 renderer.setPixelRatio(software?.7:Math.min(devicePixelRatio,1.4));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(35,innerWidth/innerHeight,.1,100);camera.position.z=12;
 const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();scene.environment=pmrem.fromScene(room,.04).texture;room.dispose();pmrem.dispose();
 const key=new THREE.DirectionalLight(0xffffff,4);key.position.set(-3,4,6);scene.add(key);const rim=new THREE.DirectionalLight(0x8fabff,3);rim.position.set(4,-1,3);scene.add(rim);
 scene.add(new THREE.AmbientLight(0xffffff,.65));
 const chrome=new THREE.MeshPhysicalMaterial({color:0xc6ced9,metalness:1,roughness:.19,clearcoat:1,clearcoatRoughness:.16});
 const darkMetal=new THREE.MeshStandardMaterial({color:0x222c40,metalness:.95,roughness:.27});
 const blue=new THREE.MeshPhysicalMaterial({color:0x314bba,metalness:.62,roughness:.2,clearcoat:1});
 const pale=new THREE.MeshPhysicalMaterial({color:0xdde5f4,metalness:.9,roughness:.13,clearcoat:1});
 const accent=new THREE.MeshStandardMaterial({color:0x799bea,metalness:.65,roughness:.24});
 const core=new THREE.Group(),assembly=new THREE.Group();core.add(assembly);scene.add(core);
 function mesh(geometry,material,parent=assembly){const m=new THREE.Mesh(geometry,material);parent.add(m);return m;}
 function ring(radius,tube,z,material){const m=mesh(new THREE.TorusGeometry(radius,tube,16,100),material);m.position.z=z;return m;}
 ring(1.48,.085,0,chrome);ring(1.35,.045,.09,pale);ring(1.48,.065,-.22,darkMetal);ring(1.48,.026,.1,accent);
 // Annular machined rim with a real hole, rather than a solid disc.
 const profile=[new THREE.Vector2(1.29,-.11),new THREE.Vector2(1.43,-.11),new THREE.Vector2(1.43,.09),new THREE.Vector2(1.29,.09),new THREE.Vector2(1.29,-.11)];
 const annulus=mesh(new THREE.LatheGeometry(profile,100),chrome);annulus.rotation.x=Math.PI/2;
 const spokes=[];
 for(let i=0;i<9;i++){
  const a=i*Math.PI*2/9;const arm=new THREE.Group();arm.rotation.z=a;assembly.add(arm);
  const spoke=new THREE.Mesh(new RoundedBoxGeometry(.19,.91,.18,3,.045),chrome);spoke.position.set(.04,.91,0);spoke.rotation.z=-.17;arm.add(spoke);
  const inset=new THREE.Mesh(new THREE.BoxGeometry(.045,.69,.025),blue);inset.position.set(.04,.92,.103);inset.rotation.z=-.17;arm.add(inset);
  const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.046,.046,.035,12),darkMetal);bolt.rotation.x=Math.PI/2;bolt.position.set(0,1.38,.15);arm.add(bolt);spokes.push(arm);
 }
 const ticks=new THREE.InstancedMesh(new THREE.BoxGeometry(.014,.045,.015),darkMetal,72),tickPose=new THREE.Object3D();assembly.add(ticks);
 for(let i=0;i<72;i++){const a=i*Math.PI*2/72;tickPose.position.set(Math.sin(a)*1.41,Math.cos(a)*1.41,.12);tickPose.rotation.z=-a;tickPose.scale.y=i%8===0?2:1;tickPose.updateMatrix();ticks.setMatrixAt(i,tickPose.matrix);}
 const hub=mesh(new THREE.CylinderGeometry(.59,.63,.3,80),chrome);hub.rotation.x=Math.PI/2;hub.position.z=.04;
 ring(.57,.035,.22,pale);ring(.47,.035,.25,darkMetal);
 const cap=mesh(new THREE.SphereGeometry(.47,48,32),blue);cap.scale.z=.34;cap.position.z=.23;
 const center=mesh(new THREE.TorusGeometry(.18,.017,12,50),pale);center.position.z=.39;
 // A separate connected assembly opens around the central editorial statement.
 const network=new THREE.Group();scene.add(network);
 const positions=[[-3.5,1.75,-.2],[-2.15,2.3,.3],[.2,2.15,-.5],[2.45,2,.1],[3.65,.6,-.2],[3.15,-1.65,.25],[1.15,-2.15,-.4],[-1.1,-2.05,.2],[-3.4,-1.3,-.25],[-4,.2,.1]];
 const balls=[];
 positions.forEach((p,i)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(i%3===0?.42:.25,32,24),i%3===1?blue:chrome);m.position.set(...p);network.add(m);balls.push(m);});
 const links=[];
 function link(a,b){const rod=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,1,10),chrome);network.add(rod);links.push({rod,a,b});}
 positions.forEach((_,i)=>link(i,(i+1)%positions.length));link(0,2);link(3,5);link(5,7);link(7,9);
 function connect(){for(const {rod,a,b} of links){const start=balls[a].position,end=balls[b].position,delta=end.clone().sub(start);rod.position.copy(start).add(end).multiplyScalar(.5);rod.scale.y=delta.length();rod.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());}}
 connect();
 const anchors=[...document.querySelectorAll('[data-core]')];let graphicsAvailable=true,frames=[],dirty=true,lastTime=0,elapsed=0,raf=0,pointerX=0,pointerY=0,selected=0,journey=0;
 const reduce=()=>root.dataset.motion==='reduce';
 const covered=()=>!!document.querySelector('dialog[open]')||!document.querySelector('#wilson-chat').hidden;
 const rotations={hero:[.48,-.58,-.4],connection:[.16,.12,.18],solutions:[.45,-.3,-.15],journey:[.2,.55,.3],network:[.3,.1,.1],wilson:[-.25,-.25,.3],contact:[.7,-.6,.3]};
 function measure(){
  renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
  frames=[];
  for(const el of anchors){
   const rect=el.getBoundingClientRect(),name=el.dataset.core,section=el.closest('section');
   const x=rect.left+rect.width/2,docY=rect.top+scrollY+rect.height/2,diameter=rect.width*Number(innerWidth<=760&&el.dataset.sizeMobile?el.dataset.sizeMobile:el.dataset.size),header=innerWidth<=760?70:88;
   if(name==='hero'){frames.push({at:0,x,y:docY,d:diameter,name});continue;}
   if(name==='connection'){
    const pin=section.querySelector('.connection-pin'),at=section.offsetTop-header,y=Math.max(175,innerHeight*.24),d=Math.min(260,innerWidth*.5);
    frames.push({at,x:innerWidth/2,y,d,name});
    if(!reduce()){const end=at+Math.max(0,section.offsetHeight-pin.offsetHeight);frames.push({at:end,x:innerWidth/2,y,d,name});frames.push({at:end+innerHeight*.35,x:innerWidth/2,y:100,d:0,name});}
    continue;
   }
   const at=section.offsetTop-header;
   frames.push({at:at-100,x,y:docY-at+100,d:0,name});
   frames.push({at,x,y:docY-at,d:diameter,name});
   const end=Math.max(at+1,docY-innerHeight*.3);
   frames.push({at:end,x,y:docY-end,d:diameter,name});
   const exit=Math.max(end+1,Math.min(section.offsetTop+section.offsetHeight-header,docY+diameter*.3-header));
   frames.push({at:exit,x,y:docY-exit,d:0,name});
  }
  // Let the sculptural object leave the page while visitors read company facts and integrations.
  for(const selector of ['#about','.integrations-section']){
   const sec=document.querySelector(selector),at=sec.offsetTop-(innerWidth<=760?70:88);
   frames.push({at,x:innerWidth*.85,y:-200,d:0,name:'journey'});
   frames.push({at:at+sec.offsetHeight-innerHeight*.3,x:innerWidth*.85,y:innerHeight+200,d:0,name:'journey'});
  }
  frames.sort((a,b)=>a.at-b.at);dirty=true;wake();
 }
 function pose(){let a=frames[0],b=a;for(let i=0;i<frames.length-1;i++){if(scrollY>=frames[i].at){a=frames[i];b=frames[i+1];}}if(scrollY>=frames.at(-1).at)a=b=frames.at(-1);
  const t=a===b?0:THREE.MathUtils.clamp((scrollY-a.at)/(b.at-a.at),0,1);const s=t*t*(3-2*t),lerp=(v,w)=>THREE.MathUtils.lerp(v,w,s);return {x:lerp(a.x,b.x),y:lerp(a.y,b.y),d:lerp(a.d,b.d),rx:lerp(rotations[a.name][0],rotations[b.name][0]),ry:lerp(rotations[a.name][1],rotations[b.name][1]),rz:lerp(rotations[a.name][2],rotations[b.name][2]),net:lerp(a.name==='network'?1:0,b.name==='network'?1:0),name:s<.5?a.name:b.name};
 }
 function render(time){raf=0;if(document.hidden||!graphicsAvailable)return;if(time-lastTime<32&&!dirty){wake();return;}const delta=Math.min((time-lastTime)/1000,.05);lastTime=time;if(!reduce()&&!covered())elapsed+=delta;
  if(!frames.length)return;const p=pose();const unit=2*Math.tan(THREE.MathUtils.degToRad(35/2))*12/innerHeight;
  core.position.set((p.x-innerWidth/2)*unit,(innerHeight/2-p.y)*unit,0);
  core.rotation.set(p.rx+(reduce()?0:Math.sin(elapsed*.27)*.06+pointerY*.035),p.ry+(reduce()?0:Math.cos(elapsed*.3)*.1+pointerX*.045),p.rz+(reduce()?0:elapsed*.085)+selected*.09+journey*.14);
  core.scale.setScalar(p.d*unit/3.2*Math.max(.001,1-p.net));core.visible=p.d>1&&p.net<.995;
  // The network occupies the edges, retaining a calm space for the words.
  network.position.copy(core.position);const mobile=innerWidth<=760;network.scale.setScalar(p.d*unit/8*p.net);network.rotation.z=reduce()?0:Math.sin(elapsed*.11)*.045;network.rotation.y=reduce()?0:Math.sin(elapsed*.15)*.08;network.visible=p.d>1&&p.net>.005;
  if(network.visible){balls.forEach((ball,i)=>{ball.position.x=positions[i][0]*(mobile?1.5:1);ball.position.y=positions[i][1]*(mobile?2.4:1)+(reduce()?0:Math.sin(elapsed*.45+i)*.08);});connect();}
  const opening=p.name==='connection'?.04+Math.sin(elapsed*.4)*.025:0;spokes.forEach((arm,i)=>{arm.position.set(Math.sin(-i*Math.PI*2/9)*opening,Math.cos(i*Math.PI*2/9)*opening,0);});
  canvas.dataset.scene=p.name;canvas.dataset.pose=[p.x,p.y,p.d,p.rz].map(n=>n.toFixed(1)).join(',');canvas.dataset.motion=reduce()?'paused':'playing';
  renderer.render(scene,camera);dirty=false;
  if(!reduce()&&!covered()&&(core.visible||network.visible))wake();
 }
 function wake(){if(!raf&&!document.hidden&&graphicsAvailable)raf=requestAnimationFrame(render);}
 addEventListener('scroll',()=>{dirty=true;wake();},{passive:true});addEventListener('resize',measure);addEventListener('pointermove',e=>{if(e.pointerType==='mouse'){pointerX=e.clientX/innerWidth-.5;pointerY=e.clientY/innerHeight-.5;}},{passive:true});
 document.addEventListener('cms:product',e=>{selected=e.detail.index;dirty=true;wake();});document.addEventListener('cms:journey',e=>{journey=e.detail.index;dirty=true;wake();});document.addEventListener('cms:motion',measure);
 new MutationObserver(()=>{dirty=true;wake();}).observe(root,{attributes:true,attributeFilter:['data-theme']});
 const overlayObserver=new MutationObserver(()=>{dirty=true;wake();});
 document.querySelectorAll('dialog,#wilson-chat').forEach(el=>overlayObserver.observe(el,{attributes:true,attributeFilter:['open','hidden']}));
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else{lastTime=performance.now();dirty=true;wake();}});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();graphicsAvailable=false;cancelAnimationFrame(raf);raf=0;root.dataset.renderMode='static';});
 canvas.addEventListener('webglcontextrestored',()=>{graphicsAvailable=true;root.dataset.renderMode='webgl';measure();});
 document.fonts.ready.then(measure);measure();
}
