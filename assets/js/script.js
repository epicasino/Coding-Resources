// Markdown JS 
function markdown() {
  const markdownListEl = document.querySelector("#markdownList");

  markdownArray.forEach((element) => {
    markdownListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
};

// Commandline JS
function commandline() {
  const commandlineListEl = document.querySelector("#commandlineList");

  commandlineArray.forEach((element) => {
    commandlineListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
};

// HTML JS

function html() {
  const htmlListEl = document.querySelector("#htmlList");

  htmlArray.forEach((element) => {
    htmlListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
  });
};

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
};

js();
css();
html();
commandline();
markdown();