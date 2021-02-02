import React, { useState, useEffect } from 'react'
import axios from '../axios'
import '../css/Row.css'

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({title, fetchUrl , isLageRow}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable

    useEffect(() => {
        // if [], run onece then don't run it again
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request
        }
        fetchData();
    
    }, [fetchUrl])

    console.log(movies);

    return (
        <div className='row'>
            <h1>{title}</h1>

            <div className="rows__posters">
                {/* {several row posters} */}
                {movies.map(movie => (
                    <img className='row__poster' 
                    key={movie.id}
                    src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>


            
        </div>
    )
}

export default Row
