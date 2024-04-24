import { add } from "../redux/NoteSlice";
import { del } from "../redux/NoteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Notes() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.note);
  console.log(data);
  const navigate = useNavigate();

  let handleDelete = (index) => {
    dispatch(del(index));
  };
  let handleEdit = (i) => {
    navigate(`/edit/${i}`);
  };
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  const handleSave = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      dispatch(add({ title, content }));
      setTitle(""); // Clearing the title input
      setContent(""); // Clearing the content textarea
    } else {
      // Handle validation or display an error message
      console.log("Title or content is empty!");
    }
  };

  return (
    <>
      <h2 className="title">Notes Manager App</h2>
      <div className="add-note-card-container">
        <div className="add-note-card">
          <div>
            <h4 className="welcome-title"> Welcome to Notes App</h4>
            <input
              className="input-title"
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form"
              placeholder="Note description..."
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="center-btn">
            <button
              className="btn btn-primary mt-2  "
              onClick={() => handleSave()}
            >
              {" "}
              Add Note
            </button>
          </div>
        </div>
      </div>
      <div className="note-list-container">
        <div className="note-list">
          <h4 className="welcome-title"> Notes List </h4>
          <div className="notes-display">
            {data.map((e, i) => {
              return (
                <div key={e.id}>
                  <div
                    className="card"
                    style={{
                      width: "317px",
                      height: "263px",
                      borderRadius: "16px",
                    }}
                  >
                    <div className="card-main">
                      <h4
                        style={{
                          fontSize: "24px",
                          color: "#203562",
                          padding: "20px 0px 0px 15px",
                        }}
                      >
                        {e.title}
                      </h4>{" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="card-body">
                      <p
                        className="mb-3"
                        style={{ fontSize: "16px", color: "303030" }}
                      >
                        {e.content}
                      </p>
                    </div>
                    <div className="center-btn d-flex">
                      <div className="btn">
                        <button
                          className="btn btn-primary mt-2"
                          alt=""
                          onClick={() => handleEdit(i, e.note)}
                        >
                          Edit
                        </button>
                      </div>{" "}
                      &nbsp;
                      <div className="btn">
                        <button
                          className="btn btn-danger mt-2"
                          alt="delete"
                          onClick={() => handleDelete(i)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
