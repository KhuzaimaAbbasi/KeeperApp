import React, { useState } from "react";


function CreateArea(props) {
  const [Text, setText] = useState({
    title: "",
    content: "",
  });

  function Change(event) {
    const { name, value } = event.target;

    setText((PrevValue) => {
      return { ...PrevValue, [name]: value };
    });
  }

  function prevent(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={prevent}>
        <input
          value={Text.title}
          onChange={Change}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={Text.value}
          onChange={Change}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.Add(Text);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
