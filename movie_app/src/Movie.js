import React from 'react';
import './Movie.css';

function Movie() {
  return (
    <div className="Movie_class">
        <MoviePoster/>
        <h1> this is a movie page </h1>
    </div>
  );
}

function MoviePoster() {
    return (
        <img src="https://am22.akamaized.net/tms/cnt/uploads/2019/05/lion-king-lions-1200x675.jpg" />
    );
}

//App.js에서 Movie로 import할수있도록 해당 컴포넌트 export
export default Movie; 

