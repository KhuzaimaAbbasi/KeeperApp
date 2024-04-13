import React from "react";
function Note(props) {
  const { title, content } = props.note;
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          props.check(props.ID);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
