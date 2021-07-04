import useFirestoreRead from "../hooks/useFirestoreRead";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import NavbarComp from "./NavbarComp";
import { Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import Projects from "./Projects";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  // const { docs } = useFirestoreRead("projects");
  const [projectAdder, setProjectAdder] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleProjectAddition = () => {
    setProjectName("");
    setProjectAdder(false);
  };

  return (
    <div>
      <NavbarComp />
      <div
        className="pt-4 pb-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setProjectAdder(true)}>Add a project</Button>
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
            <Button variant="secondary" onClick={handleProjectAddition}>
              <PlusCircle />
            </Button>
          </>
        )}
      </div>
      <Projects />
    </div>
  );
};

export default Home;
