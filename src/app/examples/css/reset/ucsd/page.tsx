'use client';
import React from 'react';

import NavbarComponent from '@/app/components/navbar/NavbarComponent';
import Footer from '@/app/components/footer/Footer';

export default function page() {
  return (
    <>
      <NavbarComponent />
      <main className="pt-3">
        <h1 className="pt-5 my-2 text-center">UCSD RESET FILE</h1>
        <pre>
          {`
/* Resets the box size of every element */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Gives the body element a parent height to compare against */
html {
  height: 100%;
}

body {
  min-height: 100%;
  line-height: 1;
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
}

/* Matches the font of special elements to the rest of the page */
input, select, option, optgroup, textarea, button,
pre, code {
  font-size: 100%;
  font-family: inherit;
}

/* Removes default bullet points from lists */
ol, ul {
  list-style: none;
}
`}
        </pre>
      </main>
      <Footer />
    </>
  );
}
