// Este es el componente principal.
// Aquí juntamos todo: Titulo, TarjetaDePerfil y ListaDeHabilidades.
import React, { useState } from 'react';
import './App.css'; // Importamos estilos
import Titulo from './components/Titulo';
import TarjetaDePerfil from './components/TarjetaDePerfil';
import ListaDeHabilidades from './components/ListaDeHabilidades';

function App() {
  // Objeto usuario que será pasado como prop
    const usuario = {
        nombre: 'Juan Pablo',
        profesion: 'Técnico electrónico',
        edad: 41,
    };

  // Estado que controla si la lista se muestra o no
    const [mostrarLista, setMostrarLista] = useState(true);

  // Función para alternar entre mostrar y ocultar la lista
    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };

  // Arreglo de habilidades a renderizar
    const habilidades = ['Reparación de equipos electrónicos', 'Uso de instrumentos de medición', 'Soldadura y montaje de circuitos', 'Mantenimiento preventivo y correctivo'];

    return (
        <div className="app-container">
        {/* Componente con contenido estático */}
        <Titulo />

      {/* Componente que recibe props */}
        <TarjetaDePerfil usuario={usuario} />

      {/* Botón que controla la visibilidad de la lista */}
        <button className="btn" onClick={toggleLista}>
            {mostrarLista ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
        </button>

      {/* Renderizado condicional: la lista solo aparece si mostrarLista es true */}
        {mostrarLista && <ListaDeHabilidades habilidades={habilidades} />}
    </div>
    );
}

export default App;
