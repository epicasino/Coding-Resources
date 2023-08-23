'use client';

import React from 'react';
import NavbarComponent from '@/app/components/navbar/NavbarComponent';
import Footer from '@/app/components/footer/Footer';

export default function page() {
  return (
    <>
      <NavbarComponent />
      <main className="pt-5 mt-5">
        <header>
          <h1 className="text-center py-5 text-decoration-underline">
            README Template
          </h1>
        </header>
        <section className="p-4">
          <h1 id="-your-project-title"># Your-Project-Title</h1>
          <h2 id="-description">## Description</h2>
          <p>
            Provide a short description explaining the what, why, and how of
            your project. Use the following questions as a guide:
          </p>
          <ul>
            <li>What was your motivation?</li>
            <li>
              Why did you build this project? (Note: the answer is not
              &quot;Because it was a homework assignment.&quot;)
            </li>
            <li>What problem does it solve?</li>
            <li>What did you learn?</li>
          </ul>
          <h2 id="-table-of-contents-optional-">
            ## Table of Contents (Optional)
          </h2>
          <p>
            If your README is long, add a table of contents to make it easy for
            users to find what they need.
          </p>
          <ul>
            <li>[Installation](#installation)</li>
            <li>[Usage](#usage)</li>
            <li>[Credits](#credits)</li>
            <li>[License](#license)</li>
          </ul>
          <h2 id="-installation">## Installation</h2>
          <p>
            What are the steps required to install your project? Provide a
            step-by-step description of how to get the development environment
            running.
          </p>
          <h2 id="-usage">## Usage</h2>
          <p>
            Provide instructions and examples for use. Include screenshots as
            needed.
          </p>
          <p>
            To add a screenshot, create an <code>assets/images</code> folder in
            your repository and upload your screenshot to it. Then, using the
            relative filepath, add it to your README using the following syntax:
          </p>
          <pre>
            <code>```md ![alt text](assets/images/screenshot.png) ```</code>
          </pre>
          <h2 id="-credits">## Credits</h2>
          <p>
            List your collaborators, if any, with links to their GitHub
            profiles.
          </p>
          <p>
            If you used any third-party assets that require attribution, list
            the creators with links to their primary web presence in this
            section.
          </p>
          <p>If you followed tutorials, include links to those here as well.</p>
          <h2 id="-license">## License</h2>
          <p>
            The last section of a high-quality README file is the license. This
            lets other developers know what they can and cannot do with your
            project. If you need help choosing a license, refer to{' '}
            <a href="https://choosealicense.com/">
              https://choosealicense.com/
            </a>
            .
          </p>
          {/* LINE BREAK LINE BREAK LINE BREAK LINE BREAK  */}
          <hr />

          <p>
            (The previous sections are the bare minimum, and your project will
            ultimately determine the content of this document. You might also
            want to consider adding the following sections.)
          </p>
          <h2 id="-badges">## Badges</h2>
          <p>
            ![Top
            Language](src=&#34;https://img.shields.io/github/languages/top/lernantino/badmath&#34;
            alt=&#34;badmath&#34;)
          </p>
          <p>
            Badges aren&#39;t necessary, per se, but they demonstrate street
            cred. Badges let other developers know that you know what you&#39;re
            doing. Check out the badges hosted by{' '}
            <a href="https://shields.io/">shields.io</a>. You may not understand
            what they all represent now, but you will in time.
          </p>
          <h2 id="-features">## Features</h2>
          <p>If your project has a lot of features, list them here.</p>
          <h2 id="-how-to-contribute">## How to Contribute</h2>
          <p>
            If you created an application or package and would like other
            developers to contribute it, you can include guidelines for how to
            do so. The{' '}
            <a href="https://www.contributor-covenant.org/">
              Contributor Covenant
            </a>{' '}
            is an industry standard, but you can always write your own if
            you&#39;d prefer.
          </p>
          <h2 id="-tests">## Tests</h2>
          <p>
            Go the extra mile and write tests for your application. Then provide
            examples on how to run them here.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
