import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <>
      {props.arrayCommenti
        .filter((arrayCommenti) => arrayCommenti.elementId === props.idLibro)
        .map((commentoLibro, index) => {
          return (
            <SingleComment
              oggettoCommenti={commentoLibro}
              index={index}
              key={index}
              updateFetch={props.updateFetch}
            />
          );
        })}
    </>
  );
};

export default CommentsList;
