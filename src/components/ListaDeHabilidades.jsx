// Este componente recibe un arreglo de habilidades como prop.
// Si hay habilidades, las muestra en una lista.
// Si no hay, muestra un mensaje alternativo.
import React from 'react';

const ListaDeHabilidades = ({ habilidades }) => {
    return (
        <div>
            {habilidades.length > 0 ? (
            // Si el arreglo tiene elementos, renderizamos una lista <ul>
            <ul>
                {habilidades.map((habilidad, index) => (
                    // Usamos index como "key" porque es una lista simple
                    <li key={index}>{habilidad}</li>
                ))}
            </ul>
            ) : (
            // Si el arreglo está vacío, mostramos este mensaje
            <p>No hay habilidades</p>
            )}
        </div>
    );
};

export default ListaDeHabilidades;
