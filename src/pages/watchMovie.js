import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function WatchMovie() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  // console.log(params);
  useEffect(() => {
    // axiosInstance
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ec66c025d6e1cf8ec1fe7d18187faf6c`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(params.id)
  return (
    
    <div className>
  

    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} style={{width:350}} className="card-img-top" alt="..."/> 
      <h1>Details</h1>
      <hr/>
     <h3 className="card-text">Movie Name :  {details.title}</h3>
      <br/>
      <h5 className="card-text">Rate : {details.vote_average}</h5>
       <br/>
      <p className="card-text">Review :  {details.overview}</p>
      
    
    </div>

  );
}