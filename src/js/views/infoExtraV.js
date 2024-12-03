import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartaIndividual } from "../component/cartaIndividual";

export const InfoExtraV = () => {
    const params = useParams();
    const [info, setInfo] = useState("");
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.vehiculo}`)
            .then(res => res.json())
            .then(res => setInfo(res.result.properties))
    }, [])


    return (

        <div>
            <CartaIndividual
                nombre={info.name}
                dato1={`Modelo del vehiculo: ${info.model}, Clase del vehiculo: ${info.vehicle_class}`}
                dato2={`Fabricante del vehiculo: ${info.manufacturer}, Coste del vehiculo: ${info.cost_in_credits} creditos`}
                dato3={`Tamaño del vehiculo: ${info.length} metros cuadrados`}
                dato4={`Tripulacion ${info.crew}, Pasajeros: ${info.passengers}`}
                dato5={`Velocidad máxima dentro de la atmosfera: ${info.max_atmosphering_speed} Km/H`}
                dato6={`Capacidad de cargamento: ${info.cargo_capacity}, Duracion de suministros: ${info.consumables}`}
                foto={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehiculo}.jpg`} />

        </div>
    );
};
