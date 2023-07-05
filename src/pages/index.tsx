import { useEffect, useState } from "react";
import Seo from "../../components/HeadTitle";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.MOVIE_AUTH as string,
    },
  };

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies", options)).json();
      setIsLoading(false);
      setMovies(results);
      console.log(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {isLoading && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .movie img {
          max-width: 80%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie img:hover {
          transform: scale(1.01) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
