export default function KosarSor(props){    
    
    function kosarbolEltavolit(){
        props.kosarbolEltavolit(props.elem)
    }

    return(
        <div className="kosarSor">
            <p>{props.elem.kategoria}</p>
            <p>{props.elem.db}</p>
            <p>{props.elem.ar * props.elem.db}</p>
            <button className = "eltavolitGomb" onClick={kosarbolEltavolit}>🗑️</button>
        </div>
    )
}