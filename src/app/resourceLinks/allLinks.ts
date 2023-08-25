import mdLinks from './json/markdownLinks.json';
import cliLinks from './json/cliLinks.json';
import htmlLinks from './json/htmlLinks.json';
import cssLinks from './json/cssLinks.json';
import jsLinks from './json/jsLinks.json';
import jQueryLinks from './json/jQueryLinks.json'
import webAPILinks from './json/webAPILinks.json';
import restAPILinks from './json/restfulAPILinks.json';
import cssFrameworkLinks from './json/cssFrameworkLinks.json';
import nodeJSLinks from './json/nodeJSLinks.json';
import oopLinks from './json/oopLinks.json';
import expressLinks from './json/expressJSLinks.json';
import mysqlLinks from './json/mysqlLinks.json';
import mongodbLinks from './json/mongodbLinks.json';
import etcLinks from './json/etcLinks.json';

interface iLinks {
  title: string;
  links?: Array<iResource>;
  subsections?: Array<iResource>;
}

interface iResource {
  title: string;
  url: string;
}

export const allLinks: any = [
  mdLinks,
  cliLinks,
  htmlLinks,
  cssLinks,
  jsLinks,
  jQueryLinks,
  webAPILinks,
  restAPILinks,
  cssFrameworkLinks,
  nodeJSLinks,
  oopLinks,
  expressLinks,
  mysqlLinks,
  mongodbLinks,
  etcLinks,
];

// console.log(allLinks);

interface iSubSectionLinkArray {
  title: string,
  url: string
}

export let pureLinksArray: Array<iSubSectionLinkArray> = [];

for ( let i = 0 ; i < allLinks.length ; i++) {
  if (allLinks[i].links) {
    for ( let linkInt = 0; linkInt < allLinks[i].links.length; linkInt++ ) {
      pureLinksArray.push(allLinks[i].links[linkInt]);
    }
  } else if (allLinks[i].subsections) {
    for ( let subInt = 0; subInt < allLinks[i].subsections.length; subInt++ ) {
      // pureLinksArray.push(allLinks[i].subsections[subInt].links)
      for ( let linkInt = 0; linkInt < allLinks[i].subsections[subInt].links.length; linkInt++ ) {
      pureLinksArray.push(allLinks[i].subsections[subInt].links[linkInt]);
      }
    }
  }
}

// console.log(pureLinksArray);
