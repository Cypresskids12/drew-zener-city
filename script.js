import * as THREE from 'three'
import { Shape } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

camera.position.z = 25
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const geometry = new THREE.TorusGeometry(3, 1, 10, 10);
const material = new THREE.MeshBasicMaterial({color: 0xcc3366})
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

const geometry1 = new THREE.BoxGeometry(4, 4, 4);
const material1 = new THREE.MeshBasicMaterial({color: 0xcc3366})
const box1 = new THREE.Mesh(geometry1, material1);
scene.add(box1);

const geometry2 = new THREE.SphereGeometry(4, 10, 10);
const material2 = new THREE.MeshBasicMaterial({color: 0xcc3366})
const ball2 = new THREE.Mesh(geometry2, material2);
scene.add(ball2);

const geometry3 = new THREE.CapsuleGeometry(4, 10, 10);
const material3 = new THREE.MeshBasicMaterial({color: 0xcc3366})
const capsule3 = new THREE.Mesh(geometry3, material3);
scene.add(ball2);

shape.position.x = -5
box1.position.x = 5
ball2.position.x = -15

function animate(){
    requestAnimationFrame( animate )

    shape.rotation.x += 0.04
    shape.rotation.y += 0.04
    box1.rotation.x += 0.04
    box1.rotation.y += 0.04
    ball2.rotation.x += 0.04
    ball2.rotation.y += 0.04

    renderer.render(scene,camera);
}
animate();