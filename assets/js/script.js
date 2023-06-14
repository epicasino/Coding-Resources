// Markdown JS 

const markdownListEl = document.querySelector("#markdownList");

markdownArray.forEach(element => {
  markdownListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

// Commandline JS

const commandlineListEl = document.querySelector("#commandlineList");

commandlineArray.forEach(element => {
  commandlineListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

// HTML JS

const htmlListEl = document.querySelector("#htmlList");

htmlArray.forEach(element => {
  htmlListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

// CSS JS

const cssBasicsListEl = document.querySelector("#css-basics-list");
const cssResetListEl = document.querySelector('#css-reset-files-list');
const cssFlexboxListEl = document.querySelector('#css-flexbox-list');
const advancedCSSListEl = document.querySelector('#advanced-css-list');
const cssGamesListEl = document.querySelector('#css-games-list');

cssArray.cssBasics.forEach(element => {
  cssBasicsListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

cssArray.cssResetFiles.forEach(element => {
  cssResetListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

cssArray.cssFlexbox.forEach(element => {
  cssFlexboxListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

cssArray.advancedCSS.forEach(element => {
  advancedCSSListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});

cssArray.cssGames.forEach(element => {
  cssGamesListEl.innerHTML += `
  <li><a href='${element.url}' target='_blank'>${element.title}</a></li>`;
});