import { Component } from "react";
import { Button, Card } from "react-bootstrap";
/* import CommentArea from "./CommentArea"; */

class SingleBook extends Component {
  /*   state = {
    selected: false,
  };
 */
  /*  cardSelezionata = () => {
    this.setState({ selected: !this.state.selected });
  }; */

  render() {
    return (
      <Card
        style={{
          border: this.props.isSelected
            ? "5px solid red"
            : "5px solid lightgrey",
          height: "600px",
          cursor: "pointer",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.libro.img}
          onClick={() => this.props.cardSelezionata(this.props.libro.asin)}
          style={{ width: "100%", height: "400px", objectFit: "fill" }}
        />
        <Card.Body>
          <Card.Title>{this.props.libro.title}</Card.Title>
          <Card.Text>Categoria: {this.props.libro.category}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Shop</Button>
            <div className="bg-secondary rounded-pill py-2 px-3">
              {this.props.libro.price}€
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
