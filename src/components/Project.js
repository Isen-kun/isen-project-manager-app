import { Accordion, Card } from "react-bootstrap";
import { CaretDownFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ToggleButton, Button, ButtonGroup } from "react-bootstrap";
import { projectFirestore } from "../Firebase/config";
import TaskList from "./TaskList";
import useFirestoreRead from "../hooks/useFirestoreRead";

const Project = ({ docPro }) => {
  const { docs } = useFirestoreRead("tasks");
  const [checked, setChecked] = useState(docPro.completed);

  const handleComplete = (e, id) => {
    setChecked(e.currentTarget.checked);
    projectFirestore.collection("projects").doc(id).update({
      completed: !docPro.completed,
    });
  };

  const deleteAllTasks = (id) => {
    docs.forEach((doc) => {
      if (doc.projectId === id) {
        projectFirestore.collection("tasks").doc(doc.id).delete();
      }
    });
  };

  const handleDelete = (id) => {
    deleteAllTasks(id);
    projectFirestore.collection("projects").doc(id).delete();
  };

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={docPro}
          style={{
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "#43c7e8",
          }}
        >
          <div className="pt-1">
            <CaretDownFill className="me-3" />
            {docPro.title}
          </div>
          <ButtonGroup>
            <ToggleButton
              className="ms-3"
              id="toggle-check"
              type="checkbox"
              variant="outline-success"
              checked={checked}
              onChange={(e) => handleComplete(e, docPro.id)}
            >
              Done
            </ToggleButton>
            <Button
              variant="danger"
              onClick={() => {
                handleDelete(docPro.id);
              }}
            >
              <TrashFill />
            </Button>
          </ButtonGroup>
        </Accordion.Toggle>
        <Accordion.Collapse
          eventKey={docPro}
          // style={{ backgroundColor: "#88e5fc" }}
        >
          <Card.Body>
            <TaskList projectId={docPro.id} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Project;
