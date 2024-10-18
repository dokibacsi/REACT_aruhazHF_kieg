import React from "react"
import KosarSor from "./KosarSor"

export default function Kosar(props) {

    function kosarbolEltavolit(termek){
        props.kosarbolEltavolit(termek)
    }

    return (
        <>
            {   
                props.lista.map((elem, index) => {
                    return(<KosarSor elem = {elem} key = {index} index = {index} kosarbolEltavolit = {kosarbolEltavolit}/>)
                })
            }
        </>
    )
}