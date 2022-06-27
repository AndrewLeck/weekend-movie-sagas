import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';






function MovieDetails() {

const movies = useSelector(store => store.movies);
const{id} = useParams();
console.log('The movie id is:', id);
const history = useHistory();
    
// This function will send you back to the home page
function sendBackToHomePage(){
    //  console.log('inside send back to home page')
     history.push('/');
 }

    return(
        <>
            <h1>Details</h1>
            <main>
                <container>
                    <section>
                        <button onClick={sendBackToHomePage}>Back to Movies</button>
                    </section>
                    <h3> Details about: {movies[id].title}</h3>
                    <h3>Genre:{movies[id].genres}</h3>
                    <div>
                        <img src={movies[id].poster} alt={movies[id].title} />
                    </div>
                    <div>{movies[id].description}</div>
                </container>
            </main>
        </>
    )
}

export default MovieDetails;