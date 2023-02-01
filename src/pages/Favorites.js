import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";



function Favorites() {

  let favIds = useSelector((state) => state.favIds);
  const dispatch = useDispatch();

  const [moviesList, setMoviesList] = useState([]);

  let removeFav = (id) => {
    setMoviesList(moviesList.filter((el) => el.id !== id));
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    let urls = favIds.map(
      (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=8855e44fe388e79ba94db676189dac39`  
    );
    axios
      .all(urls.map((url) => axios.get(url).then((res) => res.data)))
      .then((resArray) => setMoviesList([...moviesList, ...resArray]));
  }, []); 

  useEffect(() => {}, [favIds]);

  return (
    <div className="container">
       <h1>Favorites Movies</h1>
       <hr/>
       <div className="row">
          
            {moviesList.map((movie) => {
              return (
                <div className="card-img-top" style={{width:350}} key={movie.id}>

                    <Card key={movie.id}>
                      <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top"
                      />
                      <Card.Body>
                      <h5 className="card-title">{movie.title}</h5>
                        <button
                          className={"btn btn-primary mt-3"} style={{backgroundColor:'#820000', outline:'none', borderColor:'#820000'}}
                          onClick={() => removeFav(movie.id)}
                        >Remove from favorites</button>
                      </Card.Body>
                    </Card>
                </div>
              );
            })}
    </div>
    </div>
  );
}

export default Favorites;