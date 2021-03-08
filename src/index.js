import './style.scss';
import * as THREE from 'three';

function getRandomArbitrary() {
  return Math.random() * (10 - 2) + 2;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0xcce0ff);

// lights
const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const intensity = 1;
const hemlight = new THREE.HemisphereLight(skyColor, groundColor, intensity);

scene.add(hemlight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(15, 30, 30);
light.target.position.set(-10, 0, 0);
light.castShadow = true;
scene.add(light);

const helper = new THREE.DirectionalLightHelper(light);
scene.add(helper);

// ground
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });

const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(20000, 20000),
  groundMaterial
);
mesh.position.y = 0;
mesh.rotation.x = -Math.PI / 2;
mesh.receiveShadow = true;
scene.add(mesh);

// left row of buildings
var i;
const material = new THREE.MeshPhongMaterial({ color: '#8AC' });
for (i = 0; i < 5; i++) {
  const geometry = new THREE.BoxGeometry(1, getRandomArbitrary(), 1);
  const cube = new THREE.Mesh(geometry, material);
  cube.position.y = 0;
  cube.position.x = -3;
  cube.position.z = -i * 2;
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);
}

for (i = 0; i < 5; i++) {
  const geometry = new THREE.BoxGeometry(1, getRandomArbitrary(), 1);
  const cube = new THREE.Mesh(geometry, material);
  cube.position.y = 0;
  cube.position.x = 3;
  cube.position.z = -i * 2;
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}
animate();
