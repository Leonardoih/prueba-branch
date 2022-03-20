import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='Imagen de emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingenieria de Software en Spotify</p>
      </div>
    </div>
  );
}
