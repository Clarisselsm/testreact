import React, {useState, useEffect} from 'react'
import axios from 'axios'

const movieURL = 'https://api.themoviedb.org/3/movie/popular?api_key='
const apiKey = 'e4943bb541605c50d3877eebda6ea42c'
const movieTitleURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`
 
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [movieTitle, setMovieTitle] = useState('')

    const popularMovies = async () => {
        const response = await axios.get(`${movieURL}${apiKey}`)
        console.log(response.data.results)
        setMovies(response.data.results)
    }

    const searchTitle = async(searchTitle) => {
        const response = await axios.get(`${movieTitleURL}${searchTitle}`)
        setMovies(response.data.results)
    }

    const handleChange =(event) => {
        setMovieTitle(event.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchTitle(movieTitle)
    }

    useEffect(() => {
        popularMovies();
    }, [])

  return (
    <div className="container" style={{marginTop:"50px"}}>
        <form>
            <div className="input-group mb-3">
                <input type="text" name="searchTitle" onChange={handleChange} value={movieTitle} 
                className="form-control" placeholder='Search movies by title'/>
                <span>
                    <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
                </span>

            </div>
        </form>


            <div className="row row-cols-1 row-cols-md-3 g-4">           
                {movies.map((movielist) => {
                    return (
                        <div className="col" key={movielist.id}>
                        <div className="card h-100">
                            <img src={'https://image.tmdb.org/t/p/w300/' + movielist.poster_path} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{movielist.original_title}</h5>
                                <p className="card-text">{movielist.overview}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Release Date: {movielist.release_date}</small>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>    
    </div>
  )
}

export default Movies
