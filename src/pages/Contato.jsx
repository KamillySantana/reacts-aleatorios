import {useParams} from "react-router-dom";

function Contato(){
    const parametros = useParams()

    return (
        <div>
            <h1>Contato aqui, {parametros.nome}</h1>
        </div>
    )
}

export default Contato