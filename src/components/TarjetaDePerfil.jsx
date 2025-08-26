// Este componente muestra los datos de un usuario.
// Recibe "usuario" como prop desde App.js.
import React from 'react';

const TarjetaDePerfil = ({ usuario }) => {
    return (
        <div className="tarjeta">
            <h2>{usuario.nombre}</h2>
            <p>Profesión: {usuario.profesion}</p>
            <p>Edad: {usuario.edad}</p>
        </div>
    );
};

export default TarjetaDePerfil;

