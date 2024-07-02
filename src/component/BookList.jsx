import { Component } from "react";
import { Container, Form, InputGroup, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchInput: "",
    idLibroSelezionato: "",
  };

  cardSelezionata = (idLibroSelezionato) => {
    this.setState({
      idLibroSelezionato: idLibroSelezionato,
    });
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Cerca"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
        </InputGroup>
        <Row className="g-2">
          <Col md="8">
            <Row>
              {this.props.libriDaVisualizzare
                .filter((libro) =>
                  libro.title
                    .toLowerCase()
                    .includes(this.state.searchInput.toLowerCase())
                )
                .map((libro, index) => (
                  <Col md="6" key={index}>
                    <SingleBook
                      libro={libro}
                      cardSelezionata={this.cardSelezionata}
                      isSelected={this.state.idLibroSelezionato === libro.asin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md="4">
            {this.state.idLibroSelezionato && (
              <CommentArea idLibro={this.state.idLibroSelezionato} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
