// Markdown JS
function markdown() {
  const markdownListEl = document.querySelector("#markdownList");

  markdownArray.forEach((element) => {
    markdownListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// Commandline JS
function commandline() {
  const commandlineListEl = document.querySelector("#commandlineList");

  commandlineArray.forEach((element) => {
    commandlineListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// HTML JS
function html() {
  const htmlListEl = document.querySelector("#htmlList");

  htmlArray.forEach((element) => {
    htmlListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// CSS JS
function css() {
  const cssBasicsListEl = document.querySelector("#css-basics-list");
  const cssResetListEl = document.querySelector("#css-reset-files-list");
  const cssFlexboxListEl = document.querySelector("#css-flexbox-list");
  const advancedCSSListEl = document.querySelector("#advanced-css-list");
  const cssGamesListEl = document.querySelector("#css-games-list");

  cssArray.cssBasics.forEach((element) => {
    cssBasicsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  cssArray.cssResetFiles.forEach((element) => {
    cssResetListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  cssArray.cssFlexbox.forEach((element) => {
    cssFlexboxListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  cssArray.advancedCSS.forEach((element) => {
    advancedCSSListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  cssArray.cssGames.forEach((element) => {
    cssGamesListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// JavaScript JS
function js() {
  const jsFunctionListEl = document.querySelector("#js-function-list");
  const jsArrayListEl = document.querySelector("#arrays-list");
  const jsMathListEl = document.querySelector("#math-list");
  const jsMethodsListEl = document.querySelector("#methods-list");
  const jsWIndowListEl = document.querySelector("#window-list");
  const jsStatementListEl = document.querySelector("#statements-list");
  const jsOperatorListEl = document.querySelector("#operators-list");
  const jsDOMListEl = document.querySelector("#dom-list");

  jsArray.jsFunction.forEach((element) => {
    jsFunctionListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsArrayList.forEach((element) => {
    jsArrayListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsMath.forEach((element) => {
    jsMathListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsMethods.forEach((element) => {
    jsMethodsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsWindow.forEach((element) => {
    jsWIndowListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsStatement.forEach((element) => {
    jsStatementListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsOperators.forEach((element) => {
    jsOperatorListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsArray.jsDOM.forEach((element) => {
    jsDOMListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// WebAPI JS
function webapi() {
  const webApiEventsListEl = document.querySelector(
    "#collapse-webapi-events-list"
  );
  const webApiPropertyListEl = document.querySelector(
    "#collapse-webapi-property-list"
  );
  const webApiMethodsListEl = document.querySelector(
    "#collapse-webapi-methods-list"
  );
  const webApiObjectsListEl = document.querySelector(
    "#collapse-webapi-objects-list"
  );
  const webApiKeysListEl = document.querySelector("#collapse-webapi-keys-list");
  const webApiGuidesListEl = document.querySelector(
    "#collapse-webapi-guides-list"
  );

  webApiArray.webApiEvents.forEach((element) => {
    webApiEventsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  webApiArray.webApiProperty.forEach((element) => {
    webApiPropertyListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  webApiArray.webApiMethods.forEach((element) => {
    webApiMethodsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  webApiArray.webApiGlobalObjects.forEach((element) => {
    webApiObjectsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  webApiArray.webApiKeys.forEach((element) => {
    webApiKeysListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  webApiArray.webApiGuides.forEach((element) => {
    webApiGuidesListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// RESTful API JS
function restfulApi() {
  const restfulApiListEl = document.querySelector("#restful-api-list");
  restfulApiArray.forEach((element) => {
    restfulApiListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// jQuery JS
function jQueryList() {
  const jQueryCoreListEl = document.querySelector("#jQuery-core-list");
  const jQueryUiListEl = document.querySelector("#jQueryUi-list");

  jQueryArray.jQueryCore.forEach((element) => {
    jQueryCoreListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jQueryArray.jQueryUi.forEach((element) => {
    jQueryUiListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// CSS Framework JS
function cssFrameworks() {
  const bootstrapListEl = document.querySelector("#bootstrap-list");
  const bulmaListEl = document.querySelector("#bulma-list");

  cssFrameworkArray.bootstrap.forEach((element) => {
    bootstrapListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  cssFrameworkArray.bulma.forEach((element) => {
    bulmaListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// NodeJS JS
function nodeJS() {
  const nodeJSListEl = document.querySelector("#nodejs-list");
  const nodeFSListEl = document.querySelector("#node-fs-list");
  const nodeNPMListEL = document.querySelector("#node-npm-list");

  nodeJSArray.nodeJS.forEach((element) => {
    nodeJSListEl.innerHTML += `
    <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  nodeJSArray.filesystem.forEach((element) => {
    nodeFSListEl.innerHTML += `
    <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  nodeJSArray.npm.forEach((element) => {
    nodeNPMListEL.innerHTML += `
    <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// OOP JS
function oop() {
  const oopMainListEl = document.getElementById("oop-list");
  const oopExpressListEl = document.getElementById("oop-expressions-list");
  const oopInheritListEl = document.getElementById("oop-inheritance-list");

  jsOOPArray.main.forEach((element) => {
    oopMainListEl.innerHTML += `
    <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsOOPArray.expressions.forEach((element) => {
    oopExpressListEl.innerHTML += `
    <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  jsOOPArray.inheritance.forEach((element) => {
    oopInheritListEl.innerHTML += `
    <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

// Stock Images, Color Tools, Validator JS
function etcLinks() {
  const stockImagesListEl = document.querySelector("#stock-images-list");
  const colorToolsListEl = document.querySelector("#color-tools-list");
  const validatorsListEl = document.querySelector("#validators-list");

  etcArray.stockImages.forEach((element) => {
    stockImagesListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  etcArray.colorTools.forEach((element) => {
    colorToolsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });

  etcArray.validators.forEach((element) => {
    validatorsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
}

markdown();
commandline();
html();
css();
js();
webapi();
restfulApi();
jQueryList();
cssFrameworks();
etcLinks();
nodeJS();
oop();

// boiler plate

// array.forEach((element) => {
//   htmlelement.innerHTML += `
//   <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
// });