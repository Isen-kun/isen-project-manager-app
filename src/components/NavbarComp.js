import { Navbar, Container, Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const NavbarComp = () => {
  const { currentUser, signout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogOut = () => {
    signout();
    history.push("/");
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Project Manager App</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="pe-3">
            Signed In as: {currentUser.email}
          </Navbar.Text>
          <Button variant="success" onClick={handleLogOut}>
            SignOut
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
