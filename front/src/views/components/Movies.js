import React from 'react';

const Movies = ({ movies }) => {
  return(
    <div classNameName="row justify-content-around">
        {movies.map((movie,index) =>
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-9">
                <div className="card">   
                  <img className="card-img-top" src={ "https://image.tmdb.org/t/p/w220_and_h330_face"+movie.image} alt={"Card image"+index} style={{width:"100%"}}></img>
                  <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text">Category: {movie.category}</p>
                    <p className="card-text">Rate: {movie.rate}</p>
                  </div>
                </div>
            </div> 
        )}
    </div>
  )
}

export default Movies