/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Advent+Pro:wght@200;400;500;600;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  overflow-x: hidden;\\n}\\n\\n.conteudo {\\n  display: none;\\n}\\n\\n.advent-pro {\\n  font-family: \\\"Advent Pro\\\", times !important;\\n}\\n\\n.open-sans {\\n  font-family: \\\"Open Sans\\\", times !important;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background: #000;\\n  position: sticky;\\n}\\n.header__logo {\\n  width: 50%;\\n  background: #C4C4C4;\\n  clip-path: polygon(0 0, 95% 0%, 100% 100%, 0% 100%);\\n  display: flex;\\n  justify-content: center;\\n}\\n.header__menu {\\n  width: 50%;\\n}\\n.header__menu ul {\\n  display: flex;\\n  list-style: none;\\n  grid-gap: 25px;\\n}\\n.header__menu ul li {\\n  padding: 15px 25px;\\n  border-radius: 40px;\\n  position: relative;\\n}\\n.header__menu ul li::after {\\n  position: absolute;\\n  width: 0;\\n  height: 2px;\\n  background: #FFF;\\n  content: \\\"\\\";\\n  bottom: 0;\\n  left: 0;\\n  transition: width ease 0.3s;\\n}\\n.header__menu ul li:hover::after {\\n  width: 100%;\\n}\\n.header__menu ul li:last-child {\\n  background: #FFF;\\n  transition: background ease 0.4s;\\n}\\n.header__menu ul li:last-child a {\\n  color: #000;\\n  text-transform: uppercase;\\n}\\n.header__menu ul li:last-child:hover {\\n  background: #000;\\n}\\n.header__menu ul li:last-child:hover a {\\n  color: #FFF;\\n}\\n.header__menu ul li a {\\n  color: #FFF;\\n  font-family: \\\"Montserrat\\\", times;\\n  font-size: 16px;\\n  text-decoration: none;\\n  font-weight: 700;\\n}\\n\\n.visible-xs-block {\\n  display: block;\\n}\\n@media screen and (min-width: 440px) {\\n  .visible-xs-block {\\n    display: none;\\n  }\\n}\\n\\n.hidden-xs-block {\\n  display: none;\\n}\\n@media screen and (min-width: 440px) {\\n  .hidden-xs-block {\\n    display: block;\\n  }\\n}\\n\\n.bg {\\n  display: flex;\\n  position: relative;\\n  background: #000;\\n}\\n.bg__image {\\n  width: 100%;\\n  position: relative;\\n  height: 100vh;\\n}\\n.bg__image img {\\n  position: absolute;\\n  right: 0;\\n  bottom: 0;\\n  max-width: 550px;\\n}\\n.bg__infos {\\n  background: #C4C4C4;\\n  height: 100%;\\n  width: 50%;\\n  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);\\n  position: absolute;\\n  top: 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n.bg__infos p,\\n.bg__infos h1,\\n.bg__infos span {\\n  font-family: \\\"Raleway\\\", times;\\n  padding-left: 80px;\\n}\\n.bg__infos p,\\n.bg__infos h1 {\\n  font-weight: 700;\\n}\\n.bg__infos p {\\n  font-size: 36px;\\n}\\n.bg__infos h1 {\\n  font-size: 72px;\\n  line-height: 150px;\\n}\\n.bg__infos span {\\n  font-size: 24px;\\n  font-weight: 900;\\n  color: #7C7C7C;\\n}\\n\\n.social-links {\\n  display: flex;\\n  align-items: center;\\n  margin: 0 auto;\\n  grid-gap: 15px;\\n  width: 50%;\\n  margin-top: 50px;\\n}\\n.social-links a {\\n  background: #C4C4C4;\\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\\n  padding: 10px;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.it_berries {\\n  background: #1D1D1D;\\n  color: #fff;\\n  padding: 50px 100px;\\n}\\n.it_berries h2 {\\n  font-family: \\\"Montserrat\\\";\\n  font-weight: 700;\\n  font-size: 28px;\\n  margin-bottom: 20px;\\n  color: #fff;\\n}\\n.it_berries p {\\n  font-size: 14px;\\n  font-weight: 500;\\n  font-family: \\\"Open Sans\\\";\\n  max-width: 1100px;\\n  line-height: 30px;\\n  margin-bottom: 20px;\\n}\\n.it_berries a {\\n  border-right: 1px solid #fff;\\n  border-left: 1px solid #fff;\\n  font-family: \\\"Montserrat\\\";\\n  font-size: 14px;\\n  font-weight: 600;\\n  text-decoration: none;\\n  color: #fff;\\n  text-transform: uppercase;\\n  padding: 10px;\\n}\\n\\n.about-me {\\n  padding: 100px 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.about-me__title {\\n  font-size: 28px;\\n  font-family: \\\"Montserrat\\\", times;\\n  font-weight: 700;\\n  border: 5px solid #000;\\n  padding: 15px 100px;\\n  text-transform: uppercase;\\n  margin-bottom: 25px;\\n}\\n.about-me p {\\n  font-size: 14px;\\n  font-weight: 500;\\n  font-family: \\\"Open Sans\\\";\\n  max-width: 720px;\\n  text-align: center;\\n}\\n@media screen and (max-width: 550px) {\\n  .about-me p {\\n    max-width: 320px;\\n  }\\n}\\n\\n.skills {\\n  padding: 100px 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.skills__title {\\n  font-size: 28px;\\n  font-family: \\\"Montserrat\\\", times;\\n  font-weight: 700;\\n  border: 5px solid #000;\\n  padding: 15px 100px;\\n  text-transform: uppercase;\\n  margin-bottom: 25px;\\n}\\n.skills p {\\n  font-size: 14px;\\n  font-weight: 500;\\n  font-family: \\\"Open Sans\\\";\\n  max-width: 420px;\\n  text-align: center;\\n}\\n.skills .skills-content {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 50px;\\n}\\n.skills .skills-content h3 {\\n  font-family: \\\"Montserrat\\\";\\n  font-size: 28px;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  margin-bottom: 25px;\\n}\\n.skills .skills-content__using, .skills .skills-content__learning {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  grid-gap: 40px 60px;\\n  margin-bottom: 50px;\\n}\\n.skills .skills-content__using .skill, .skills .skills-content__learning .skill {\\n  display: flex;\\n  flex-direction: column;\\n  grid-gap: 10px;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.skills .skills-content__using .skill span, .skills .skills-content__learning .skill span {\\n  font-family: \\\"Montserrat\\\";\\n  font-size: 20px;\\n}\\n\\n.shadow-inset {\\n  box-shadow: 0px 0px 230px rgba(26, 21, 21, 0.25) inset;\\n}\\n\\n.footer {\\n  background: #1A1A1A;\\n  color: #FFF;\\n  padding: 25px;\\n}\\n.footer__to-top {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-family: \\\"Montserrat\\\", times;\\n  font-weight: 700;\\n  font-family: 14px;\\n  letter-spacing: 0.19em;\\n  text-transform: uppercase;\\n  line-height: 35px;\\n  cursor: pointer;\\n}\\n.footer .social-links-footer {\\n  display: flex;\\n  grid-gap: 25px;\\n  justify-content: center;\\n  margin-top: 25px;\\n}\\n.footer span {\\n  font-family: \\\"Advent Pro\\\";\\n  font-size: 18px;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 25px;\\n}\\n.footer span strong {\\n  font-weight: 700;\\n}\\n\\n.form {\\n  padding: 100px 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.form__title {\\n  font-size: 28px;\\n  font-family: \\\"Montserrat\\\", times;\\n  font-weight: 700;\\n  border: 5px solid #000;\\n  padding: 15px 100px;\\n  text-transform: uppercase;\\n  margin-bottom: 25px;\\n}\\n.form__content {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n}\\n.form__content div {\\n  display: flex;\\n  flex-direction: column;\\n  position: relative;\\n  margin-bottom: 50px;\\n  border-left: 4px solid #000;\\n  border-bottom: 4px solid #000;\\n}\\n@media screen and (max-width: 440px) {\\n  .form__content div {\\n    max-width: 250px !important;\\n  }\\n}\\n.form__content div input {\\n  height: 50px;\\n}\\n.form__content div textarea {\\n  padding-top: 15px;\\n}\\n.form__content div input,\\n.form__content div textarea {\\n  border: none;\\n  position: relative;\\n  outline: none;\\n  overflow: visible;\\n  padding-left: 15px;\\n  background: transparent;\\n}\\n.form__content div input::placeholder,\\n.form__content div textarea::placeholder {\\n  position: absolute;\\n  top: 20px;\\n  left: 15px;\\n  color: #8B8B8B;\\n  font-family: \\\"Montserrat\\\";\\n  font-size: 14px;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  transition: top ease 0.3s;\\n}\\n.form__content div input:focus-visible::placeholder,\\n.form__content div textarea:focus-visible::placeholder {\\n  top: 0px;\\n}\\n\\n@media (max-width: 1440px) {\\n  .bg__infos p,\\n.bg__infos h1,\\n.bg__infos span {\\n    padding-left: 55px;\\n  }\\n  .bg__infos p {\\n    font-size: 32px;\\n  }\\n  .bg__infos h1 {\\n    font-size: 64px;\\n  }\\n  .bg__infos span {\\n    font-size: 20px;\\n  }\\n}\\n@media (max-width: 1025px) {\\n  .bg__image {\\n    display: flex;\\n    flex-direction: column-reverse;\\n  }\\n  .bg__infos {\\n    width: 100%;\\n    clip-path: unset;\\n  }\\n  .bg__image img {\\n    z-index: 99;\\n  }\\n}\\n@media (max-width: 800px) {\\n  .bg__image img {\\n    max-width: 400px;\\n  }\\n\\n  .skills .skills-content__using {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n  .skills .skills-content__learning {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n@media (max-width: 460px) {\\n  .form__content {\\n    width: 80%;\\n  }\\n\\n  .bg__image img {\\n    display: none;\\n  }\\n  .bg__infos h1 {\\n    line-height: 80px;\\n  }\\n\\n  .it_berries {\\n    padding: 50px 40px;\\n  }\\n\\n  .skills .skills-content {\\n    padding: 20px;\\n  }\\n  .skills .skills-content__using {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  .skills .skills-content__learning {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .bg__infos p,\\n.bg__infos h1,\\n.bg__infos span {\\n    padding-left: 25px;\\n  }\\n\\n  .about-me__title,\\n.skills__title,\\n.form__title {\\n    padding: 15px 50px;\\n  }\\n}\\n* {\\n  -o-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 14px;\\n  font-family: \\\"Oswald\\\", sans-serif;\\n  font-weight: 400;\\n}\\n\\n#Logo {\\n  position: fixed;\\n  top: 40px;\\n  right: 40px;\\n  width: 100px;\\n  height: 100px;\\n  display: block;\\n  z-index: 5000;\\n  background: #ffffff;\\n}\\n\\n#slider {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  color: #14151d;\\n  overflow: hidden;\\n}\\n\\n#slider .slide {\\n  overflow: hidden;\\n  z-index: 50;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  width: 0;\\n  height: 100%;\\n}\\n\\n#slider .slide:first-child {\\n  width: 100%;\\n}\\n\\n#slider .slide > div {\\n  width: 100vw;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/710995/transparent-noise.png);\\n}\\n\\n#slider .slide .vis {\\n  width: 100%;\\n  height: 100%;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  opacity: 0.7;\\n  mix-blend-mode: overlay;\\n}\\n\\n#slider .slide:not(:first-child) h1,\\n#slider .slide:not(:first-child) p,\\n#slider .slide:not(:first-child) a {\\n  display: none;\\n}\\n\\n#slcontent {\\n  width: 100%;\\n  height: 60%;\\n  display: table;\\n  z-index: 70;\\n  position: absolute;\\n  top: 20%;\\n  left: 0;\\n}\\n\\n#slcontent > div {\\n  display: table-row;\\n  transform: translateY(50px);\\n  opacity: 0;\\n}\\n\\n#slcontent > div > div {\\n  display: table-cell;\\n  vertical-align: middle;\\n}\\n\\n#slclient > div {\\n  padding-left: 27vw;\\n}\\n\\n#slprojet > div {\\n  padding-left: 15vw;\\n}\\n\\n#slcompteur {\\n  height: 130px;\\n  font-family: \\\"Oswald\\\", sans-serif;\\n  font-weight: 700;\\n}\\n\\n#slcompteur > div {\\n  padding-left: 15vw;\\n  display: block;\\n  position: absolute;\\n  height: 125px;\\n  overflow: hidden;\\n}\\n\\n#slcompteur b {\\n  color: #ffffff;\\n  opacity: 0.3;\\n  font-size: 200px;\\n  margin-top: -16px;\\n  line-height: 180px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n\\n#slcompteur b > span {\\n  display: inline-block;\\n  text-align: center;\\n  vertical-align: top;\\n  height: 150px;\\n  overflow: hidden;\\n}\\n\\n#slcompteur i {\\n  color: #ffffff;\\n  line-height: 20px;\\n  font-size: 20px;\\n  font-style: normal;\\n  display: inline-block;\\n  vertical-align: top;\\n}\\n\\n#sltype > div {\\n  padding-left: 40vw;\\n}\\n\\n#slother > div {\\n  padding-left: 20vw;\\n}\\n\\n#slider .line span {\\n  display: inline-block;\\n  position: relative;\\n  line-height: 18px;\\n  height: 18px;\\n  vertical-align: top;\\n}\\n\\n#slider .line .scroll {\\n  overflow: hidden;\\n  color: #ffffff;\\n}\\n\\n#slider .line > div > span:first-child:before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n  width: 20px;\\n  right: calc(100% + 4px);\\n  bottom: 4px;\\n  position: absolute;\\n  background: #14151d;\\n}\\n\\n#slider .line > div > span:first-child:after {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n  width: 100vw;\\n  right: calc(100% + 34px);\\n  bottom: 4px;\\n  background: #ffffff;\\n  position: absolute;\\n  opacity: 0.4;\\n}\\n\\n#more {\\n  display: block;\\n  font-weight: 100;\\n  font-family: arial;\\n  width: 40px;\\n  height: 40px;\\n  color: #ffffff;\\n  text-decoration: none;\\n  position: absolute;\\n  top: calc(50% - 20px);\\n  right: 30vw;\\n  transition: all 0.2s linear;\\n}\\n\\n#more i {\\n  display: block;\\n  position: absolute;\\n  background: #ffffff;\\n  transition: all 0.2s ease-out;\\n}\\n\\n#more i:nth-child(1) {\\n  width: 20px;\\n  height: 4px;\\n  top: calc(50% - 2px);\\n}\\n\\n#more i:nth-child(2) {\\n  width: 4px;\\n  height: 20px;\\n  left: calc(50% - 2px);\\n}\\n\\n#more i:nth-child(3) {\\n  width: 20px;\\n  height: 4px;\\n  top: calc(50% - 2px);\\n  right: 0px;\\n}\\n\\n#more i:nth-child(4) {\\n  width: 4px;\\n  height: 20px;\\n  left: calc(50% - 2px);\\n  bottom: 0px;\\n}\\n\\n#more.hide {\\n  pointer-events: none;\\n}\\n\\n#more.hide i:nth-child(1) {\\n  transform: translateX(-60px);\\n  opacity: 0;\\n}\\n\\n#more.hide i:nth-child(2) {\\n  transform: translateY(-60px);\\n  opacity: 0;\\n}\\n\\n#more.hide i:nth-child(3) {\\n  transform: translateX(60px);\\n  opacity: 0;\\n}\\n\\n#more.hide i:nth-child(4) {\\n  transform: translateY(60px);\\n  opacity: 0;\\n}\\n\\n#more:hover {\\n  width: 50px;\\n  height: 50px;\\n  top: calc(50% - 25px);\\n  right: calc(30vw - 5px);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://porfolio-v2.1/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/images/eu.png":
/*!**********************************!*\
  !*** ./src/assets/images/eu.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/eu.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/images/eu.png?");

/***/ }),

