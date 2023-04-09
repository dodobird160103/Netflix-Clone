import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Header/Header';
import { TvShows } from './Components/TvShows/TvShows';
import { Movies } from './Components/Movies/Movies';
import { Recently } from './Components/Recently/Recently';
import { List } from './Components/List/List';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/TvShows' element={<TvShows />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/recently_added' element={<Recently />}></Route>
          <Route path='/list' element={<List />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
