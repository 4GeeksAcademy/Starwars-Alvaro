import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartaIndividual } from "../component/cartaIndividual";

export const InfoExtraE = () => {
    const params = useParams();
    const [info, setInfo] = useState("");
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/species/${params.especie}`)
            .then(res => res.json())
            .then(res => setInfo(res.result.properties))
    }, [])


    return (

        <div>
            <CartaIndividual
                nombre={info.name}
                dato1={`Clasificacion: ${info.classification}`}
                dato2={`Designacion: ${info.designation}`}
                dato3={`Altura media: ${info.average_height}, Tiempo de vida medio: ${info.average_lifespan}`}
                dato4={`Tiene el pelo de color ${info.hair_colors}, los ojos de color ${info.eye_colors}, su tono de piel es ${info.skin_colors}`}
                dato5={`Idioma: ${info.language}`}
                foto={`https://starwars-visualguide.com/assets/img/species/${params.especie}.jpg`} />

        </div>
    );
};
