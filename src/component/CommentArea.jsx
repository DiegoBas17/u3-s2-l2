import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import StickyBox from "react-sticky-box";

const CommentArea = (props) => {
  /*  state = {
    commenti: [],
  }; */
  const [commenti, setCommenti] = useState([]);

  const fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + props.idLibro,
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
        setCommenti(arrayComment);
      })
      .catch((err) => alert(err));
  };

  /* componentDidMount() {
    this.fetchComments();
  } */
  useEffect(() => {
    fetchComments();
  }, [props.idLibro]);

  /*   componentDidUpdate(prevProps) {
    if (prevProps.idLibro !== this.props.idLibro) {
      this.fetchComments();
    }
  } */

  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <AddComment idLibro={props.idLibro} updateFetch={fetchComments} />
      <CommentsList
        arrayCommenti={commenti}
        idLibro={props.idLibro}
        updateFetch={fetchComments}
      />
    </StickyBox>
  );
};

export default CommentArea;
