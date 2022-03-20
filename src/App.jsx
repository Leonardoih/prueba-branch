import logo from './logo.svg';
import './App.css';
import Testiomonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal"></div>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testiomonio/>
    </div>
  );
}

export default App;
