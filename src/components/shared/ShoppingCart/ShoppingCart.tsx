"use client";

import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCartItem } from "./ShoppingCartItem";
import styles from "./ShoppingCart.module.sass";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  const hasItems = cart.length > 0;
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.ShoppingCart}>
      {hasItems && (
        <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      )}
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart />
      </button>
      {isOpen && hasItems && (
        <div className={styles.ShoppingCart__items}>
          {cart.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <button
            className={styles.ShoppingCart__buyButton}
            disabled={isBuying}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
}
