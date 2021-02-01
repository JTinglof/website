(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "tjUo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Womt");



const scene = new three__WEBPACK_IMPORTED_MODULE_0__[/* Scene */ "e"]();
const camera = new three__WEBPACK_IMPORTED_MODULE_0__[/* PerspectiveCamera */ "d"](
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new three__WEBPACK_IMPORTED_MODULE_0__[/* WebGLRenderer */ "f"]();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new three__WEBPACK_IMPORTED_MODULE_0__[/* BoxGeometry */ "a"]();
const material = new three__WEBPACK_IMPORTED_MODULE_0__[/* MeshBasicMaterial */ "c"]({ color: 0x00ff00 });
const cube = new three__WEBPACK_IMPORTED_MODULE_0__[/* Mesh */ "b"](geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


/***/ })

},[["tjUo",2,1]]]);
//# sourceMappingURL=app.083ebbd5759efad29357.js.map