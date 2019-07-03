import React from 'react';
import './App.css';

// Movie.js 컴포넌트 불러오고
// div밑에 해당 컴포넌트 이름쓰기
import Movie from './Movie'; 


function App() {
  return (
    <div className="App">
        <Movie />
    </div>
  );
}

// index.js에 컴포넌트 export위함
export default App; 
