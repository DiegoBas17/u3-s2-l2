import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  /* state = {
    comment: {
      author: "",
      comment: "",
      rate: 1,
      elementId: this.props.idLibro,
      createdAt: "",
    },
  }; */

  const [comment, setComment] = useState({
    author: "",
    comment: "",
    rate: 1,
    elementId: props.idLibro,
    createdAt: "",
  });

  const handleFieldChange = (propertyName, propertyValue) => {
    setComment({ ...comment, [propertyName]: propertyValue });
  };

  const fetchNewComment = (e) => {
    e.preventDefault();

    handleFieldChange("createdAt", new Date());
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          handleFieldChange("elementId", props.idLibro);
          document.getElementById("rate-select").value =
            "0"; /* con questo resetto il campo alla opzione 0 */
          alert("Commento aggiunto con successo!");
          props.updateFetch(); /* Chiamo il metodo updateFetch per recuperare di nuovo i commenti */
        } else {
          throw new Error("Errore nell'aggiunta del commento");
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    handleFieldChange("elementId", props.idLibro);
  }, []);

  return (
    <Form onSubmit={fetchNewComment} className="mb-2">
      <Form.Control
        type="text"
        placeholder="Aggiuingi un commento"
        value={comment.comment}
        onChange={(e) => handleFieldChange("comment", e.target.value)}
        required
      />
      <Form.Select
        id="rate-select"
        aria-label="Number of seats"
        onChange={(e) => handleFieldChange("rate", e.target.value)}
      >
        <option value="0">Voto da 1 a 5</option>{" "}
        {/* dovrei aggiungere il fatto di resettare il valore di questo select una volta inviato il commento */}
        <option value="1">🌟</option>
        <option value="2">🌟🌟</option>
        <option value="3">🌟🌟🌟</option>
        <option value="4" className="mx-1">
          🌟🌟🌟🌟
        </option>
        <option value="5">🌟🌟🌟🌟🌟</option>
      </Form.Select>
      <Button type="submit" variant="outline-secondary" id="button-addon2">
        Invia Commento
      </Button>
    </Form>
  );
};

export default AddComment;
