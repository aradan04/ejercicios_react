import logo from /*7.- cambio de imagen*/'./deer.webp';
import './App.css';

/*
1.- mover el tamaño del log
logo
2.- cambiar de posición el logo
3.- cambiar los textos
4.- cambiar el background

5.- vaciar la pagina completamente y dejar un hola mundo!
6.- que deje de rotar el logo
7.- cambiar el logo por otra imagen*/

function App() {
  return (
    <div className="App" width="100%"> 
    {//5.- borrar div interno y  en <p> </p> escribir hola mundo
}
      <header className="App-header" >
        <div display="flexbox" /*2.- cambiar de posicion el logo*/flex-direction="horizontal" justify-content="space-between" align-content='top' width="1200px">
        <img  src={logo} className="App-logo" alt="logo"  ></img>
        <img  src={logo} className="App-logo" alt="logo"  ></img>
        </div>
        {//1.- cambiar de tamaño la imagen width ="x" height="x"
        } 
        {//*3.-cambiar textos*
        }
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
