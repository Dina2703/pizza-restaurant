import styles from "../../styles/Navbar.module.css";
import React from "react";
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import { BsCart2 } from "react-icons/Bs";

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
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>

          <Image src="/img/logo.png" width="100px" height="69px" alt="" />

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <BsCart2 size="30px" color="white" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};
