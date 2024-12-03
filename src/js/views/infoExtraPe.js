import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartaIndividual } from "../component/cartaIndividual";

export const InfoExtraPe = () => {
    const params = useParams();
    const [info, setInfo] = useState("");
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/films/${params.peli}`)
            .then(res => res.json())
            .then(res => setInfo(res.result.properties))
    }, [])


    return (

        <div>
            <CartaIndividual
                nombre={info.title}
                dato1={`Producida por: ${info.producer}`}
                dato2={`Episodio al que pertenecce: ${info.episode_id}`}
                dato3={`Dirigida por: ${info.director}, y estrenada en: ${info.release_date}`}
                dato4={`Inicia con el siguiente argumento: ${info.opening_crawl}`}
                foto={`https://starwars-visualguide.com/assets/img/films/${params.peli}.jpg`} />

        </div>
    );
};
