import { useState } from 'react';
import './App.css';

//import Card from './components/Card';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className='linha'>
        <Intervalo min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>

      </div>
      <div className='linha'>
        <Soma min={min} max={max}></Soma>
        <Media min={min} max={max}></Media>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
