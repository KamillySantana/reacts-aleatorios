function CardProduto(prop){
    return (
        <div>
            <p>Nome: {prop.nome}</p>
            <p>Descrição: {prop.descricao}</p>
            <p>Valor do Produto: R${prop.preco}</p>
        </div>
    )
}

export default CardProduto