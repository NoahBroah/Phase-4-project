import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


function IndividualComment({ comment, user, note }) {
  const [errors, setErrors] = useState([]);
  // const [comments, setComments] = useState([]);

  // async function fetchComments() {
  //   return fetch("/notes").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((comments) => setComments(comments));
  //     }
  //   });
  // }
  console.log(note.user_id)
  console.log(user.id)

  function handleDeleteClick(id) {
    fetch(`/notes/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp?.errors) {
        setErrors(resp.errors);
        console.log(errors);
      } else {
        // setComments({...comments});
        console.log(comment)
      }
    });
  }


  return (
    <div>
      <div>{comment}</div>
      <div>- {user.username}</div>
     
      
      <Link
        className="mx-5 btn btn-light"
        to={`/notes/${note.id}/edit`}
      >
        <BsFillPencilFill />
      </Link>
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
