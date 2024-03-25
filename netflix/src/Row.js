import { useEffect, useState } from 'react';

import './Row.css';
import { getData } from './api';

function Row({ title, isLarge, path }) {
    const [movies, setMovies] = useState();

    let image_host = "https://image.tmdb.org/t/p/original/";

    let fetchData = async () => {
        return await getData(path);
    }

    useEffect(() => {
        let request = fetchData();

        request.then((data) => {
            setMovies(data?.results);
        });
    }, [])

    return (
        <div className="row-container">
            <h2>{title}</h2>
            <div className="row-cards">
                {movies?.map((movie) => {
                    return (
                        <img key={movie?.id} className={`movie-card ${isLarge && "movie-card-large"}`} alt={"Movie " + title + " Banner"} src={isLarge ? image_host + movie?.backdrop_path : image_host + movie?.poster_path} />
                    );
                })}
            </div>
        </div>
    );
}

export default Row;