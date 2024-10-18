export default function Navigation(props){
    function panelAllapotValtoztat(){
        props.panelAllapotValtoztat()
    }
    
    return(
    <>
        <ul>
            <li>Publikus</li>
            <li onClick={panelAllapotValtoztat} className="felvitelGomb">Felvitel</li>
        </ul>
    </>
    )
}