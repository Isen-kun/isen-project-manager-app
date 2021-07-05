import { useState } from "react";
import { Button, ButtonGroup, FormControl } from "react-bootstrap";
import { CheckLg, PencilSquare, XLg } from "react-bootstrap-icons";
import { projectFirestore } from "../Firebase/config";
import { BookmarkPlus } from "react-bootstrap-icons";

const Task = ({ taskPro }) => {
  const [taskEditor, setTaskEditor] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  const handleComplete = (id) => {
    projectFirestore.collection("tasks").doc(id).update({
      completed: !taskPro.completed,
    });
  };

  const handleTaskEditing = (id) => {
    projectFirestore.collection("tasks").doc(id).update({
      title: newTaskName,
    });
    setNewTaskName("");
    setTaskEditor(false);
  };

  const handleDelete = (id) => {
    projectFirestore.collection("tasks").doc(id).delete();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
      className="py-1"
    >
      <div
        style={{ textDecoration: taskPro.completed ? "line-through" : "none" }}
      >
        {taskPro.title}
      </div>
      <div>
        <ButtonGroup size="sm">
          {taskEditor && (
            <>
              <FormControl
                placeholder="Enter new Task Name"
                className="ms-4 me-2 p-1"
                value={newTaskName}
                onChange={(e) => {
                  setNewTaskName(e.target.value);
                }}
              />
              <Button
                variant="primary"
                onClick={() => {
                  handleTaskEditing(taskPro.id);
                }}
              >
                <BookmarkPlus />
              </Button>
            </>
          )}
          <Button variant="success" onClick={() => handleComplete(taskPro.id)}>
            <CheckLg />
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              setTaskEditor(!taskEditor);
            }}
          >
            <PencilSquare />
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(taskPro.id);
            }}
          >
            <XLg />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Task;
