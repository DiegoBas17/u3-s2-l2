import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import scifi from "../books/scifi.json"
import fantasy from "../books/fantasy.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import history from "../books/history.json"
import { Row, Col } from "react-bootstrap";

class AllTheBooks extends Component {
    state = {
        libriDaVisualizzare: scifi
    }
  render() {
    return (
        <>
        <h2 className="mb-4">Cambia categoria con un click</h2>
        <Button className="mx-2 mb-3" variant="primary" onClick={() => this.setState({ libriDaVisualizzare: fantasy })}>Fantasy</Button>
        <Button className="mx-2 mb-3" variant="primary" onClick={() => this.setState({ libriDaVisualizzare: history})}>History</Button>
        <Button className="mx-2 mb-3" variant="primary" onClick={() => this.setState({ libriDaVisualizzare: horror})}>Horror</Button>
        <Button className="mx-2 mb-3" variant="primary" onClick={() => this.setState({ libriDaVisualizzare: romance})}>Romance</Button>
        <Button className="mx-2 mb-3" variant="primary" onClick={() => this.setState({ libriDaVisualizzare: scifi})}>Scifi</Button>
      <Row className="g-2">
        {this.state.libriDaVisualizzare.map(libro => {
            console.log(libro)
            return(
        <Col lg="2" key={`Libro-${libro.asin}`}>
          <Card>
            <Card.Img variant="top" src={libro.img} height={470}/>
            <Card.Body>
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text>
                Categoria: {libro.category}
              </Card.Text>
              <div className="d-flex justify-content-between">
              <Button variant="primary">Shop</Button>
              <div className="bg-secondary rounded-pill py-2 px-3">{libro.price}€</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        )
        })
        }
      </Row>
      </>
    );
  }
}

export default AllTheBooks;
