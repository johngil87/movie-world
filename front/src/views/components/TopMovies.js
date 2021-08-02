import React from "react";
import { Link } from "react-router-dom";

const TopMovies = ({ movies }) => {
  return (
    <div className="col-3 mb-4">
			<h5 className="mb-4">Películas mas votadas:</h5>
			<div className="list-group">
        {movies.map((movie, index) => (
					<Link to={"/movie/" + movie.id} key={index} className="list-group-item list-group-item-action">
						<p>{movie.title} ({movie.rate})</p>
					</Link>
        ))}
			</div>
		</div>
  );
};

export default TopMovies;
