
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import Movie from './Movie';


//da3c3aa8

const API_URL = 'http://www.omdbapi.com/?apikey=da3c3aa8'
const App= ()=> {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async(title)=>
  {
    const response = await fetch(`${API_URL}&s=${title}&r=json&page=1`);
    const data = await response.json();
   setMovies(data.Search);
  }
/*const displayMovies = async() => {
  const response = await fetch( `${API_URL}&r=json&plot=short&page=1`);
  const data = await response.json();
  console.log(data);
}
*/
  useEffect(()=>{
    //displayMovies();
    searchMovies({searchTerm});

  }, []);

  return (
    <div className="app">
      <header className='header'>
     < img src= "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600" alt='movies' className='header-img' />
      <h1>MoviesLand</h1>
      <div className='search'>
          <input
          placeholder='search for movies...'
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          />
          <img src={SearchIcon} alt='search' onClick={(e)=>{searchMovies(searchTerm); console.log('searching....')}}/>
        
      </div>
      </header>
      <div className='container'>
      {

        movies.length !== 0? movies.map((movie, index)=> <Movie movie1={movie} key={index} />) : <div className='empty'><h2>No movies found...</h2></div>
      }
    </div>
    </div>
  );
}

export default App;
