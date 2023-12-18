import styles from "./PrimeiroComponente.module.css"
function PrimeiroComponente() {
    return (
        <div>
            <h1 className={styles.titulo}>Meu Primeiro componente</h1>
            <h2 className={styles.subtitulo}>React é muito legal!</h2>
            <p style={{color: "green", fontSize: "25px"}}>Um teste aqui</p>
        </div>
    )
}

export default PrimeiroComponente
