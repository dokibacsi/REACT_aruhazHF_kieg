import React from "react";
import Termek from "./Termek";

export default function Termekek(props){

    function athelyez(termek){
        props.athelyez(termek)
    }

    function TermekEltavolit(termek){
        props.TermekEltavolit(termek)
    }

    return(
        <React.Fragment>
            {
                props.lista.map((elem, index) => {
                    return(<Termek elem = {elem} key = {index} index = {index} athelyez = {athelyez} TermekEltavolit = {TermekEltavolit}/>)
                })
            }
        </React.Fragment>
    )
}