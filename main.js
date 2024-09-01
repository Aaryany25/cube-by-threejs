import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//Initialize the scence
const scene = new THREE.Scene()
//Adds Objects to the scene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color:"red" } ); 
const sphere = new THREE.Mesh( geometry, material )
scene.add( sphere );
//initializes the camera
const camera = new THREE.PerspectiveCamera(35,window.innerWidth / window.innerHeight,0.1,300)
camera.position.z = 5;
//initializes the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth,window.innerHeight);
//Adds controls 
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true;
controls.autoRotate = true;
// controls.autoRotateSpeed = 25.0;

window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})
const renderloop=()=>{
 
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop)
}
renderloop()

