import { useHistory } from 'react-router-dom';

function MovieDetails() {
    const history = useHistory()
    
    function sendBackToHomePage(){
        console.log('inside send back to home page')
        history.push('/');
    }
    
    return(
        <>
            <h1>Details</h1>
            <main>
                <section>
                    <button onClick={sendBackToHomePage}> Back to Movies </button>
                </section>
            </main>
        </>
    )
}

export default MovieDetails;