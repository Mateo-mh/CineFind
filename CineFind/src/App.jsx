import './App.css'
import Header from './Components/navBar/Header'
import Slider from './Components/Slider/Slider'
import GenreMovieList from './Components/GenreMovies/GenreMovieList'

function App() {


  return (
    <>
      <div className="App">
        <Header />
        <Slider />
        <GenreMovieList />
      </div>
    </>
  )
}

export default App
