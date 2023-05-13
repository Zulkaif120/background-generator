import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import cls from "classnames";
function Card(props) {
  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={props.imgUrl}
            alt="log image"
            width={260}
            height={160}
          ></Image>
        </div>
      </div>
    </Link>
  );
}

export default Card;
