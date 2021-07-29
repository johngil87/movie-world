import React from 'react';

const TopMovies = ({movies}) => {
  return(
    <div classNameName="row justify-content-around">
        {movies.map((movie,index) =>
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-9">
              <div>{movie.title}</div>
              <div>{movie.rate}</div>
            </div> 
        )}
    </div>
  )
}

export default TopMovies