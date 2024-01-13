"use client";

import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCart.module.sass";
import { useState } from "react";

export const ShoppingCart = () => {
  const [countItems, setCountItems] = useState(0);
  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>{countItems}</span>
      <FaShoppingCart />
    </button>
  );
};
