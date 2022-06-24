import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddNews from "./components/AddNews";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const [newsId, setNewsId] = useState("");

  const getNewsIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setNewsId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">News - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddNews id={newsId} setNewsId={setNewsId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <NewsList getNewsId={getNewsIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
