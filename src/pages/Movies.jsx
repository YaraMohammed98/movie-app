import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

function Movies() {

   const[Movies,setMovies]= useState([])

   //Get data from api
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ebd66c875f1fb3785cded885fc0c3451")
        .then(res=>{
          console.log(res.data.results)
          setMovies(res.data.results)
        })   
    },[])

  return (
    <div className='bg-dark  d-flex justify-content-center '>
      <div className='row m-0 '>
        {Movies.map(movie=>{
        return (
          <div className="col-md-3"  key={movie.id}>
            <MovieCard movie={movie}/>
          </div>
        )
      })}
      </div>
     
      
    </div>
  )
}

export default Movies