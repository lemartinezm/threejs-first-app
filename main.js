import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  const fov = 45;
  const aspect = canvas.clientWidth / canvas.clientHeight; // the canvas default
  const near = 1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 5;
  camera.position.y = 5;
  camera.position.x = 0;

  const scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.y = 10;
  light.position.z = 10;
  light.position.x = 2;
  scene.add(light);

  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.autoRotate = true;

  const loader = new GLTFLoader();
  loader.load(
    "models/reyna/scene.gltf",
    (gltf) => {
      const model = gltf.scene;
      console.log(gltf);
      model.position.set(0, 1, 0);
      model.scale.set(1.25, 1.25, 1.25);
      model.rotateY(-Math.PI / 2);
      scene.add(model);
      renderer.render(scene, camera);
    },
    () => {
      console.log("loading");
    },
    (err) => {
      console.error(err);
    }
  );

  loader.load(
    "models/neon/scene.gltf",
    (gltf) => {
      const model = gltf.scene;
      console.log(gltf);
      model.position.set(-2, 1, 0);
      // model.rotateY(Math.PI / 2);
      scene.add(model);
      renderer.render(scene, camera);
    },
    () => {
      console.log("loading");
    },
    (err) => {
      console.error(err);
    }
  );

  loader.load(
    "models/sage/scene.gltf",
    (gltf) => {
      const model = gltf.scene;
      console.log(gltf);
      model.position.set(2, 1.5, 0);
      // model.rotateY(Math.PI / 2);
      model.scale.set(1.5, 1.5, 1.5);
      scene.add(model);
      renderer.render(scene, camera);
    },
    () => {
      console.log("loading");
    },
    (err) => {
      console.error(err);
    }
  );

  loader.load(
    "models/bind/scene.gltf",
    (gltf) => {
      const model = gltf.scene;
      console.log(gltf);
      model.position.set(-100, 0, -15);
      // model.rotateY(Math.PI / 2);
      scene.add(model);
      renderer.render(scene, camera);
    },
    () => {
      console.log("loading");
    },
    (err) => {
      console.error(err);
    }
  );
  renderer.render(scene, camera);
  resizeRendererToDisplaySize(renderer);
  animate();

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
}

main();
