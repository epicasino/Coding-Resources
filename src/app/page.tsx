'use client';

import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';

import SectionCollapse from './components/sections/SectionCollapse';
import SubsectionCollapse from './components/sections/subsections/SubsectionCollapse';

import allLinks from './resourceLinks/allLinks';

export default function Home() {

  return (
    <>
      <NavbarComponent />
      <main className='pt-5 mt-5'>
        <Container fluid className="p-5">
          <h2 className="text-center text-white">
            Hello friends! Feel free to use this GitPages website to access
            links and resources provided by our TAs and fellow classmates in one
            website!
          </h2>
        </Container>
        {/* This is where dropdowns will go */}
        <Container fluid>
          {allLinks.map((resource) =>
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
    </>
  );
}