import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import StickyBox from "react-sticky-box";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.idLibro,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .then((arrayComment) => {
        console.log(arrayComment);
        this.setState({ commenti: arrayComment });
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchComments();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.idLibro !== this.props.idLibro) {
      this.fetchComments();
    }
  }
  render() {
    return (
      <StickyBox offsetTop={20} offsetBottom={20}>
        <AddComment
          idLibro={this.props.idLibro}
          updateFetch={this.fetchComments}
        />
        <CommentsList
          arrayCommenti={this.state.commenti}
          idLibro={this.props.idLibro}
          updateFetch={this.fetchComments}
        />
      </StickyBox>
    );
  }
}

export default CommentArea;
