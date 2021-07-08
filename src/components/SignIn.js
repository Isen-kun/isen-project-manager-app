import { useContext } from "react";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signin } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(email, pass);
    } catch {
      setError("Failed to find your account.");
    }
    setLoading(false);
    setEmail("");
    setPass("");
    if (error) {
      alert(error);
    } else {
      history.push("/home");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-3 w-100" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-3">Sign In</h2>
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
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            Sign In
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
