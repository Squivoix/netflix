// Componente Inicial
import React, { useState } from "react";
import { useEffect } from "react";

import "./Home.css";

export default function Home() {
    const [tvs, setTvs] = useState();

    const getData = async () => {
        //Create my account and get my api key
        let API_KEY = '011cb5d3d6e81f18cdb89e4a3192b13e'; // <- Not my API
        //A URI to get the movie list
        //Add '?api_key=API_KEY'
        let URI = 'https://api.themoviedb.org/3/genre/tv/list?api_key=' + API_KEY;

        let data = await fetch(URI);
        let result = data.json();

        return result;
    }

    useEffect(() => {
        getData().then((data) => {
            console.log(data);
            setTvs(data);
        });

    }, []);

    let showTvs = () => {
        let html = [];

        tvs?.genres.forEach(element => {
            html.push(
                <span key={element.id}>
                    <p><label>Id: </label> {element.id}</p>
                    <p><label>Name: </label> {element.name}</p>
                </span>
            );

        })

        return html;
    }

    return (
        <>
            { /*TheMovieDB*/}

            { /*Navegar*/}
            { /*Conteúdo*/}
            { /*Rodapé*/}

            <h1>Teste</h1>

            {showTvs()}
        </>
    );
}