/***/ "./src/assets/images/lgn-logo.png":
/*!****************************************!*\
  !*** ./src/assets/images/lgn-logo.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/lgn-logo.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/images/lgn-logo.png?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/logo.svg\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/images/logo.svg?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-bkn.png":
/*!***********************************************!*\
  !*** ./src/assets/mockups/new-mockup-bkn.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-bkn.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-bkn.png?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-glossy.png":
/*!**************************************************!*\
  !*** ./src/assets/mockups/new-mockup-glossy.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-glossy.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-glossy.png?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-lgn.png":
/*!***********************************************!*\
  !*** ./src/assets/mockups/new-mockup-lgn.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-lgn.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-lgn.png?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-pizzita.png":
/*!***************************************************!*\
  !*** ./src/assets/mockups/new-mockup-pizzita.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-pizzita.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-pizzita.png?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-tatuada.png":
/*!***************************************************!*\
  !*** ./src/assets/mockups/new-mockup-tatuada.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-tatuada.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-tatuada.png?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-timbo.png":
/*!*************************************************!*\
  !*** ./src/assets/mockups/new-mockup-timbo.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-timbo.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-timbo.png?");

/***/ }),

/***/ "./src/assets/mockups/new-mockup-village.png":
/*!***************************************************!*\
  !*** ./src/assets/mockups/new-mockup-village.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../images/new-mockup-village.png\");\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/mockups/new-mockup-village.png?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://porfolio-v2.1/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/wheel-indicator/lib/wheel-indicator.js":
/*!*************************************************************!*\
  !*** ./node_modules/wheel-indicator/lib/wheel-indicator.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("/**\r\n * Generates event when user makes new movement (like a swipe on a touchscreen).\r\n * @version 1.2.2\r\n * @link https://github.com/Promo/wheel-indicator\r\n * @license MIT\r\n */\r\n\r\n/* global module, window, document */\r\n\r\nvar WheelIndicator = (function() {\r\n    function Module(options) {\r\n        var DEFAULTS = {\r\n            callback: function(){},\r\n            elem: document,\r\n            preventMouse: true\r\n        };\r\n\r\n        this.eventWheel = 'onwheel' in document ? 'wheel' : 'mousewheel';\r\n        this._options = extend(DEFAULTS, options);\r\n        this._deltaArray = [ 0, 0, 0 ];\r\n        this._isAcceleration = false;\r\n        this._isStopped = true;\r\n        this._direction = '';\r\n        this._timer = '';\r\n        this._isWorking = true;\r\n\r\n        var self = this;\r\n        this._wheelHandler = function(event) {\r\n            if (self._isWorking) {\r\n                processDelta.call(self, event);\r\n\r\n                if (self._options.preventMouse) {\r\n                    preventDefault(event);\r\n                }\r\n            }\r\n        };\r\n\r\n        addEvent(this._options.elem, this.eventWheel, this._wheelHandler);\r\n    }\r\n\r\n    Module.prototype = {\r\n        constructor: Module,\r\n\r\n        turnOn: function(){\r\n            this._isWorking = true;\r\n\r\n            return this;\r\n        },\r\n\r\n        turnOff: function(){\r\n            this._isWorking = false;\r\n\r\n            return this;\r\n        },\r\n\r\n        setOptions: function(options){\r\n            this._options = extend(this._options, options);\r\n\r\n            return this;\r\n        },\r\n\r\n        getOption: function(option){\r\n            var neededOption = this._options[option];\r\n\r\n            if (neededOption !== undefined) {\r\n                return neededOption;\r\n            }\r\n\r\n            throw new Error('Unknown option');\r\n        },\r\n\r\n        destroy: function(){\r\n            removeEvent(this._options.elem, this.eventWheel, this._wheelHandler);\r\n\r\n            return this;\r\n        }\r\n    };\r\n\r\n    function triggerEvent(event){\r\n        event.direction = this._direction;\r\n\r\n        this._options.callback(event);\r\n    }\r\n\r\n    var getDeltaY = function(event){\r\n        if (event.wheelDelta && !event.deltaY) {\r\n            getDeltaY = function(event) {\r\n                return event.wheelDelta * -1;\r\n            };\r\n        } else {\r\n            getDeltaY = function(event) {\r\n                return event.deltaY;\r\n            };\r\n        }\r\n\r\n        return getDeltaY(event);\r\n    };\r\n\r\n    function preventDefault(event){\r\n        event = event || window.event;\r\n\r\n        if (event.preventDefault) {\r\n            event.preventDefault();\r\n        } else {\r\n            event.returnValue = false;\r\n        }\r\n    }\r\n\r\n    function processDelta(event) {\r\n        var\r\n            self = this,\r\n            delta = getDeltaY(event);\r\n\r\n        if (delta === 0) return;\r\n\r\n        var direction = delta > 0 ? 'down' : 'up',\r\n            arrayLength = self._deltaArray.length,\r\n            changedDirection = false,\r\n            repeatDirection = 0,\r\n            sustainableDirection, i;\r\n\r\n        clearTimeout(self._timer);\r\n\r\n        self._timer = setTimeout(function() {\r\n            self._deltaArray = [ 0, 0, 0 ];\r\n            self._isStopped = true;\r\n            self._direction = direction;\r\n        }, 150);\r\n\r\n        //check how many of last three deltas correspond to certain direction\r\n        for(i = 0; i < arrayLength; i++) {\r\n            if(self._deltaArray[i] !== 0) {\r\n                self._deltaArray[i] > 0 ? ++repeatDirection : --repeatDirection;\r\n            }\r\n        }\r\n\r\n        //if all of last three deltas is greater than 0 or lesser than 0 then direction is switched\r\n        if (Math.abs(repeatDirection) === arrayLength) {\r\n            //determine type of sustainable direction\r\n            //(three positive or negative deltas in a row)\r\n            sustainableDirection = repeatDirection > 0 ? 'down' : 'up';\r\n\r\n            if(sustainableDirection !== self._direction) {\r\n                //direction is switched\r\n                changedDirection = true;\r\n                self._direction = direction;\r\n            }\r\n        }\r\n\r\n        //if wheel`s moving and current event is not the first in array\r\n        if (!self._isStopped){\r\n            if(changedDirection) {\r\n                self._isAcceleration = true;\r\n\r\n                triggerEvent.call(this, event);\r\n            } else {\r\n                //check only if movement direction is sustainable\r\n                if(Math.abs(repeatDirection) === arrayLength) {\r\n                    //must take deltas to don`t get a bug\r\n                    //[-116, -109, -103]\r\n                    //[-109, -103, 1] - new impulse\r\n\r\n                    analyzeArray.call(this, event);\r\n                }\r\n            }\r\n        }\r\n\r\n        //if wheel is stopped and current delta value is the first in array\r\n        if (self._isStopped) {\r\n            self._isStopped = false;\r\n            self._isAcceleration = true;\r\n            self._direction = direction;\r\n\r\n            triggerEvent.call(this, event);\r\n        }\r\n\r\n        self._deltaArray.shift();\r\n        self._deltaArray.push(delta);\r\n    }\r\n\r\n    function analyzeArray(event) {\r\n        var\r\n            deltaArray0Abs  = Math.abs(this._deltaArray[0]),\r\n            deltaArray1Abs  = Math.abs(this._deltaArray[1]),\r\n            deltaArray2Abs  = Math.abs(this._deltaArray[2]),\r\n            deltaAbs        = Math.abs(getDeltaY(event));\r\n\r\n        if((deltaAbs       > deltaArray2Abs) &&\r\n            (deltaArray2Abs > deltaArray1Abs) &&\r\n            (deltaArray1Abs > deltaArray0Abs)) {\r\n\r\n            if(!this._isAcceleration) {\r\n                triggerEvent.call(this, event);\r\n                this._isAcceleration = true;\r\n            }\r\n        }\r\n\r\n        if((deltaAbs < deltaArray2Abs) &&\r\n            (deltaArray2Abs <= deltaArray1Abs)) {\r\n            this._isAcceleration = false;\r\n        }\r\n    }\r\n\r\n    function addEvent(elem, type, handler){\r\n        if(elem.addEventListener) {\r\n            elem.addEventListener(type, handler, isPassiveSupported() ? { passive: false } : false);\r\n        } else if (elem.attachEvent) {\r\n            elem.attachEvent('on' + type, handler);\r\n        }\r\n    }\r\n\r\n    function removeEvent(elem, type, handler) {\r\n        if (elem.removeEventListener) {\r\n            elem.removeEventListener(type, handler, isPassiveSupported() ? { passive: false } : false);\r\n        } else if (elem.detachEvent) {\r\n            elem.detachEvent('on'+ type, handler);\r\n        }\r\n    }\r\n\r\n    function extend(defaults, options) {\r\n        var extended = {},\r\n            prop;\r\n\r\n        for (prop in defaults) {\r\n            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {\r\n                extended[prop] = defaults[prop];\r\n            }\r\n        }\r\n\r\n        for (prop in options) {\r\n            if (Object.prototype.hasOwnProperty.call(options, prop)) {\r\n                extended[prop] = options[prop];\r\n            }\r\n        }\r\n\r\n        return extended;\r\n    }\r\n\r\n    return Module;\r\n}());\r\n\r\nif (true) {\r\n    module.exports = WheelIndicator;\r\n}\r\n\r\n// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support\r\n// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners\r\nfunction isPassiveSupported() {\r\n    var passiveSupported = false;\r\n    try {\r\n        var options = Object.defineProperty({}, \"passive\", {\r\n            get: function() {\r\n                passiveSupported = true;\r\n            }\r\n        });\r\n\r\n        window.addEventListener(\"test\", null, options);\r\n        window.removeEventListener(\"test\", null, options);\r\n    } catch(err) {}\r\n\r\n    return passiveSupported;\r\n}\r\n\n\n//# sourceURL=webpack://porfolio-v2.1/./node_modules/wheel-indicator/lib/wheel-indicator.js?");

/***/ }),

/***/ "./src/assets/js/_1_new-slider.js":
/*!****************************************!*\
  !*** ./src/assets/js/_1_new-slider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var WheelIndicator = __webpack_require__(/*! wheel-indicator */ \"./node_modules/wheel-indicator/lib/wheel-indicator.js\"); // ← if you use build system\r\nInit();\r\n//===============================================================================\r\n//==== INIT =====================================================================\r\n//===============================================================================\r\nfunction Init(){\r\n\t$AnimInProgress=false;//debloque l'animation\r\n\t$NumSl = $('.slide').length;\r\n\t$CurrSl=1;\r\n\t$Zindex=100;\r\n\tvClients=vProjets=vType=vCompteur=vLeadZero=\"\";\r\n\tct=0;\r\n\t$('.slide').each(function(){\r\n\t\tvClients = vClients+$(this).find('strong').html()+\"<br>\";\r\n\t\tvProjets = vProjets+$(this).find('h1').html()+\"<br>\";\r\n\t\tvType = vType+$(this).find('b').html()+\"<br>\";\r\n\t\tvLeadZero = vLeadZero+\"0<br>\";\r\n\t\tvCompteur = vCompteur+ct+\"<br>\";\r\n\t\tct=ct+1;\r\n\t});\r\n\t$('#slclient').find('div').html('<span>client</span> <span class=\"scroll\">'+vClients+'</span>');\r\n\t$('#slprojet').find('div').html('<span>projet</span> <span class=\"scroll\">'+vProjets+'</span>');\r\n\t$('#sltype').find('div').html('<span>type</span> <span class=\"scroll\">'+vType+'</span>');\r\n\t$('#slcompteur').find('b>span:nth-child(2),b>span:nth-child(1)').html(vLeadZero);\r\n\t$('#slcompteur').find('b>span:nth-child(3)').html(vCompteur);\r\n\t$('#more').addClass('hide');\r\n\tvar indicator = new WheelIndicator({elem:document.querySelector('#slider'),callback: function(e){ ScrollMe(e.direction); }});\r\n\tindicator.getOption('preventMouse');\r\n\t\r\n\t\r\n\tJump2Slide(1);\r\n}\r\n\r\n//===============================================================================\r\n//==== ON SCROLL ================================================================\r\n//===============================================================================\r\nfunction ScrollMe(Direction){\r\n\tif($AnimInProgress==false){\r\n\t\tif(Direction=='down'){\r\n\t\t\t\r\n\t\t\t$AnimInProgress=true;//bloque l'animation\r\n\t\t\t$ThisSl = $(\".slide:nth-child(\"+$CurrSl+\")\");//definit panneau sortant\r\n\t\t\tif($CurrSl<$NumSl){$CurrSl+=1;}else if($CurrSl==$NumSl){$CurrSl=1;}\r\n\t\t\t$VisOrigine = '100px';\r\n\t\t\t$VisOut = '-100px';\r\n\t\t}else if(Direction=='up' && $CurrSl>1){\r\n\t\t\t$AnimInProgress=true;//bloque l'animation\r\n\t\t\t$ThisSl = $(\".slide:nth-child(\"+$CurrSl+\")\");//definit panneau sortant\r\n\t\t\t$CurrSl-=1;\r\n\t\t\t$VisOrigine = '-100px';\r\n\t\t\t$VisOut = '100px';\r\n\t\t}else{\r\n\t\t\t$AnimInProgress=false;//debloque l'animation\r\n\t\t\texit;\r\n\t\t}\r\n\t\t$Zindex +=1;\r\n\t\tSwitchSlider();\r\n\t}\r\n}\r\n\r\nfunction Jump2Slide(n){\r\n\tif($AnimInProgress==false){\r\n\t\t$AnimInProgress=true;//bloque l'animation\r\n\t\t$ThisSl = $(\".slide:nth-child(\"+$CurrSl+\")\");//definit panneau sortant\r\n\t\tif($CurrSl>n){\r\n\t\t\t$VisOrigine = '-100px';\r\n\t\t\t$VisOut = '100px';\r\n\t\t}else{\r\n\t\t\t$VisOrigine = '100px';\r\n\t\t\t$VisOut = '-100px';\r\n\t\t}\r\n\r\n\t\t$CurrSl=n+1;\r\n\t\t$Zindex +=1;\r\n\t\tSwitchSlider();\r\n\t}\r\n}\r\n\r\n//===============================================================================\r\n//==== SWITCH PANE ==============================================================\r\n//===============================================================================\r\nfunction SwitchSlider(){\r\n\t$('#more').addClass('hide');//cache le +\r\n\t$SlCible = $(\".slide:nth-child(\"+$CurrSl+\")\");//definit paneau entrant\r\n\t$SlCible.css('z-index',$Zindex);//force le nouveau z-index du panneau cible\r\n\t$('#slcontent').css('z-index',$Zindex+20);//force le nouveau z-index du bloc ligne+compteur\r\n\tCibleScrollLine = ($CurrSl - 1) * 18;//increment ligne\r\n\tCibleScrollCompteur = ($CurrSl - 1) * 180;//increment compteur\r\n\tif($CurrSl==1){\r\n\t\tTweenMax.to($('#slcontent').find('div'),0.5,{y:'50px',opacity:0,ease:Power4.easeOut});//Masque les lignes et le compteur\r\n\t}else{\r\n\t\tTweenMax.staggerTo($('#slcontent').find('div'),1,{y:'0px',opacity:1,ease:Power4.easeOut},0.05);//Affiche les lignes et le compteur\r\n\t}\r\n\t\r\n\tTweenMax.fromTo($ThisSl.find('.vis'),1, {y:'0px',ease:Power4.easeOut}, {y:$VisOut});//masque ancien visuel\r\n\tTweenMax.fromTo($SlCible.find('.vis'),1, {y:$VisOrigine,ease:Power4.easeOut}, {y:'0px'});//affiche nouveau visuel\r\n\tTweenMax.staggerTo($('.line').find('.scroll'),0.6, {scrollTo:{y:CibleScrollLine, x:0},ease:Expo.easeOut},0.1);//scroll les lignes\r\n\tTweenMax.staggerTo($('#slcompteur').find('span'),0.6, {scrollTo:{y:CibleScrollCompteur, x:0},ease:Expo.easeOut},0.1);//scroll le compteur\r\n\t//change de panneau\r\n\tTweenMax.to($SlCible,1.1,{width:'100%',onComplete:function(){\r\n\t\tif($SlCible.find('a').length){\r\n\t\t\t$('#more').attr('href',$SlCible.find('a').attr('href')).removeClass('hide');\r\n\t\t}//cache le + si pas de lien\r\n\t\t$(\".slide:not(:nth-child(\"+$CurrSl+\"))\").css('width','0%');//init autres panneaux\r\n\t\t$AnimInProgress=false;//debloque l'animation\r\n\t}});\r\n}\r\n\r\nfunction LeadingZero(number,width){\r\n\twidth -= number.toString().length; if (width>0){ return new Array( width + (/\\./.test( number ) ? 2 : 1) ).join( '0' ) + number; } return number + \"\";\r\n}\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/js/_1_new-slider.js?");

