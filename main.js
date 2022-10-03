import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight , 0.1, 1000);
camera.position.setZ(10)
const renderer = new THREE.WebGL1Renderer({canvas: document.querySelector('#background')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10)
scene.add(pointLight)

const geometry = new THREE.IcosahedronGeometry(5, 5);
const material = new THREE.MeshBasicMaterial({color: 0x00FFFF, wireframe: true});
const icosahedron = new THREE.Mesh(geometry, material);
icosahedron.position.setZ(10);
scene.add(icosahedron);

function scrollMove(){
  const currentView = document.body.getBoundingClientRect().top;
  camera.position.z = currentView * -0.1;
}
document.body.onscroll = scrollMove

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  icosahedron.rotateX(0.001);
  icosahedron.rotateZ(0.001)
}
animate()