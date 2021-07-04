import { Accordion, Card } from "react-bootstrap";
import { CaretDownFill } from "react-bootstrap-icons";

const Projects = () => {
  const projects = [1, 2];

  return (
    <div>
      <h4 className="p-3">Ongoing Projects:</h4>
      <Accordion>
        {projects.map((project) => (
          <Card key={project}>
            <Accordion.Toggle as={Card.Header} eventKey={project}>
              <CaretDownFill className="me-3" />
              Test headers
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={project}>
              <Card.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                aut et pariatur nesciunt in assumenda beatae dignissimos quidem
                perferendis, doloremque dolorem iste enim necessitatibus, quia,
                error voluptas ipsum ipsam unde.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <h4 className="p-3">Completed Projects: </h4>
      <Accordion>
        {projects.map((project) => (
          <Card key={project}>
            <Accordion.Toggle as={Card.Header} eventKey={project}>
              Test headers
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={project}>
              <Card.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                aut et pariatur nesciunt in assumenda beatae dignissimos quidem
                perferendis, doloremque dolorem iste enim necessitatibus, quia,
                error voluptas ipsum ipsam unde.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default Projects;