/***/ }),

/***/ "./src/assets/js/_1_sliding-panels.js":
/*!********************************************!*\
  !*** ./src/assets/js/_1_sliding-panels.js ***!
  \********************************************/
/***/ (() => {

eval("// File#: _1_sliding-panels\r\n// Usage: codyhouse.co/license\r\n(function() {\r\n    var SlidingPanels = function(element) {\r\n        this.element = element;\r\n        this.itemsList = this.element.getElementsByClassName('js-s-panels__projects-list');\r\n        this.items = this.itemsList[0].getElementsByClassName('js-s-panels__project-preview');\r\n        this.navigationToggle = this.element.getElementsByClassName('js-s-panels__nav-control');\r\n        this.navigation = this.element.getElementsByClassName('js-s-panels__nav-wrapper');\r\n        this.transitionLayer = this.element.getElementsByClassName('js-s-panels__overlay-layer');\r\n        this.selectedSection = false; // will be used to store the visible project content section\r\n        this.animating = false;\r\n        // aria labels for the navigationToggle button\r\n        this.toggleAriaLabels = ['Toggle navigation', 'Close Project'];\r\n        initSlidingPanels(this);\r\n    };\r\n\r\n    function initSlidingPanels(element) {\r\n        // detect click on toggle menu\r\n        if (element.navigationToggle.length > 0 && element.navigation.length > 0) {\r\n            element.navigationToggle[0].addEventListener('click', function(event) {\r\n                if (element.animating) return;\r\n\r\n                // if project is open -> close project\r\n                if (closeProjectIfVisible(element)) return;\r\n\r\n                // toggle navigation\r\n                var openNav = Util.hasClass(element.navigation[0], 'is-hidden');\r\n                toggleNavigation(element, openNav);\r\n            });\r\n        }\r\n\r\n        // open project\r\n        element.element.addEventListener('click', function(event) {\r\n            if (element.animating) return;\r\n\r\n            var link = event.target.closest('.js-s-panels__project-control');\r\n            if (!link) return;\r\n            event.preventDefault();\r\n            openProject(element, event.target.closest('.js-s-panels__project-preview'), link.getAttribute('href').replace('#', ''));\r\n        });\r\n    };\r\n\r\n    // check if there's a visible project to close and close it\r\n    function closeProjectIfVisible(element) {\r\n        var visibleProject = element.element.getElementsByClassName('s-panels__project-preview--selected');\r\n        if (visibleProject.length > 0) {\r\n            element.animating = true;\r\n            closeProject(element);\r\n            return true;\r\n        }\r\n\r\n        return false;\r\n    };\r\n\r\n    function toggleNavigation(element, openNavigation) {\r\n        element.animating = true;\r\n        if (openNavigation) Util.removeClass(element.navigation[0], 'is-hidden');\r\n        slideProjects(element, openNavigation, false, function() {\r\n            element.animating = false;\r\n            if (!openNavigation) Util.addClass(element.navigation[0], 'is-hidden');\r\n        });\r\n        Util.toggleClass(element.navigationToggle[0], 's-panels__nav-control--arrow-down', openNavigation);\r\n    };\r\n\r\n    function openProject(element, project, id) {\r\n        element.animating = true;\r\n        var projectIndex = Util.getIndexInArray(element.items, project);\r\n        // hide navigation\r\n        Util.removeClass(element.itemsList[0], 'bg-opacity-0');\r\n        // expand selected projects\r\n        Util.addClass(project, 's-panels__project-preview--selected');\r\n        // hide remaining projects\r\n        slideProjects(element, true, projectIndex, function() {\r\n            // reveal section content\r\n            element.selectedSection = document.getElementById(id);\r\n            if (element.selectedSection) Util.removeClass(element.selectedSection, 'is-hidden');\r\n            element.animating = false;\r\n            // trigger a custom event - this can be used to init the project content (if required)\r\n            element.element.dispatchEvent(new CustomEvent('slidingPanelOpen', { detail: projectIndex }));\r\n        });\r\n        // modify toggle button appearance\r\n        Util.addClass(element.navigationToggle[0], 's-panels__nav-control--close');\r\n        // modify toggle button aria-label\r\n        element.navigationToggle[0].setAttribute('aria-label', element.toggleAriaLabels[1]);\r\n    };\r\n\r\n    function closeProject(element) {\r\n        // remove transitions from projects\r\n        toggleTransitionProjects(element, true);\r\n        // hide navigation\r\n        Util.removeClass(element.itemsList[0], 'bg-opacity-0');\r\n        // reveal transition layer\r\n        Util.addClass(element.transitionLayer[0], 's-panels__overlay-layer--visible');\r\n        // wait for end of transition layer effect\r\n        element.transitionLayer[0].addEventListener('transitionend', function cb(event) {\r\n            if (event.propertyName != 'opacity') return;\r\n            element.transitionLayer[0].removeEventListener('transitionend', cb);\r\n            // update projects classes\r\n            resetProjects(element);\r\n\r\n            setTimeout(function() {\r\n                // hide transition layer\r\n                Util.removeClass(element.transitionLayer[0], 's-panels__overlay-layer--visible');\r\n                // reveal projects\r\n                slideProjects(element, false, false, function() {\r\n                    Util.addClass(element.itemsList[0], 'bg-opacity-0');\r\n                    element.animating = false;\r\n                });\r\n            }, 200);\r\n        });\r\n\r\n        // modify toggle button appearance\r\n        Util.removeClass(element.navigationToggle[0], 's-panels__nav-control--close');\r\n        // modify toggle button aria-label\r\n        element.navigationToggle[0].setAttribute('aria-label', element.toggleAriaLabels[0]);\r\n    };\r\n\r\n    function slideProjects(element, openNav, exclude, cb) {\r\n        // projects will slide out in a random order\r\n        var randomList = getRandomList(element.items.length, exclude);\r\n        for (var i = 0; i < randomList.length; i++) {\r\n            (function(i) {\r\n                setTimeout(function() {\r\n                    Util.toggleClass(element.items[randomList[i]], 's-panels__project-preview--hide', openNav);\r\n                    toggleProjectAccessibility(element.items[randomList[i]], openNav);\r\n                    if (cb && i == randomList.length - 1) {\r\n                        // last item to be animated -> execute callback function at the end of the animation\r\n                        element.items[randomList[i]].addEventListener('transitionend', function cbt() {\r\n                            if (event.propertyName != 'transform') return;\r\n                            if (cb) cb();\r\n                            element.items[randomList[i]].removeEventListener('transitionend', cbt);\r\n                        });\r\n                    }\r\n                }, i * 100);\r\n            })(i);\r\n        }\r\n    };\r\n\r\n    function toggleTransitionProjects(element, bool) {\r\n        // remove transitions from project elements\r\n        for (var i = 0; i < element.items.length; i++) {\r\n            Util.toggleClass(element.items[i], 's-panels__project-preview--no-transition', bool);\r\n        }\r\n    };\r\n\r\n    function resetProjects(element) {\r\n        // reset projects classes -> remove selected/no-transition class + add hide class\r\n        for (var i = 0; i < element.items.length; i++) {\r\n            Util.removeClass(element.items[i], 's-panels__project-preview--selected s-panels__project-preview--no-transition');\r\n            Util.addClass(element.items[i], 's-panels__project-preview--hide');\r\n        }\r\n\r\n        // hide project content\r\n        if (element.selectedSection) Util.addClass(element.selectedSection, 'is-hidden');\r\n        element.selectedSection = false;\r\n    };\r\n\r\n    function getRandomList(maxVal, exclude) {\r\n        // get list of random integer from 0 to (maxVal - 1) excluding (exclude) if defined\r\n        var uniqueRandoms = [];\r\n        var randomArray = [];\r\n\r\n        function makeUniqueRandom() {\r\n            // refill the array if needed\r\n            if (!uniqueRandoms.length) {\r\n                for (var i = 0; i < maxVal; i++) {\r\n                    if (exclude === false || i != exclude) uniqueRandoms.push(i);\r\n                }\r\n            }\r\n            var index = Math.floor(Math.random() * uniqueRandoms.length);\r\n            var val = uniqueRandoms[index];\r\n            // now remove that value from the array\r\n            uniqueRandoms.splice(index, 1);\r\n            return val;\r\n        }\r\n\r\n        for (var j = 0; j < maxVal; j++) {\r\n            randomArray.push(makeUniqueRandom());\r\n        }\r\n\r\n        return randomArray;\r\n    };\r\n\r\n    function toggleProjectAccessibility(project, bool) {\r\n        bool ? project.setAttribute('aria-hidden', 'true') : project.removeAttribute('aria-hidden');\r\n        var link = project.getElementsByClassName('js-s-panels__project-control');\r\n        if (link.length > 0) {\r\n            bool ? link[0].setAttribute('tabindex', '-1') : link[0].removeAttribute('tabindex');\r\n        }\r\n    };\r\n\r\n    //initialize the SlidingPanels objects\r\n    var slidingPanels = document.getElementsByClassName('js-s-panels');\r\n    if (slidingPanels.length > 0) {\r\n        for (var i = 0; i < slidingPanels.length; i++) {\r\n            (function(i) { new SlidingPanels(slidingPanels[i]); })(i);\r\n        }\r\n    }\r\n}());\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/js/_1_sliding-panels.js?");

/***/ }),

