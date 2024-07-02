import { useState } from "react";
import { Container, Form, InputGroup, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ libriDaVisualizzare }) => {
  const [searchInput, setSearchInput] = useState("");
  const [idLibroSelezionato, setIdLibroSelezionato] = useState("");

  const cardSelezionata = (idLibroSelezionato) => {
    setIdLibroSelezionato(idLibroSelezionato);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Cerca"
          value={searchInput}
          onChange={handleChange}
        />
      </InputGroup>
      <Row className="g-2">
        <Col md="8">
          <Row>
            {libriDaVisualizzare
              .filter((libro) =>
                libro.title.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((libro, index) => (
                <Col md="6" key={index}>
                  <SingleBook
                    libro={libro}
                    cardSelezionata={cardSelezionata}
                    isSelected={idLibroSelezionato === libro.asin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md="4">
          {idLibroSelezionato && <CommentArea idLibro={idLibroSelezionato} />}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
