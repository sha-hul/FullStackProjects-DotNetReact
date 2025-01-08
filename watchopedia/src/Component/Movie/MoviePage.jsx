import react,{useState} from 'react';

const MoviePage = (props) => {
  const movieList = props.displayList || [];

  return (
    <div
      className="container-fluid p-2 my-4"
      style={{ border: "1px solid gray", boxShadow: "0px 1px 2px 0px gray" }}
    >
      {movieList.map((movie) => (
        <div className="row" >
          <div className="col-12 text-center" key={movie.id} >
            <div className="col-2">
              <span className="text-info">{movie.id}</span>
            </div>
            <div className="col-2">
              <span className="text-info">{movie.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviePage;
