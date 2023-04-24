import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const affichage = document.getElementById("canvabc")
	// Initiate function or other initializations here
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, affichage.clientWidth/ affichage.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ canvas:canvabc });

const loader = new FBXLoader();

loader.load('AmmoBox.fbx', function (object)  {
  scene.add(object);
  animate()
},undefined, function(error){
	console.error(error);
});


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

window.onload = function() {
	animate();
  };


