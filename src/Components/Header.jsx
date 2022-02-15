import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  let navigate = useNavigate();

  return (
  <div className={styles.headerContainer}>
    <button onClick={()=> navigate('/')}>Home</button>
    <h1>My Web Dressing</h1>
  </div>
)};
