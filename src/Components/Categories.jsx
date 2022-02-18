import React, { useContext } from "react";
import axios from 'axios';

import CategoriesContext from "../Context/CategoriesContext";
import ProductsListContext from '../Context/ProductsListContext';

import styles from './Categories.module.css';

export default function Categories() {
  const { categories } = useContext(CategoriesContext);
  const { productsList, setProductsList } = useContext(ProductsListContext);

  const handleSelection = async (id) => {
    const result = await axios.get(`http://localhost:5000/products?category_id=${id}`);
    await setProductsList(result.data);
  };
  
  return (
  <div className={styles.FilterContainer}>
    <div className={styles.Filters}>
      {categories.map((cat) => {
      return (
        <button key={cat.category_id} className={styles.categoriesButton} onClick={() => handleSelection(cat.category_id)}>
          {cat.category_name}
        </button>
      );
    })}
    </div>
    <div className={styles.CardContainer}>
    {productsList && productsList.length !== 0 ?
    productsList.map((pdt) => {
      return (
        <div key={pdt.product_id} className={styles.productsCard} >
          <img src={pdt.product_img} alt={pdt.name} className={styles.cardImage} />
          <h2>{pdt.product_name}</h2>
          <p>{Number.parseFloat(pdt.product_price).toFixed(2)}€</p>
        </div>
        );
      }) :
      <h3>Oops ! There are no products in this category yet</h3>
    }
    </div>
  </div>
)};
