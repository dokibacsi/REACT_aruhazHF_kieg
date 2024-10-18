import './App.css';
import Kosar from './components/kosar/Kosar';
import Navigation from './components/navigation/Navigation';
import Termekek from './components/termekek/Termekek';
import FelvitelPanel from './components/felvitel/FelvitelPanel';
import { kosarLista, termekLista } from './datas';
import { useState } from "react"

function App() {
  const [klist, setKList] = useState(kosarLista)
  const [tlist, setTList] = useState(termekLista)
  const [panelBool, setPanelAllapot] = useState(false);
  const [kategoriaValue, setKategoriaValue] = useState('');
  const [szinValue, setSzinValue] = useState('');
  let [arValue, setArValue] = useState(0);

  function athelyez(termek) {
    const ujKosarList = [...klist]
    console.log(ujKosarList)
    console.log(termek)
    let hunci = 0
    while(hunci < ujKosarList.length && ujKosarList[hunci].kategoria !== termek.kategoria){
      hunci++
    }
    if(hunci < ujKosarList.length){
      ujKosarList[hunci].db += 1
    }else{
      termek.db = 1
      ujKosarList.push(termek)
    }
    setKList(ujKosarList)

  }

  function panelAllapotValtoztat(){
    let panelAllapot = panelBool
    if(panelAllapot === true){
      setPanelAllapot(false)

    }else{
      setPanelAllapot(true)
    }
    
  }

  function termekHozzaad(){
    let ujLista = [...tlist]
    if(arValue < 0){
      setArValue(1);
    }
    const ujTermek = {
      kategoria: kategoriaValue,
      szin: szinValue,
      ar: parseInt(arValue),
      db: 0,
    }
    ujLista.push(ujTermek)
    setTList(ujLista) // Új termék hozzáadása a terméklistához
    console.log(ujLista)
  }

  function kosarbolEltavolit(termek){
    const ujKosarList = klist.map(elem => {
      if (elem.kategoria === termek.kategoria && elem.szin === termek.szin) {
          if (elem.db > 1) {
              return { ...elem, db: elem.db - 1 };
          } else {
              return null;
          }
      }
      return elem;
  }).filter(elem => elem !== null);

  setKList(ujKosarList);
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>

      <main>
        <div className='navigation'>
          <Navigation panelAllapotValtoztat = {panelAllapotValtoztat}/>
        </div>
        <article>
        <div className="termekek">
          <Termekek lista={tlist} athelyez={athelyez} />
        </div>
        <div className="kosar">
          <div className='elemek'>
            <p>termék</p>
            <p>darab</p>
            <p>ár</p>
            <p>eltávolít</p>
          </div>
          <Kosar lista={klist} kosarbolEltavolit = {kosarbolEltavolit} />
        </div>
        {panelBool && (
            <FelvitelPanel 
              termekHozzaad={termekHozzaad}
              panelAllapotValtoztat = {panelAllapotValtoztat}
              kategoriaValue={kategoriaValue}
              setKategoriaValue={setKategoriaValue}
              szinValue={szinValue}
              setSzinValue={setSzinValue}
              arValue={arValue}
              setArValue={setArValue}
            />
          )}
        </article>
      </main>
    </div>
  );
}

export default App;
