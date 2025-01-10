import AddMovie from "./AddMovie";
import MoviePage from "./MoviePage";
import react,{useState} from 'react';

const MovieList = () => {
    const movieListDefault = [
        {id:1,name:"Titanic"},
        {id:2,name:"Bahubali"},
        {id:3,name:"Devara"}
    ]
    const [movieList,setmovieList] = useState(movieListDefault);

//Add Movie
const handlerAddMovie=(movieName)=>{
    setmovieList((preMovieList)=>{
        const len = movieList.length;
        return [...preMovieList,{
            id: len>0?len+1:1,
            name:movieName
        } ]
    })
    return true;
}

return (
  <div>
    <AddMovie handlerAddMovie={handlerAddMovie} />
    <MoviePage displayList={movieList} />
  </div>
);
};

export default MovieList;