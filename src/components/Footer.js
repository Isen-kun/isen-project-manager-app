import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      className="footer pt-3 pb-1"
      style={{
        position: "relative",
        // marginTop: "50vh",
        //set parent conatiner flex, flexdirection column and min height 100vh to make sticky footer
        marginTop: "auto",
        background: "#408cf7",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>
        This Application was created using React JS and Boostrap for Front-end
        and Firebase was used in the Back-end.
        <br />
        Copyright &copy; Rajorshi Ghosh 2021
        <br />
        Links:
        <a
          href="https://github.com/Isen-kun/isen-project-manager-app"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
          className="px-2"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/rajorshi-ghosh-7952451ba/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          LinkedIn
        </a>
      </p>
    </Container>
  );
};

export default Footer;
