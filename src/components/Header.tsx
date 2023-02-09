import styles from "./Header.module.css";

import igniteRocket from "../imgs/rocket.svg";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteRocket} alt="" />
        <p>to</p><span>do</span>
      </header>
    </div>
  )
}