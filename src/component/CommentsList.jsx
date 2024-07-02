import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <>
        {this.props.arrayCommenti
          .filter(
            (arrayCommenti) => arrayCommenti.elementId === this.props.idLibro
          )
          .map((commentoLibro, index) => {
            return (
              <SingleComment
                oggettoCommenti={commentoLibro}
                index={index}
                key={index}
                updateFetch={this.props.updateFetch}
              />
            );
          })}
      </>
    );
  }
}
export default CommentsList;
