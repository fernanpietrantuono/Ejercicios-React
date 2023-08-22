import React from 'react'
<Hijo nombre="Chiquito" />;
<Hijo nombre="Filomena" />;
export function Hijo(props) {
    return (
        <h1>Hola, {props.nombre}</h1>
    )
}
