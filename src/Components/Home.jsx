import React, { useContext, useEffect, useState }from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import CategoriesContext from "../Context/CategoriesContext";
import ProductsListContext from '../Context/ProductsListContext';

import styles from './Home.module.css';

export default function Categories() {
  let navigate = useNavigate();
  const { setProductsList } = useContext(ProductsListContext);
  const { categories, setCategories } = useContext(CategoriesContext);

  const fetchCategories = async () => {
    const result = await axios.get('http://localhost:5000/categories/');
    setCategories(result.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCatProducts = async (id) => {
    const result = await axios.get(`http://localhost:5000/products?category_id=${id}`);
    await setProductsList(result.data);
  };

  const handleSelection = (id) => {
    fetchCatProducts(id)
    navigate('/categories')
  }

  return (
  <div className={styles.categoriesContainer}>
    <div className={styles.mainCard} onClick={() => navigate('/products')}>
          <h2>See all clothes</h2>
    </div>
    {categories.map((cat) => {
      return (
        <div key={cat.category_id} className={styles.categoriesCard} onClick={() => handleSelection(cat.category_id)}>
          <h2>{cat.category_name}</h2>
        </div>
      );
    })}
  </div>
)};
