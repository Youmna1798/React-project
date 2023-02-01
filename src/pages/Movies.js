import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { axiosInstance } from "../network/axiosInstance";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "../loginForm.css";
import "./movies.css"
export default function MoviesDetails() {
  // const params = useParams();
  const [movies, setMovies] = useState([]);
  const favIds = useSelector((state) => state.favIds);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  let isFav = (id) => {
    return favIds.find((el) => el === id);   //check mwgoda wala la2
  };

  let toggleFav = (id) => {
    isFav(id)
      ? dispatch({ type: "REMOVE", payload: id })   //lw mwgoda
      : dispatch({ type: "ADD", payload: id });
  };
  useEffect(() => {
    // axiosInstance
      axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=0635aa13dcf8f77aa3d3a659b24086cc&page=5")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
      console.log(movies)
  return (
    <div className="container ba" style={{width:"100%"}}>
    <h1>Movies</h1>
    <hr/>
    <div className="row">
      {movies.map((movie) => {
      return (
        <div className="card col-3 p-3 mb-4" style={{width:"25 rem"}} key={movie.id} >
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
              <button
                className={`btn btn-primary  mx-2 ${isFav(movie.id) ? "active" : ""}`} style={{backgroundColor:'#820000', outline:'none', borderColor:'#820000'}}
                onClick={() => toggleFav(movie.id)} 
              >A or R</button>
          <Link to={`/watchMovie/${movie.id}`} className="btn btn-primary" style={{backgroundColor:'purple', borderColor:'purple'}}>Movie details</Link>
        </div>
      </div>
      );
      })}
    </div>
    </div>
    );

}


