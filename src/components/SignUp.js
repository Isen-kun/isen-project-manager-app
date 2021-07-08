import { useContext } from "react";
import { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signup } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, pass, rePass);
    if (pass !== rePass) {
      setError("Passwords do not match");
      return;
    } else {
      try {
        setError("");
        setLoading(true);
        await signup(email, pass);
      } catch {
        setError("Failed to create an account.");
      }
    }
    setLoading(false);
    setEmail("");
    setPass("");
    setRePass("");
    if (error) {
      alert(error);
    } else {
      history.push("/home");
    }
  }

  return (
    <Row
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Col sm={12} md={7} className="p-3" style={{ textAlign: "center" }}>
        <h1>Welcome to Project Manager.</h1>
        <h4>In order to continue you need to sign up or login.</h4>
      </Col>
      <Col
        sm={12}
        md={5}
        className="d-flex justify-content-center align-items-center"
      >
        <Card className="p-3 w-100" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-3">Sign Up</h2>
          </Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat Password"
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center p-2">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
