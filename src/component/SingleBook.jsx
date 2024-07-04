import { Button, Card } from "react-bootstrap";
/* import CommentArea from "./CommentArea"; */

const SingleBook = (props) => {
  return (
    <Card
      className={props.isSelected ? "cardSelezionata" : ""}
      role="card"
      style={{
        border: props.isSelected ? "5px solid red" : "5px solid lightgrey",
        height: "600px",
        cursor: "pointer",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <Card.Img
        variant="top"
        src={props.libro.img}
        onClick={() => props.cardSelezionata(props.libro.asin)}
        style={{ width: "100%", height: "400px", objectFit: "fill" }}
      />
      <Card.Body>
        <Card.Title>{props.libro.title}</Card.Title>
        <Card.Text>Categoria: {props.libro.category}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">Shop</Button>
          <div className="bg-secondary rounded-pill py-2 px-3">
            {props.libro.price}€
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
