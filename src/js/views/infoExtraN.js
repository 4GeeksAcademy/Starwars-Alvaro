import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartaIndividual } from "../component/cartaIndividual";

export const InfoExtraN = () => {
    const params = useParams();
    const [info, setInfo] = useState("");
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${params.nave}`)
            .then(res => res.json())
            .then(res => setInfo(res.result.properties))
    }, [])


    return (

        <div>
            <CartaIndividual
                nombre={info.name}
                dato1={`Modelo de la nave: ${info.model}, Clase de la nave: ${info.starship_class}`}
                dato2={`Fabricante de la nave: ${info.manufacturer}, Coste de la nave: ${info.cost_in_credits} creditos`}
                dato3={`Tamaño de la nave: ${info.length} metros cuadrados`}
                dato4={`Tripulacion ${info.crew}, Pasajeros: ${info.passengers}`}
                dato5={`Velocidad máxima dentro de la atmosfera: ${info.max_atmosphering_speed} Km/H, Calificacion del hyperdrive${info.hyperdrive_rating}`}
                dato6={`Capacidad de cargamento: ${info.cargo_capacity}, Duracion de suministros: ${info.consumables}`}
                foto={`https://starwars-visualguide.com/assets/img/starships/${params.nave}.jpg`} />

        </div>
    );
};
