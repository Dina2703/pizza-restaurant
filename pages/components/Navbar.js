import styles from "../../styles/Navbar.module.css";
import React from "react";
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <AiOutlinePhone color="orange" size="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>012 34 56 67</div>
        </div>
      </div>
      <div className={styles.item}>center</div>
      <div className={styles.item}>right</div>
    </div>
  );
};
