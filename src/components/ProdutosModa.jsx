function ProdutosModa(prop) {
    return (
        <div>
            <img src="/img/coracao.png"/>
            <img src={prop.img} />
            <p>{prop.descricao}</p>
            <p>R$ {prop.preco}</p>

            <button>Ver mais...</button>
        </div>
    )
}

export default ProdutosModa