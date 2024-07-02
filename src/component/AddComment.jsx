import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      author: "",
      comment: "",
      rate: 1,
      elementId: this.props.idLibro,
      createdAt: "",
    },
  };

  fetchNewComment = (e) => {
    e.preventDefault();

    /* Aggiorno lo stato del commento con createdAt e poi esegue la fetch */
    /*  Questo è importante perché setState è asincrono, il che significa che l'aggiornamento dello stato potrebbe non avvenire immediatamente. */
    this.setState(
      (prevState) => ({
        comment: { ...prevState.comment, createdAt: new Date() },
      }),
      () => {
        /* Questa funzione verrà eseguita solo dopo che lo stato è stato aggiornato */
        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              this.setState({
                comment: {
                  author: "",
                  comment: "",
                  rate: 1,
                  elementId: this.props.idLibro,
                },
              });
              document.getElementById("rate-select").value =
                "0"; /* con questo resetto il campo alla opzione 0 */
              alert("Commento aggiunto con successo!");
              this.props.updateFetch(); /* Chiamo il metodo updateFetch per recuperare di nuovo i commenti */
            } else {
              throw new Error("Errore nell'aggiunta del commento");
            }
          })
          .catch((err) => alert(err));
      }
    );
  };

  componentDidUpdate(prevProps) {
    /* Se il nuovo idLibro è diverso dal precedente, aggiorno lo stato, questo devo farlo poiche ho riscontranto un ritardo nell'aggiornamento dell'aggiornamento del elementId
     */ if (prevProps.idLibro !== this.props.idLibro) {
      this.setState({
        comment: { ...this.state.comment, elementId: this.props.idLibro },
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.fetchNewComment} className="mb-2">
        <Form.Control
          type="text"
          placeholder="Aggiuingi un commento"
          value={this.state.comment.comment}
          onChange={(e) =>
            this.setState({
              comment: { ...this.state.comment, comment: e.target.value },
            })
          }
          required
        />
        <Form.Select
          id="rate-select"
          aria-label="Number of seats"
          onChange={(e) =>
            this.setState({
              comment: { ...this.state.comment, rate: e.target.value },
            })
          }
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
  }
}
export default AddComment;
