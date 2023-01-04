import React from 'react'
import '../styles/MovieCardStyle.css'
import { Link } from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'




function MovieCard({ movie }) {

    return (

        <Link className='text-decoration-none ' to={`/movie-details/${movie.id}`}>
            <div id="card" className=" my-2" style={{ width: 380, height: 570 }}>
                <img  className="card-img-top offset-4 offset-md-0" style={{ height: 500 }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="none" />

            </div>
        </Link>


    )
}

export default MovieCard