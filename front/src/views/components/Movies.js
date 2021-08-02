import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ user, movies, isFavorite, method }) => {
  const deleteMovie = (user, movieId) => {
    method(user, movieId);
  };

  return (
    <div className={isFavorite ? "col-12 mb-4" : "col-9 mb-4"}>
			<div className="container">
        <div className={isFavorite ? "row row-cols-1 row-cols-md-4" : "row row-cols-1 row-cols-md-3" }>
          {movies.map((movie, index) => (
					  <div key={index} className="col mb-4">
						  <div className="card">
                <Link to={"/movie/" + movie.id}>
								  <img src={movie.image} className="card-img-top"></img>
                </Link>
							  <div className="card-body pb-2">
								  <span className="font-weight-bolder p-2 border border-dark badge badge-pill badge-warning">{movie.rate}</span>
								  <h6 className="card-title">{movie.title}</h6>
								  <p className="card-text"><span className="font-weight-bolder">Genero: </span>{movie.
                  category}</p>
                  {isFavorite ?
                    <button onClick={() => deleteMovie(user, movie.id)} class="btn btn-danger btn-sm">Eliminar</button> 
                  : null
                  }
							  </div>
						  </div>
					  </div>
          ))}
				</div>
			</div>
		</div>
  );
};

export default Movies;
