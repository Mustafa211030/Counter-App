import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.title}>Counter App</h1>
      <div className={styles.counterDisplay}>{count}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={increment}>+</button>
        <button className={styles.button} onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
