import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../redux/NoteSlice";

const Edit = () => {
  const params = useParams();
  let data = useSelector((state) => state.note);
  let dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let navigate = useNavigate();

  const getData = (index) => {
    setTitle(data[index].title);
    setContent(data[index].content);
  };

  useEffect(() => {
    if (Number(params.id) < data.length) {
      getData(Number(params.id));
    } else {
      navigate("/notes");
    }
  }, [params.id, data, navigate]);
  const handleSave = (params) => {
    dispatch(edit({ params, values: { title, content } }));
    navigate("/notes");
    console.log(title, content);
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              className="form"
              id="exampleFormControlTextarea1"
              value={content}
              placeholder="Note Description..."
              rows="3"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div className="center-btn">
            <button
              className="btn btn-primary mt-2 "
              onClick={() => handleSave(params.id)}
            >
              {" "}
              Save Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
