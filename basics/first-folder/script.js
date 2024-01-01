import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl')

console.log(THREE);

const sizes = {
    width: 800,
    height: 600
}

const scene = new THREE.Scene();

const object = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 'red'});

const mesh = new THREE.Mesh(object, material);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera)