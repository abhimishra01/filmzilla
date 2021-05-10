import './App.css';
import MovieCard from './comps/movieCard';
import NavBar from './comps/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="home">
      <MovieCard/>
      </div>
      </div>
  );
}

export default App;
