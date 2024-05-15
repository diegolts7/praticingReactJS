import styles from "./Styled-Components/Nome.module.css";

function Nome(props) {
  const nome = props.nome;
  return (
    <div>
      <p className={styles.nome}>Bem vindo ao react {nome}!</p>
    </div>
  );
}

export default Nome;
