import Nome from "./Nome";
import styles from "./Styled-Components/Cabecalho.module.css";
import Links from "./Links";

function Cabecalho() {
  return (
    <div className={styles.cabecalho}>
      <Nome nome="Diego" />
      <Links />
    </div>
  );
}

export default Cabecalho;
