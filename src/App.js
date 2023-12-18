import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Header from "./components2/Header";

// import HeaderModa from "./components/HeaderModa";
// import BannerModa from "./components/BannerModa";
// import MainModa from "./components/MainModa";
// import ProdutosModa from "./components/ProdutosModa";
// import FooterModa from "./components/FooterModa";

// import Contador from "./components/Contador";

// import ComponenteRevisaoClique from "./components/ComponenteRevisaoClique";
// import ComponenteRevisaoTexto from "./components/ComponenteRevisaoTexto";
// import {useState} from "react";

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato/:nome" element={<Contato />} />
                <Route path="*" element={<PaginaNaoEncontrada />} />
            </Routes>
        </BrowserRouter>
  );
}
export default App;


//===========================================================================
// clique - exibe valor, setClique - modifica(altera) valor
//useState  - atualiza valor, 0 - significa que vai começar com 0(é um número)

// const[clique, setClique] = useState(0)

// <div className="App">
//     <HeaderModa></HeaderModa>
//     <BannerModa></BannerModa>
//     <MainModa></MainModa>
//     <ProdutosModa img="/img/carinha.png" descricao="Camiseta básica masculina" preco="150,00"></ProdutosModa>
//     <ProdutosModa img="/img/camisetaLegal.png" descricao="Camiseta estampada moda gato..." preco="250,00"></ProdutosModa>
//     <ProdutosModa img="/img/homemCamiseta.png" descricao="camiseta estampada gato mago..." preco="235,00"></ProdutosModa>
//     <ProdutosModa img="/img/homemCamisetaGato.png" descricao="Camiseta estampada futGato ..." preco="246,00"></ProdutosModa>
//     <FooterModa></FooterModa>
//
//     <Contador></Contador>
//
//     <ComponenteRevisaoClique clique={clique} setClique={setClique}></ComponenteRevisaoClique>
//     <ComponenteRevisaoTexto clique={clique}></ComponenteRevisaoTexto>
// </div>