/***/ "./src/assets/js/scrollTop.js":
/*!************************************!*\
  !*** ./src/assets/js/scrollTop.js ***!
  \************************************/
/***/ (() => {

eval("let scrollToTop = document.querySelector('.footer__to-top');\r\n\r\nscrollToTop.addEventListener('click', () => {\r\n    document.body.scrollTop = 0;\r\n    document.documentElement.scrollTop = 0;\r\n})\n\n//# sourceURL=webpack://porfolio-v2.1/./src/assets/js/scrollTop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/logo.svg */ \"./src/assets/images/logo.svg\");\n/* harmony import */ var _assets_images_eu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/eu.png */ \"./src/assets/images/eu.png\");\n/* harmony import */ var _assets_mockups_new_mockup_bkn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/mockups/new-mockup-bkn.png */ \"./src/assets/mockups/new-mockup-bkn.png\");\n/* harmony import */ var _assets_mockups_new_mockup_glossy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/mockups/new-mockup-glossy.png */ \"./src/assets/mockups/new-mockup-glossy.png\");\n/* harmony import */ var _assets_mockups_new_mockup_pizzita_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/mockups/new-mockup-pizzita.png */ \"./src/assets/mockups/new-mockup-pizzita.png\");\n/* harmony import */ var _assets_mockups_new_mockup_lgn_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/mockups/new-mockup-lgn.png */ \"./src/assets/mockups/new-mockup-lgn.png\");\n/* harmony import */ var _assets_mockups_new_mockup_timbo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/mockups/new-mockup-timbo.png */ \"./src/assets/mockups/new-mockup-timbo.png\");\n/* harmony import */ var _assets_mockups_new_mockup_tatuada_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/mockups/new-mockup-tatuada.png */ \"./src/assets/mockups/new-mockup-tatuada.png\");\n/* harmony import */ var _assets_mockups_new_mockup_village_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/mockups/new-mockup-village.png */ \"./src/assets/mockups/new-mockup-village.png\");\n/* harmony import */ var _assets_images_lgn_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/lgn-logo.png */ \"./src/assets/images/lgn-logo.png\");\n/* harmony import */ var _assets_js_1_sliding_panels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/js/_1_sliding-panels */ \"./src/assets/js/_1_sliding-panels.js\");\n/* harmony import */ var _assets_js_1_sliding_panels__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_js_1_sliding_panels__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_js_scrollTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/js/scrollTop */ \"./src/assets/js/scrollTop.js\");\n/* harmony import */ var _assets_js_scrollTop__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_js_scrollTop__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_js_1_new_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/js/_1_new-slider */ \"./src/assets/js/_1_new-slider.js\");\n/* harmony import */ var _assets_js_1_new_slider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_js_1_new_slider__WEBPACK_IMPORTED_MODULE_13__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://porfolio-v2.1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;