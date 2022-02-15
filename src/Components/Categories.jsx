import React, { useContext, useEffect, useState }from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import CategoryContext from "../Context/CategoryContext";
import ProductsContext from "../Context/ProductsContext";

import styles from './Categories.module.css';

export default function Categories() {
  let navigate = useNavigate();
  const { setCategory } = useContext(CategoryContext);
  const { products, setProducts } = useContext(ProductsContext);
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    const result = await axios.get('http://localhost:5000/categories/');
    setCategories(result.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProducts = async (id) => {
    const result = await axios.get(`http://localhost:5000/products/category/${id}`);
    setProducts(result.data);
    console.log(products);
  };

  const handleSelection = (id) => {
    fetchProducts(id)
    setCategory(id);
    navigate('/products')
  }

  return (
  <div className={styles.categoriesContainer}>
    {categories.map((cat) => {
      return (
        <div key={cat.category_id} className={styles.categoriesCard} onClick={() => handleSelection(cat.category_id)}>
          <h2>{cat.category_name}</h2>
        </div>
      );
    })}
  </div>
)};
