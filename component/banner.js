import React from "react";
import styles from "./banner.module.css";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}> Coffee </span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>discover your local coffee shop</p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttontext}
      </button>
    </div>
  );
}

export default Banner;
