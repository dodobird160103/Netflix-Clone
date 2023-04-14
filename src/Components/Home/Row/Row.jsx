import './Row.css';

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export const Row = ({title, fetchURL}) => {
    const [movies, setmovies] = useState([]);

    const BaseURL = "https://api.themoviedb.org/3";
    const imgURL = "https://image.tmdb.org/t/p/original";
   

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(`${BaseURL}${fetchURL}`);
            setmovies(request.data.results);
            
            return request;
        }
        console.log(movies);
        fetchData();
        // Everytime the FetchURL changes the page refetches API

    }, [fetchURL]);


    return(
        <>
        <div className='row'>
            <h2>{title}</h2>
            <br />
            <div className="card">
                {
                    movies.map((item) => {
                        return(
                            <div className="image" key={item.id}>
                                <img src={`${imgURL}${item.poster_path}`} alt="movie" />
                            </div>
                        )        
                })
                }
            </div>
        </div>

        
        </>
    )
}
