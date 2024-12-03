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
                dato1={`Diametro: ${info.diameter}`}
                dato2={`Diracion de un día: ${info.rotation_period}H Duracion de un año: ${info.orbital_period} días`}
                dato3={`Gravedad: ${info.gravity}p, Cantidad de seres con vida: ${info.population}`}
                dato4={`Clima: ${info.climate}, Terreno: ${info.terrain}, Agua en la superficie: ${info.surface_water}`}
                foto={`https://starwars-visualguide.com/assets/img/planets/${params.planeta}.jpg`} />

        </div>
    );
};
