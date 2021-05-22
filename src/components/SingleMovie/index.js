import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

const SingleMovie = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);

  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${parseInt(
          id.slice(1),
          10
        )}?api_key=2796089069f7e1ab4a272ee08e4d6561`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        const {
          belongs_to_collection: movieImages,
          budget,
          genres,
          homepage,
          id,
          original_language: language,
          original_title: title,
          overview: desc,
          popularity,
          poster_path: poster,
          production_companies: productionCompanies,
          production_countries: productionCountries,
          release_date: releaseDate,
          revenue,
          runtime: movieRuntime,
          spoken_languages: english,
          status,
          tagline,
          vote_average: voteAverage,
          vote_count: voteCount
        } = data;

        const newMovie = {
          movieImages,
          budget,
          genres,
          homepage,
          id,
          language,
          title,
          desc,
          popularity,
          poster,
          productionCompanies,
          productionCountries,
          releaseDate,
          revenue,
          movieRuntime,
          english,
          status,
          tagline,
          voteAverage,
          voteCount
        };
        setSingleMovie(newMovie);
      } else {
        setSingleMovie(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if(!singleMovie) {
    return <div>No movies displayed</div>
  }
  else {

  return (
    <div>
      {/* <img src={singleMovie.movieImages.poster_path} alt={singleMovie.id} /> */}
      <h3>{singleMovie.status}</h3>
    </div>
  );
  }
};

export default SingleMovie;
