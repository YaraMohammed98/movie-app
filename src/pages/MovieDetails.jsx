import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function MovieDetails() {
    const[movie,setMovie] =useState({})
    //to get id from url
    const param =useParams()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=ebd66c875f1fb3785cded885fc0c3451`)
        .then(res=>{
            console.log(res.data)
            setMovie(res.data)
          }) 
        },[])
  return (
    <div className=' d-flex flex-column mx-4 my-5 justify-content-center align-items-center'>
                    <h2 className=" text-white mx-2 ">{movie.title}</h2>
                    <p className='text-muted' style={{fontSize:25}}>{movie.overview}</p>
                    <img style={{width:500, height: 550}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="none" />


    </div>
        
    
  )
}

export default MovieDetails