import {useState} from "react";

function Contador(){
    const [cliques, setCliques] = useState(0)
    const [texto, setTexto] = useState("")

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    //-----------IMC-------------
    function pegarPeso(aleatorio){
        setPeso(aleatorio.target.value)
    }

    function pegarAltura(aleatorio){
        setAltura(aleatorio.target.value)
    }

    //-----------Clicar-------------
    function clicou(){
        setCliques(cliques + 1)
    }

    //-----------Digitar-------------
    function digitou(aleatorio){
        setTexto(aleatorio.target.value)
    }

    return (
        <div>
       {/*-----------Clicar-------------*/}
            <button onClick={clicou}>Clique Aqui</button>
            <p>Voce clicou {cliques} vezes</p>
            {cliques > 50 && <p>Voce clicou mais de 50 vezes</p>}

        {/*-----------Digitar-------------*/}
            <input value={texto} onChange={digitou} />
            <p>Voce digitou: {texto}</p>

        {/*-----------IMC-------------*/}
            <p>Informe sua peso:</p>
            <input value={peso} onChange={pegarPeso}/>
            <p>Informe seu altura:</p>
            <input value={altura} onChange={pegarAltura}/>
            <h4>Seu IMC é: {peso/(altura*altura)}</h4>
        </div>
    )
}

export default Contador
