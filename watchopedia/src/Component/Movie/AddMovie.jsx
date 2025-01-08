import React,{useState} from "react";

const AddMovie = (props) => {
  const [movieName, setmovieName] = useState("");
  const submitMovie = (e) => {
    e.preventDefault();
    if (!movieName) {
      alert("Movie name cannot be empty! 🎥");
      return;
    }

    const result = props.handlerAddMovie(movieName);
    setmovieName("")
    if (result) {
      alert("Movie added successfully! 🎥");
      e.target.reset(); // Clear the input field
    } else {
      alert("Failed to add the movie. Try again.");
    }
  };

  return (
    <form onSubmit={submitMovie}>
      <div
        className="container-fluid text-light p-4 my-4"
        style={{ border: "1px solid gray", boxShadow: "0px 1px 2px 0px gray" }}
      >
        <div className="row">
          <div className="col-12 text-center">Add Movie Now...🎥</div>
        </div>
        <div className="row p-2 m-2">
          <div className="col-10">
            <input
              type="text"
              placeholder="Movie Name.."
              className="form-control"
              name="movie"
              onChange={(e) => setmovieName(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMovie;