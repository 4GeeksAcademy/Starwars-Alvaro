import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartaIndividual } from "../component/cartaIndividual";

export const InfoExtraPl = () => {
    const params = useParams();
    const [info, setInfo] = useState("");
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.planeta}`)
            .then(res => res.json())
            .then(res => setInfo(res.result.properties))
    }, [])


    return (

        <div>
            <CartaIndividual
                nombre={info.name}
                dato1={`Genero: ${info.gender}`}
                dato2={`Año de nacimiento:${info.birth_year}`}
                dato3={`Altura: ${info.height}, Peso: ${info.mass}`}
                dato4={`Tiene el pelo de color ${info.hair_color}, los ojos de color ${info.eye_color}, su tono de piel es ${info.skin_color}`}
                foto={`https://starwars-visualguide.com/assets/img/planets/${params.planeta}.jpg`} />

        </div>
    );
};
