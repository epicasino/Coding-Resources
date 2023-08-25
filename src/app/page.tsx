'use client';

import NavbarComponent from './components/navbar/NavbarComponent';
import { Container } from 'react-bootstrap';

import SectionCollapse from './components/sections/SectionCollapse';
import SubsectionCollapse from './components/sections/subsections/SubsectionCollapse';

import { allLinks } from './resourceLinks/allLinks';
import Footer from './components/footer/Footer';

interface iLinks {
  title: string;
  links?: Array<iResource>;
  subsections?: Array<iResource>;
}

interface iResource {
  title: string;
  url: string;
}

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main className="pt-3">
        <Container fluid className="p-5">
          <h2 className="text-center text-white">
            Hello friends! Feel free to use this GitPages website to access
            links and resources provided by our TAs and fellow classmates in one
            website!
          </h2>
        </Container>
        {/* This is where dropdowns will go */}
        <Container fluid>
          {allLinks.map((resource: iLinks) =>
            resource.links ? (
              <SectionCollapse key={resource.title} resources={resource} />
            ) : resource.subsections ? (
              <SubsectionCollapse key={resource.title} resources={resource} />
            ) : (
              <></>
            )
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
