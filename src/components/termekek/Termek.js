export default function Termek(props) {

    function athelyez() {
        const { szin, ...szuksegesAdatok } = props.elem;
        props.athelyez(szuksegesAdatok);
    }

    function TermekEltavolit() {
        props.TermekEltavolit(props.elem)
    }

    return (
        <div className="termek">
            <p>Neve: {props.elem.kategoria}</p>
            <p>Szín: {props.elem.szin}</p>
            <p>Ár: {props.elem.ar}</p>
            <div className="gombok">
                <button onClick={athelyez}>🛒</button>
                <button onClick={TermekEltavolit}>🗑️</button>
            </div>
        </div>
    )
}