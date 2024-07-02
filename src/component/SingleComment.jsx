import { Accordion, Badge, Button } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";

const SingleComment = (props) => {
  const deleteComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        props.oggettoCommenti._id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("commento eliminato");
          props.updateFetch(); /* Richiamo fetchComments per aggiornare la lista dei commenti */
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <Accordion className="border border-1">
      <Accordion.Item eventKey={` ${props.index.toString()} `}>
        <Accordion.Header>{props.oggettoCommenti.comment}</Accordion.Header>
        <Accordion.Body className="d-flex justify-content-between">
          <p className="mb-0 d-inline">{props.oggettoCommenti.elementId}</p>
          <Badge className="d-inline ms-auto pt-2">
            {props.oggettoCommenti.rate}
          </Badge>
          <Button variant="danger" size="sm" onClick={deleteComment}>
            <Trash3 />
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default SingleComment;
