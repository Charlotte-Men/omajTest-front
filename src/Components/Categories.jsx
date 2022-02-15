import React, { useContext, useEffect, useState }from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import AllProductsContext from "../Context/AllProductsContext";
import ProductsListContext from '../Context/ProductsListContext';

import styles from './Categories.module.css';

export default function Categories() {
  let navigate = useNavigate();
  const { setProductsList } = useContext(ProductsListContext);
  const { setAllProducts } = useContext(AllProductsContext);
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    const result = await axios.get('http://localhost:5000/categories/');
    setCategories(result.data);
  };
  const fetchAllProducts = async () => {
    const result = await axios.get('http://localhost:5000/products/');
    setAllProducts(result.data);
  };

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCatProducts = async (id) => {
    const result = await axios.get(`http://localhost:5000/products/category/${id}`);
    await setProductsList(result.data);
  };

  const handleSelection = (id) => {
    fetchCatProducts(id)
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
