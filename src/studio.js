import * as THREE from 'three';
// A dark photographic studio with long softboxes gives polished metal contrast.
export function createStudio(renderer){
 const studio=new THREE.Scene();studio.background=new THREE.Color(0x070a10);
 const panels=[{size:[3,8],pos:[-5,3,4],color:[4,4.3,5]},{size:[1.8,7],pos:[5,1,3],color:[2.4,3.2,4.6]},{size:[7,2],pos:[0,6,1],color:[3.6,3.6,3.8]},{size:[4,1.2],pos:[0,-4,4],color:[1.8,1.7,1.45]},{size:[2,5],pos:[-3,0,-4],color:[1.2,1.4,2]}];
 for(const p of panels){const plane=new THREE.Mesh(new THREE.PlaneGeometry(...p.size),new THREE.MeshBasicMaterial({color:new THREE.Color(...p.color),side:THREE.DoubleSide}));plane.position.set(...p.pos);plane.lookAt(0,0,0);studio.add(plane);}
 const pmrem=new THREE.PMREMGenerator(renderer),texture=pmrem.fromScene(studio,.035).texture;pmrem.dispose();studio.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});return texture;
}
