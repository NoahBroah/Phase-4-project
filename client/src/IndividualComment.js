import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

function IndividualComment({ note, notes, setNotes }) {
  const [errors, setErrors] = useState([]);
  // const [comments, setComments] = useState([]);

  // async function fetchComments() {
  //   return fetch("/notes").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((comments) => setComments(comments));
  //     }
  //   });
  // }

  function handleDeleteClick(id) {
    fetch(`/notes/${id}`, {
      method: "DELETE",
    }).then(res => {
      if(res.ok) {
        setNotes(notes.filter((note) => note.id !== id))
      } else {
        res.json().then( res => setErrors(res.errors))
      }
    })
   
  }

 
  return (
    <div>
      <div>{note?.comment}</div>
      <div>- {note?.user.username}</div>

      <Link className="mx-5 btn btn-light" to={`/notes/${note.id}/edit`}>
        <BsFillPencilFill />
      </Link>
      {errors.length > 0 && (
    <ul style={{ color: "red" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}
      <button
        className="mx-5 btn btn-danger"
        onClick={() => handleDeleteClick(note.id)}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
}

export default IndividualComment;
