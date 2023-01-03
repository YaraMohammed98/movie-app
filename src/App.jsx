import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import { Route,Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} exact element={<Movies/>}/>
        <Route path={"/movie-details/:id"}  element={<MovieDetails/>}/>

      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
