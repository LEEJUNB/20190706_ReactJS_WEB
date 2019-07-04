import React, { Component } from 'react';
import './App.css';

// Movie.js 컴포넌트 불러오고
// div밑에 해당 컴포넌트 이름쓰기
import Movie from './Movie'; 

// Array
const movies = [
  {
    title : "Lion King",
    poster : "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/47/1542927533-lion-king-poster.jpg"
  },
  {
    title : "Man of Steel",
    poster : "https://images-na.ssl-images-amazon.com/images/I/51OrrZRXTvL._SY445_.jpg"
  },
  {
    title : "The Giver",
    poster : "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Giver_poster.jpg/220px-The_Giver_poster.jpg"
  },
  {
    title : "The Big Short",
    poster : "https://images-na.ssl-images-amazon.com/images/I/91dC4o8mScL._SL1500_.jpg"
  }
]

// 나열된 영화이름 배열로 삽입
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie, index => { // movies어레이를 잡고 mapping, index는 현재 제공하는 리스트의 숫자를 의미
          return <Movie title={movie.title} poster={movie.poster} key={} /> // movies array의 엘리먼트를  토대로 한 컴포넌트 제작
        })}
{/* 
        {[
          <Movie title={movies[0].title} poster={movies[0].poster} />
          <Movie title={movies[1].title} poster={movies[1].poster} />
          <Movie title={movies[2].title} poster={movies[2].poster} />
          <Movie title={movies[3].title} poster={movies[3].poster} />
        ]} */}
      </div>
    );
  }
}

// index.js에 컴포넌트 export위함
export default App; 