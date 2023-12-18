import {useState} from "react";

function ComponenteRevisaoClique(props){
    function clicar(){
        props.setClique(
            props.clique + 1)
    }

    return (
        <div>
            <button onClick={clicar}>Clique Aqui</button>
        </div>
    )
}



export default ComponenteRevisaoClique