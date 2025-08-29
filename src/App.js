import React, { useState } from 'react';
import './App.css';
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

  // Muestra o no la lista de habilidades
    const [mostrarLista, setMostrarLista] = useState(true);

  // Función que oculta o muestra la lista
    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };

  // Arreglo de habilidades
    const habilidades = ['Reparación de equipos electrónicos', 'Uso de instrumentos de medición', 'Soldadura y montaje de circuitos', 'Mantenimiento preventivo y correctivo'];

    return (
        <div className="app-container">
        {/* contenido estático */}
        <Titulo />

      {/* recibe props */}
        <TarjetaDePerfil usuario={usuario} />

        <button className="btn" onClick={toggleLista}>
            {mostrarLista ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
        </button>

      {/* Condicional la lista aparece si mostrarLista es true */}
        {mostrarLista && <ListaDeHabilidades habilidades={habilidades} />}
    </div>
    );
}

export default App;
