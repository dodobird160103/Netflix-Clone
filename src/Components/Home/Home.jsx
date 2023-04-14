import './Home.css';
import { Row } from './Row/Row';
import { Banner } from './Banner/Banner';

export const Home = () => {

    const API_KEY = "87b91e596b93c0a797945593f9a30864";
    
    const request = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    }  

    return(
        <section className="home">
            
            {/* Banner Image */}
            <Banner fetchURL={request.fetchNetflixOriginals} />

            {/* Row Categories */}
            <Row title={"Netflix Originals"} fetchURL={request.fetchNetflixOriginals}/>
            <Row title={"Trending Now"} fetchURL= {request.fetchTrending}/>
            <Row title={"Top Rated"} fetchURL= {request.fetchTopRated}/>
            <Row title={"Action Movies"} fetchURL= {request.fetchActionMovies}/>
            <Row title={"Comedy Movies"} fetchURL= {request.fetchComedyMovies}/>
            <Row title={"Horror Movies"} fetchURL= {request.fetchHorrorMovies}/>
            <Row title={"Romance Movies"} fetchURL= {request.fetchRomanceMovies}/>
            <Row title={"Documentaries"} fetchURL= {request.fetchDocumentaries}/>
            
        </section>
    )
}