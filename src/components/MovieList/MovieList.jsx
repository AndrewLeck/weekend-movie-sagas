import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

function MovieList() {
    const [movieDetails, setMovieDetail] = useState([]);
    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //This function will show the details of the movie in new page
function showMeDetails(){
        console.log('Inside show me details');
        console.log('my list of movies are:', movies)
        console.log(movieDetails)
        history.push(`/details/${movieDetails}`)
        dispatch({
            type: 'GET_DETAILS',
            payload: movieDetails
        })

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies" >
                {movies.map(movie => {
                    return (
                        <div key={movie.id}  onChange={evt => setMovieDetail(evt.target.value)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} value={movieDetails} onClick={showMeDetails}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;