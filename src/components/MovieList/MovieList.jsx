import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link} from 'react-router-dom'

import './MovieList.css'

function MovieList() {
    // const [movieDetails, setMovieDetail] = useState([]);
    
    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

//This function will show the details of the movie in new page
function showMeDetails(){
    console.log('Inside show me details');
    // console.log('my list of movies are:', movies)
    // console.log('The movie I clicked on is:')
        // history.push(`/details`)
        // dispatch({
        //     type: 'GET_DETAILS',
            
        // })

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies" >
                {movies.map((movie, i) => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link key={movie.id} to={`/details/${i}`}>
                            <img src={movie.poster} alt={movie.title} onClick={showMeDetails} />
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;