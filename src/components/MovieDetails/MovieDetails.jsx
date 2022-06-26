import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

const movies = useSelector(store => store.movies);
const{id} = useParams();
console.log('The movie i click on is', id);
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
                <section>
                    <button onClick={sendBackToHomePage}>Back to Movies</button>
                </section>
                <h3> Details about: {movies[id].title}</h3>
                <div>
                    <img src={movies[id].poster} alt={movies[id].title} />
                </div>
                <div>{movies[id].description}</div>
            </main>
        </>
    )
}

export default MovieDetails;