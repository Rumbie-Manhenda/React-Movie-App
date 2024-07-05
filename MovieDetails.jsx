import React from'react';

const MovieDetails = ({movie1}) => {
    return(
        <div className='details-container'>
            <div className='details-container-img'>
                <div className='details-container-img-text'>
                    <h2>{movie1.Title}</h2>
                    <h3>{movie1.Year}</h3>
                    <h3>{movie1.Rated}</h3>
                    <h3>{movie1.Duration}</h3>
                    <h3>{movie1.Genre}</h3>
                </div>
            <img src={movie1.Poster!== "N/A"? movie1.Poster : "https://via.placeholder.com/400"} alt={`${movie1.Title} movie poster`} />    
            </div>
            <div className='details-container-text'>
                <p>{movie1.Genre}</p>
                <div className='buttons'>
                    <button className='button-1'>Play</button>
                    <button className='button-2'>My List</button>
                    <button className='button-3'>Watched</button>
                </div>
            </div>
            <div className='more-details'>
                <p>From the creators of Ice Age comes the year’s funniest, most exhilarating animated adventure. Transported to a magical world, a teenager is recruited to help the “Leafmen” save their world and ours from evil forest warriors. The whole family will love the astonishing animation and the all-star voice cast, which includes
                     Amanda Seyfried, Beyoncé Knowles, Colin Farrell & Steven Tyler!</p>
                <p> Director: Patty \n Producer: Mcharis /n Writer: Writer:
James V. Hart, William Joyce, Dan Shere, Matt Ember, Tom J. Astle
Cast:\n
Colin Farrell, Josh Hutcherson, Amanda Seyfried, Christoph Waltz, Aziz Ansari, </p>
        </div>
        </div>
    );}
export default MovieDetails;

