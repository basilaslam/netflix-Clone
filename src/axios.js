import axios from 'axios'


    
    /* base url to make request to the movie database*/
    const instace = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
    })


export default instace;
