// Este componente muestra un título estático.
// No recibe props porque su contenido es fijo.
import React from 'react';

const Titulo = () => {
    return (
        <div>
            <h1>Mi Perfil</h1>
            <p>Bienvenido a mi página personal</p>
        </div>
    );
};

export default Titulo;
