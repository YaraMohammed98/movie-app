import React from 'react'
import '../styles/MovieCardStyle.css'
import { Link } from 'react-router-dom'




function MovieCard({ movie }) {

    return (

        <Link to={`/movie-details/${movie.id}`}>
            <div id="card" className=" my-2" style={{ width: 380, height: 570 }}>
                <img className="card-img-top" style={{ height: 500 }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="none" />
                <div className="card-body d-flex my-1">
                    <p className=" text-white ">{movie.title}</p>
                </div>
            </div>
        </Link>


    )
}

export default MovieCard