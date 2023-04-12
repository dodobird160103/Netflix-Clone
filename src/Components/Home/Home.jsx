import './Home.css';
import { Row } from './Row/Row';
import axois from "axios";
import { useEffect } from 'react';

export const Home = () => {

    const apiKey = "87b91e596b93c0a797945593f9a30864";
    const url = "https://api.themoviedb.org/3";

    useEffect(() => {

        const FetchData = async() => {
            const { data }= await axois.get(`${url}/movie/550?api_key=${apiKey}`)
            console.log(data);
        };
        
        FetchData();
      
    }, [])
    
    return(
        <section className="home">

            <div className="banner"></div>

            <Row title={"Popular On Netflix"}/>
            <Row title={"Movies"}/>
            <Row title={"Tv Shows"}/>
            <Row title={"Recently Viewed"}/>
            <Row title={"My List"}/>       

        </section>
    )
}