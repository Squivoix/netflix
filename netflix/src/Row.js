import { useEffect, useState } from "react";

import "./Row.css";
import { getData } from "./api";

function Row({ title, isLarge, path }) {
    const [movies, setMovies] = useState();

    let image_host = "https://image.tmdb.org/t/p/original/";

    let fetchData = async () => {
        return await getData(path);
    }

    useEffect(() => {
        fetchData().then((data) => {
            setMovies(data?.results);
        });
    }, [])

    return (
        <div className="teste">
            {title}
            <div className="images">
                {movies?.map((movie) => {
                    console.log(isLarge);
                    let cl = isLarge ? "large" : "normal";

                    return (
                        <img key={movie?.id} className={cl} src={image_host + movie?.backdrop_path} />
                    );
                })}
            </div>
        </div>
    );
}

export default Row;