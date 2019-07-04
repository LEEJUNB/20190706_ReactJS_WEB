import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
  render() {
    //console.log(this.props);
    return (
      <div className="Movie_class">
          <MoviePoster poster={this.props.poster}/>
          <h1> {this.props.title} </h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
    render() {
      //console.log(this.props)
      return (
        <img src={this.props.poster}/>
    );
  }
}

//App.js에서 Movie로 import할수있도록 해당 컴포넌트 export
export default Movie; 

