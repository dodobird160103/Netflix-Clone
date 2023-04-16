import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './Banner.css';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';

export const Banner = ({fetchURL}) => {
    /* Background image
        title
        2 buttons - Play and My list
        description */

    const imgURL = "https://image.tmdb.org/t/p/original";
    const BaseURL = "https://api.themoviedb.org/3";

    const [Img, setImg] = useState([]);

    useEffect(() => {
        async function imgData() {
            const request = await axios.get(`${BaseURL}${fetchURL}`);
            // Get random movie from results array 
            setImg(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]); 

            return request;
        }

        // Calling Function
        imgData();
        
    }, []);
    
    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${Img.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                {/*<img src={`${imgURL}${Img.poster_path}`} alt={Img.name} />*/}

                <h1 className="banner__title" >{Img?.title || Img?.name || Img?.original_name}</h1>

                <div className="banner__buttons" >
                    <buttons className="banner__button"><AiOutlinePlayCircle /><p >Play</p></buttons>
                    <buttons className="banner__button"><AiOutlinePlus /><p >My List</p></buttons>
                </div>

                <h4 className="description">
                    {Img?.overview}
                </h4>
            </div>

            <div className="fade--bottom">
            </div>
        </header>
    )
}