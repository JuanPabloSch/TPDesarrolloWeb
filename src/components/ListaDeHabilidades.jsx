// Este componente recibe un arreglo de habilidades como prop.
import React from 'react';

const ListaDeHabilidades = ({ habilidades }) => {
    return (
        <div>
            {habilidades.length > 0 ? (
            // Si el arreglo tiene elementos se muestan en una lista
            <ul>
                {habilidades.map((habilidad, index) => (
                    // Usamos index como "key"
                    <li key={index}>{habilidad}</li>
                ))}
            </ul>
            ) : (
            <p>No hay habilidades</p>
            )}
        </div>
    );
};

export default ListaDeHabilidades;
