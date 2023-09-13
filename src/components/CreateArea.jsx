import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expandTextArea() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <TextField
            name="title"
            onChange={handleChange}
            value={note.title}
            label="Title"
            variant="outlined"
          />
        ) : null}
        <TextareaAutosize
          name="content"
          onClick={expandTextArea}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          minRows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
