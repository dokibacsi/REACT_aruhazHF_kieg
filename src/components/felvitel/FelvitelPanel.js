export default function felivtelPanel(props){
    function panelAllapotValtoztat(){
        props.panelAllapotValtoztat()
    }

    function termekHozzaad(){
        props.termekHozzaad()
    }
    
    
    return(
        <div className="felvitelPanel">
            <div className="fejlec">
                <p>Adatfelviteli panel</p>
                <button onClick={panelAllapotValtoztat}>X</button>
            </div>
            <div className="adatok">
                <label htmlFor="kategoria">Név</label>
                <input type="text" placeholder="Megnevezés" onChange={(e) => props.setKategoriaValue(e.target.value)}/>
                <label htmlFor="szin">Szín</label>
                <input type="text" placeholder="Szín" onChange={(e) => props.setSzinValue(e.target.value)}/>
                <label htmlFor="ar">Ár</label>
                <input type="number" placeholder="Ár" onChange={(e) => props.setArValue(e.target.value)}/>
                <button onClick={termekHozzaad}>Termék hozzáadása</button>
            </div>
        </div>
    )
}