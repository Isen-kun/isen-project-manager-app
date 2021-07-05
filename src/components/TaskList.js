import { useState } from "react";
import { projectFirestore, timestamp } from "../Firebase/config";
import { Button, FormControl } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import useFirestoreRead from "../hooks/useFirestoreRead";
import Task from "./Task";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const TaskList = ({ projectId }) => {
  const { currentUser } = useContext(AuthContext);
  const { docs } = useFirestoreRead("tasks", currentUser.uid);
  const [taskAdder, setTaskAdder] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleTaskAddition = () => {
    let data = {
      projectId: projectId,
      title: taskName,
      completed: false,
      createdAt: timestamp(),
      owner: currentUser.uid,
    };
    projectFirestore.collection("tasks").add(data);
    setTaskName("");
    setTaskAdder(false);
  };

  return (
    <>
      <div
        className="py-1"
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button size="sm" onClick={() => setTaskAdder(!taskAdder)}>
          Add a task
        </Button>

        {taskAdder && (
          <>
            <FormControl
              placeholder="Task Name"
              className="w-25 ms-4 me-2 p-1"
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
            />
            <Button
              variant="primary"
              onClick={handleTaskAddition}
              style={{
                borderRadius: "50%",
                display: "flex",
                verticalAlign: "middle",
              }}
              className="p-1"
            >
              <PlusCircle />
            </Button>
          </>
        )}
      </div>
      <div>
        <h6 className="px-2 py-3">Tasks of this project: </h6>
        <ol>
          {docs.map((task) => {
            return projectId === task.projectId ? (
              <li key={task.id}>
                <Task taskPro={task} />
              </li>
            ) : null;
          })}
        </ol>
      </div>
    </>
  );
};

export default TaskList;
