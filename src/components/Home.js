import { projectFirestore, timestamp } from "../Firebase/config";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import NavbarComp from "./NavbarComp";
import { Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import useFirestoreRead from "../hooks/useFirestoreRead";
import Project from "./Project";
import Footer from "./Footer";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const { docs } = useFirestoreRead("projects", currentUser.uid);
  const [projectAdder, setProjectAdder] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleProjectAddition = () => {
    let data = {
      owner: currentUser.uid,
      title: projectName,
      completed: false,
      createdAt: timestamp(),
    };
    projectFirestore.collection("projects").add(data);
    setProjectName("");
    setProjectAdder(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavbarComp />
      <div
        className="pt-4 pb-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {projectAdder ? (
          <Button
            variant="danger"
            onClick={() => setProjectAdder(!projectAdder)}
          >
            Close
          </Button>
        ) : (
          <Button onClick={() => setProjectAdder(!projectAdder)}>
            Add a project
          </Button>
        )}
        {/* <Button onClick={() => setProjectAdder(!projectAdder)}>
          Add a project
        </Button> */}
        {projectAdder && (
          <>
            <FormControl
              placeholder="Project Name"
              className="w-50 ms-4 me-2 p-2"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            />
            <Button
              variant="primary"
              onClick={handleProjectAddition}
              style={{
                borderRadius: "50%",
                display: "flex",
                verticalAlign: "middle",
              }}
              className="p-2"
            >
              <PlusCircle />
            </Button>
          </>
        )}
      </div>
      <div className="pb-5">
        <h4 className="p-3">Ongoing Projects:</h4>
        {docs.length === 0 ? (
          <h6 className="ps-4">Click add project to start a new Project.</h6>
        ) : null}
        {docs.map((project) => {
          return project.completed ? null : (
            <Project key={project.id} docPro={project} />
          );
        })}
        <h4 className="p-3">Completed Projects: </h4>
        {docs.length === 0 ? (
          <h6 className="ps-4">You havent completed any projects yet.</h6>
        ) : null}
        {docs.map((project) => {
          return project.completed ? (
            <Project key={project.id} docPro={project} />
          ) : null;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
