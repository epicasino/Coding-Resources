import { useState } from 'react';
import { Collapse, Card } from 'react-bootstrap';
import styles from '../css/sectionCollapse.module.css';
import SubsectionCard from './SubsectionCard';

interface iLinks {
  title: String;
  links?: Array<iResource>;
  subsections?: Array<iResource>;
}

interface iResource {
  title: string;
  url: string;
}

export default function SubsectionCollapse({
  resources,
}: {
  resources: iLinks;
}) {
  const [sectionOpen, setSectionOpen] = useState(false);

  // console.log(resources);

  return (
    <section>
      <button
        onClick={() => setSectionOpen(!sectionOpen)}
        aria-controls="section"
        className={styles.dropdown}
      >
        <h2>{resources.title}</h2>
      </button>
      <Collapse in={sectionOpen}>
        <div>
          <Card className="border rounded px-3 py-4 my-2">
            <>
              {resources?.subsections?.map((element) => (
                <SubsectionCard key={element.title} resources={element}/>
              ))}
            </>
          </Card>
        </div>
      </Collapse>
    </section>
  );
}
