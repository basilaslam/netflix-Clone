import React, { useState, useEffect } from 'react'
import requests from '../request'
import axios from '../axios'
import '../css/Banner.css'

const base_url = 'https://image.tmdb.org/t/p/original';

function Row() {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable

    useEffect(() => {
        // if [], run onece then don't run it again
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies((request.data.results[Math.floor(Math.random() * 
                request.data.results.length)]));
            
        }
        fetchData();
    
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n- 1) + "..." : str;
    }

    return (
        <header className='banner' 
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
            backgroundPosition: 'center center'
        }}>
            <div className="banner__content">
        {/* {title} */}
        <h1 className='banner__title'>{movies?.title || movies?.name || movies?.original_name}</h1>
        {/* {div > 2 Button} */}
        <div className="banner__buttons">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        {/* {Discription} */}
        <h1 className='banner__discription'>{truncate(movies.overview,150)}</h1>
           

        </div>
        <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Row