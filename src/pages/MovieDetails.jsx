import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function MovieDetails() {
  const [list,setlist]=useState([])
  const [movie, setMovie] = useState({})
  //to get id from url
  const param = useParams()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=ebd66c875f1fb3785cded885fc0c3451`)
      .then(res => {
        console.log(res.data)
        setMovie(res.data)
      })
  }, [])
  return (
    <div className='d-md-flex my-5 container-fluid align-items-center '>
      <img className='offset-2 d-none d-md-block' style={{ width: 500, height: 600 }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="none" />
        <div className='container-fluid d-md-flex flex-column  align-items-start'>
          <h3 className='text-danger bg-light mt-5'>Movie info</h3>
        <table className="table table-bordered table-striped w-75 offset-md-0 offset-1 table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <td>{movie.title}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">overview</th>
              <td>{movie.overview}</td>
            </tr>
            <tr>
              <th scope="col">Tagline</th>
              <td>{movie.tagline}</td>
            </tr>
            <tr>
              <th scope="col">Vote average</th>
              <td>{movie.vote_average}</td>
            </tr>   
            <tr>
              <th scope="col">Vote Count</th>
              <td>{movie.vote_count}</td>
            </tr>
            <tr>
              <td className='text-center' colSpan="2">
              <button className='btn btn-danger  rounded-4 px-3' >Add To Favourites</button>

              </td>

            </tr>

          </tbody>
        </table>

      </div>


    </div>


  )
}

export default MovieDetails