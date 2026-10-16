import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export function createWatch({dialColor='#091c38',gold=false}={}){
 const watch=new THREE.Group(),body=new THREE.Group(),dial=new THREE.Group(),bezel=new THREE.Group(),crystal=new THREE.Group(),movement=new THREE.Group();
 watch.add(body,movement,dial,bezel,crystal);movement.position.z=-.16;
 const steel=new THREE.MeshPhysicalMaterial({color:gold?0xb89c65:0xaab3c2,metalness:1,roughness:.24,clearcoat:.7,clearcoatRoughness:.22});
 const polished=new THREE.MeshPhysicalMaterial({color:gold?0xe6c68a:0xe6ebf4,metalness:1,roughness:.12,clearcoat:1});
 const brushed=new THREE.MeshStandardMaterial({color:gold?0x9f824f:0x7d899c,metalness:1,roughness:.4});
 const dark=new THREE.MeshStandardMaterial({color:0x0b1525,metalness:.8,roughness:.23});
 const ceramic=new THREE.MeshPhysicalMaterial({color:new THREE.Color(dialColor),metalness:.4,roughness:.18,clearcoat:1});
 const lume=new THREE.MeshStandardMaterial({color:0xe9e9db,roughness:.35,emissive:0xb6cfce,emissiveIntensity:.05});
 const brass=new THREE.MeshStandardMaterial({color:0xb59b62,metalness:.9,roughness:.3});
 const ruby=new THREE.MeshPhysicalMaterial({color:0x771b3d,metalness:.4,roughness:.15,clearcoat:1});
 function add(g,mat,parent,pos=[0,0,0]){const m=new THREE.Mesh(g,mat);m.position.set(...pos);parent.add(m);return m;}
 function cylinder(r,h,mat,parent,z=0,r2=r){const m=add(new THREE.CylinderGeometry(r,r2,h,96),mat,parent,[0,0,z]);m.rotation.x=Math.PI/2;return m;}
 function ring(r,t,mat,parent,z=0){return add(new THREE.TorusGeometry(r,t,14,100),mat,parent,[0,0,z]);}
 function washer(inner,outer,thick,mat,parent,z=0){const p=[new THREE.Vector2(inner,-thick/2),new THREE.Vector2(outer,-thick/2),new THREE.Vector2(outer,thick/2),new THREE.Vector2(inner,thick/2),new THREE.Vector2(inner,-thick/2)];const m=add(new THREE.LatheGeometry(p,96),mat,parent,[0,0,z]);m.rotation.x=Math.PI/2;return m;}
 // Layered case, open at the front so the movement remains visible when the dial lifts.
 washer(1.19,1.53,.37,steel,body,-.15);ring(1.49,.065,polished,body,.04);cylinder(1.44,.08,brushed,body,-.39);ring(1.4,.035,polished,body,-.44);
 // Four sculpted lugs and an articulated, three-link bracelet.
 for(const side of [-1,1])for(const x of [-.92,.92]){const lug=add(new RoundedBoxGeometry(.28,.76,.30,3,.09),steel,body,[x,side*1.43,-.14]);lug.rotation.x=side*-.2;lug.rotation.z=-Math.sign(x)*side*.12;}
 const linkGeometry=new RoundedBoxGeometry(.55,.36,.2,3,.065),centerGeometry=new RoundedBoxGeometry(.68,.39,.23,3,.065);
 for(const side of [-1,1])for(let i=0;i<9;i++){
  const a=i*.19;const y=side*(1.7+Math.sin(a)*2.0),z=-.2-(1-Math.cos(a))*2.0;
  for(const x of [-.65,0,.65]){const link=add(x===0?centerGeometry:linkGeometry,x===0?polished:brushed,body,[x,y,z]);link.rotation.x=-side*a;}
 }
 // Fluted crown and guards.
 const crown=add(new THREE.CylinderGeometry(.23,.23,.30,40),polished,body,[1.67,0,-.10]);crown.rotation.z=Math.PI/2;
 for(let i=0;i<24;i++){const a=i/24*Math.PI*2;const ridge=add(new THREE.BoxGeometry(.29,.027,.028),brushed,body,[1.67,Math.cos(a)*.225,Math.sin(a)*.225-.1]);ridge.rotation.x=a;}
 for(const y of [-.34,.34])add(new RoundedBoxGeometry(.28,.20,.30,2,.06),steel,body,[1.47,y,-.12]);
 // A ceramic bezel with machined teeth and engraved-style scale.
 washer(1.18,1.53,.16,polished,bezel,.19);washer(1.24,1.48,.055,ceramic,bezel,.295);ring(1.51,.025,steel,bezel,.29);
 const teeth=new THREE.InstancedMesh(new THREE.BoxGeometry(.045,.075,.15),brushed,72),tmp=new THREE.Object3D();bezel.add(teeth);
 for(let i=0;i<72;i++){const a=i/72*Math.PI*2;tmp.position.set(Math.sin(a)*1.52,Math.cos(a)*1.52,.18);tmp.rotation.z=-a;tmp.updateMatrix();teeth.setMatrixAt(i,tmp.matrix);}
 const bezelCanvas=document.createElement('canvas');bezelCanvas.width=bezelCanvas.height=1024;const bc=bezelCanvas.getContext('2d');bc.translate(512,512);bc.fillStyle='#e7e5d8';bc.strokeStyle='#e7e5d8';bc.textAlign='center';bc.textBaseline='middle';bc.font='500 40px Arial';
 for(let i=0;i<60;i++){const a=i/60*Math.PI*2;bc.save();bc.rotate(a);if(i%10===0&&i!==0)bc.fillText(String(i),0,-450);else if(i%5===0){bc.fillRect(-5,-475,10,39);}else if(i<15){bc.fillRect(-2,-474,4,17);}bc.restore();}
 bc.beginPath();bc.moveTo(0,-423);bc.lineTo(-23,-477);bc.lineTo(23,-477);bc.closePath();bc.fill();
 const bezelTexture=new THREE.CanvasTexture(bezelCanvas);bezelTexture.colorSpace=THREE.SRGBColorSpace;add(new THREE.PlaneGeometry(3.02,3.02),new THREE.MeshBasicMaterial({map:bezelTexture,transparent:true,depthWrite:false}),bezel,[0,0,.328]);
 // Sunburst dial. The texture is original procedural artwork, not a branded product photograph.
 const c=document.createElement('canvas');c.width=c.height=1024;const ctx=c.getContext('2d');ctx.fillStyle=dialColor;ctx.fillRect(0,0,1024,1024);ctx.translate(512,512);
 for(let i=0;i<950;i++){const a=i/950*Math.PI*2;ctx.strokeStyle=`rgba(195,215,250,${.012+Math.sin(i*17.3)**2*.035})`;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.sin(a)*512,Math.cos(a)*512);ctx.stroke();}
 const grad=ctx.createRadialGradient(-130,-180,0,0,0,600);grad.addColorStop(0,'rgba(113,149,205,.2)');grad.addColorStop(1,'rgba(0,0,0,.65)');ctx.fillStyle=grad;ctx.fillRect(-512,-512,1024,1024);
 ctx.textAlign='center';ctx.fillStyle='#d7dcd8';ctx.font='16px Arial';ctx.fillText('H O R O L O G Y',0,-180);ctx.font='14px Arial';ctx.fillText('M E C H A N I C A L',0,200);ctx.font='11px Arial';ctx.fillText('D E S I G N   S T U D Y',0,226);
 for(let i=0;i<60;i++){ctx.save();ctx.rotate(i/60*Math.PI*2);ctx.fillStyle='#c1c8c7';ctx.fillRect(i%5===0?-3:-1.5,-464,i%5===0?6:3,i%5===0?30:15);ctx.restore();}
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
 cylinder(1.225,.045,dark,dial,.105);add(new THREE.CircleGeometry(1.215,96),new THREE.MeshStandardMaterial({map:texture,color:0x7b879c,metalness:.12,roughness:.45}),dial,[0,0,.135]);ring(1.225,.023,polished,dial,.15);
 const markerGeo=new RoundedBoxGeometry(.10,.25,.035,2,.02),markerInner=new RoundedBoxGeometry(.06,.19,.018,2,.015);
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2;const g=new THREE.Group();g.rotation.z=-a;g.position.set(Math.sin(a)*1.02,Math.cos(a)*1.02,.18);dial.add(g);if(i===0){for(const x of [-.055,.055]){add(markerGeo,polished,g,[x,0,0]);add(markerInner,lume,g,[x,0,.025]);}}else if(i===3){const dateCanvas=document.createElement('canvas');dateCanvas.width=128;dateCanvas.height=80;const dc=dateCanvas.getContext('2d');dc.fillStyle='#e5e4d6';dc.fillRect(0,0,128,80);dc.fillStyle='#15202b';dc.font='52px Arial';dc.textAlign='center';dc.textBaseline='middle';dc.fillText('15',64,42);const dateTexture=new THREE.CanvasTexture(dateCanvas);dateTexture.colorSpace=THREE.SRGBColorSpace;add(new THREE.BoxGeometry(.25,.18,.025),polished,dial,[1.02,0,.19]);add(new THREE.PlaneGeometry(.21,.13),new THREE.MeshBasicMaterial({map:dateTexture}),dial,[1.02,0,.21]);}else{add(markerGeo,polished,g);add(markerInner,lume,g,[0,0,.025]);}}
 function hand(length,width,angle,z){const g=new THREE.Group();g.rotation.z=angle;g.position.z=z;dial.add(g);const shape=new THREE.Shape();shape.moveTo(-width/2,-.13);shape.lineTo(-width/2,length*.78);shape.lineTo(0,length);shape.lineTo(width/2,length*.78);shape.lineTo(width/2,-.13);shape.closePath();add(new THREE.ExtrudeGeometry(shape,{depth:.025,bevelEnabled:true,bevelSize:.01,bevelThickness:.008,bevelSegments:1,steps:1}),polished,g);const inlay=add(new THREE.BoxGeometry(width*.45,length*.63,.015),lume,g,[0,length*.4,.04]);return g;}
 hand(.70,.095,Math.PI*.34,.23);hand(.99,.067,-Math.PI*.34,.275);const seconds=new THREE.Group();seconds.position.z=.34;dial.add(seconds);add(new THREE.BoxGeometry(.018,1.28,.012),polished,seconds,[0,.39,0]);add(new THREE.CircleGeometry(.045,20),lume,seconds,[0,.73,.015]);cylinder(.075,.04,polished,dial,.37);
 // Light reflection on the sapphire-like cover; no costly transmission pass.
 const glass=new THREE.MeshPhysicalMaterial({color:0xa9c8ff,metalness:.05,roughness:.06,transparent:true,opacity:.055,depthWrite:false,side:THREE.DoubleSide});cylinder(1.22,.025,glass,crystal,.43);ring(1.22,.012,polished,crystal,.43);
 // Exposed mechanical assembly with original gear geometry and bridges.
 cylinder(1.18,.05,brushed,movement,-.07);
 const gears=[];
 function gear(x,y,r,teethN){const g=new THREE.Group();g.position.set(x,y,.0);movement.add(g);const s=new THREE.Shape();for(let i=0;i<teethN*4;i++){const a=i/(teethN*4)*Math.PI*2,rr=(i%4===1||i%4===2)?r:r*.89;const xx=Math.cos(a)*rr,yy=Math.sin(a)*rr;i?s.lineTo(xx,yy):s.moveTo(xx,yy);}s.closePath();const hole=new THREE.Path();hole.absarc(0,0,r*.6,0,Math.PI*2,true);s.holes.push(hole);add(new THREE.ExtrudeGeometry(s,{depth:.045,bevelEnabled:false}),brass,g);for(let i=0;i<6;i++){const a=i*Math.PI/3;const spoke=add(new THREE.BoxGeometry(r*1.38,.035,.025),brass,g);spoke.rotation.z=a;}cylinder(r*.21,.045,polished,g,.035);cylinder(.025,.015,ruby,g,.065);gears.push(g);}
 gear(-.43,.43,.45,35);gear(.47,.42,.34,28);gear(.36,-.46,.49,38);gear(-.53,-.48,.30,25);gear(0,0,.24,22);
 for(let i=0;i<11;i++){const a=i/11*Math.PI*2;gear(Math.cos(a)*.94,Math.sin(a)*.94,.085+(i%3)*.025,16+i%3*3);}
 // Concentric balance-wheel details and a fine spiral spring.
 const spring=new THREE.CurvePath();const points=[];for(let i=0;i<180;i++){const a=i/180*Math.PI*10,r=.02+i/180*.19;points.push(new THREE.Vector3(-.53+Math.cos(a)*r,-.48+Math.sin(a)*r,.13));}
 const springCurve=new THREE.CatmullRomCurve3(points);add(new THREE.TubeGeometry(springCurve,180,.006,4,false),polished,movement);
 for(const [x,y,a] of [[-.2,.78,.2],[-.45,-.16,-.45],[.70,-.05,.8]]){const bridge=add(new RoundedBoxGeometry(.7,.18,.035,3,.045),steel,movement,[x,y,.11]);bridge.rotation.z=a;}
 const screws=[];for(let i=0;i<10;i++){const a=i/10*Math.PI*2;const g=new THREE.Group();g.position.set(Math.sin(a)*1.08,Math.cos(a)*1.08,.14);movement.add(g);cylinder(.045,.035,polished,g);add(new THREE.BoxGeometry(.062,.009,.008),dark,g,[0,0,.025]);screws.push(g);}
 const base={dial:.0,bezel:.0,crystal:.0};
 function animate({explosion=0,time=0,reduced=false}={}){dial.position.set(-explosion*.15,explosion*.12,explosion*.75);bezel.position.set(-explosion*.10,explosion*.05,explosion*1.28);crystal.position.set(-explosion*.08,0,explosion*1.85);dial.rotation.z=explosion*.045;bezel.rotation.z=-explosion*.035;seconds.rotation.z=-time*.09;gears.forEach((g,i)=>g.rotation.z=(i%2?-1:1)*time*.025);screws.forEach((g,i)=>{g.position.z=.14+explosion*(.36+i*.08);});}
 function dispose(){const geometries=new Set(),materials=new Set(),textures=new Set();watch.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material){for(const m of [].concat(o.material)){materials.add(m);if(m.map)textures.add(m.map);}}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}
 return {watch,animate,dispose};
}
