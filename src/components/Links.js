import styles from "./Styled-Components/Links.module.css";

function Links() {
  function click(e) {
    alert(`voce clicou em ${e.target.textContent}`);
  }
  return (
    <div className={styles.links}>
      <a href="" onClick={click}>
        Home
      </a>
      <a href="" onClick={click}>
        About
      </a>
      <a href="" onClick={click}>
        Contact
      </a>
    </div>
  );
}

export default Links;
