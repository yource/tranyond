import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
const width = window.innerWidth;
const height = window.innerHeight;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var obj;
var scene = new THREE.Scene();
var point = new THREE.PointLight(0xffffff, 0.5);
point.position.set(2000, 2000, 2000);
scene.add(point);
var point2 = new THREE.PointLight(0xffffff, 0.5);
point2.position.set(-2000, 2000, 2000);
scene.add(point2);
var point3 = new THREE.PointLight(0xffffff);
point3.position.set(2000, -2000, 2000);

var k = width / height;
var s = 50;
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, -2000, 2000);
camera.position.set(0, 200, 100);
camera.lookAt(scene.position);

const controls = new OrbitControls( camera, renderer.domElement );
function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}

const loader = new OBJLoader();
loader.load('./dsf.obj',function(object) {
	obj = object;
	obj.scale.set(20, 20, 20);
	obj.children[0].geometry.center();
	// obj.children[0].scale.set(2000,2000,2000);//网格模型缩放
	// obj.children[0].geometry.center();//网格模型的几何体居中
	// obj.children[0].material.color.set(0xff0000);//设置材质颜色
	scene.add(object);
	animate()
});