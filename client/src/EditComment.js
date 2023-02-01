import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditComment({ projects }) {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  function handleEditSubmit(e) {
    e.preventDefault();

    const editComment = { comment: comment };

    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editComment),
    })
      .then((resp) => resp.json())
      .then((editComment) => {
        if (editComment?.errors) {
          setErrors(editComment.errors);
        } else {
          setComment();
          console.log(editComment);
        }
      });
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleEditSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Edit your comment</h3>
          <div className="form-group mt-3">
            <label>Comment</label>
            <input
              type="comment"
              name="comment"
              className="form-control mt-1"
              placeholder="Edit Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          {errors.length > 0 && (
    <ul style={{ color: "red" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditComment;
