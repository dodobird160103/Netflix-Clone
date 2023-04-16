import './Row.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export const Row = ({title, fetchURL}) => {
    const [movies, setmovies] = useState([]);
    const [trailerURL, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    };

    const handleClick = (item) => {
        if(trailerURL)
        {
            setTrailerUrl('');
        }
        else
        {
            movieTrailer(item.name || "").then(url => {
                const urlParams = new URLSearchParams (new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                console.log(setTrailerUrl(urlParams.get('v')));
            }).catch(error => console.log(error));
            
        }
    }

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
                                <img src={`${imgURL}${item.poster_path}`} alt="movie" onClick={() => handleClick(item)}/>
                            </div>
                        )        
                })
                }
            </div>
        </div>
        { trailerURL && <Youtube videoId={trailerURL} opts={opts} /> }
        </>
    )
}
