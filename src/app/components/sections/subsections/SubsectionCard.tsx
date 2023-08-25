import { useState } from 'react'
import { Collapse, Card } from 'react-bootstrap';
import styles from '../css/sectionCollapse.module.css'

interface iLinks {
  title: string;
  links?: Array<iResource>;
  subsections?: Array<object>;
}

interface iResource {
  title: string;
  url: string;
}

export default function SubsectionCard({ resources }: {resources: iLinks}) {

  const [subSectionOpen, setSubsectionOpen] = useState(false);

  // console.log(resources);

  return (
    <section>
      <button
        onClick={() => setSubsectionOpen(!subSectionOpen)}
        aria-controls="section"
        className={styles.dropdown}
      >
        <h3>{resources.title}</h3>
      </button>
      <Collapse in={subSectionOpen}>
        <div>
          <Card className="border rounded px-3 py-4 my-2">
            <ul>
              {resources?.links?.map((element) => (
                <li key={element.title} className="my-2">
                  <a href={element.url} target='_blank' rel='noreferrer' className="text-body fs-5">
                    {element.title}
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Collapse>
    </section>
  );
}
