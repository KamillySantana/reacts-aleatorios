import cssHeader from "./HeaderModa.module.css"
import NavModa from "./NavModa";
function HeaderModa() {
    return (
        <div className={cssHeader.fundo}>
            <p style={{color: "white", fontWeight: "bold"}}>Moda Legal</p>
            <div className={cssHeader.divMenu}>
                <NavModa></NavModa>
                <select name="" id="">
                    <option value="">BR</option>
                    <option value="">BR</option>
                    <option value="">BR</option>
                    <option value="">BR</option>
                </select>
                <img src="/img/coracao.png"/>
                <img src="/img/carrinho.png"/>
            </div>
        </div>
    )
}

export default HeaderModa