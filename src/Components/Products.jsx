import React, { useState, useEffect } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import axios from 'axios';
import styles from './Products.module.css';

export default function Products() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [productsList, setProductsList] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [category, setCategory] = useState();

  const fetchAllProducts = async () => {
    const result = await axios.get('http://localhost:5000/products/');
    setProductsList(result.data);
  };
  const fetchCategories = async () => {
    const result = await axios.get('http://localhost:5000/categories');
    setCategory(result.data);
  };
  const fetchSizes = async () => {
    const result = await axios.get('http://localhost:5000/sizes');
    setSize(result.data);
  };
  const fetchBrands = async () => {
    const result = await axios.get('http://localhost:5000/brands');
    setBrand(result.data);
  };
  const fetchColors = async () => {
    const result = await axios.get('http://localhost:5000/colors');
    setColor(result.data);
  };
  
  useEffect(() => {
    fetchAllProducts();
    fetchCategories()
    fetchSizes();
    fetchBrands();
    fetchColors();
  }, []);

  const fetchSelectedProducts = async (crit) => {
    const result = await axios.get(`http://localhost:5000/products?${createSearchParams(crit)}`);
    setProductsList(result.data);
  };

  useEffect(() => {
    fetchSelectedProducts(searchParams);
  }, [searchParams]);

  const handleSelection = (search) => {
    setSearchParams(search);
  }

  return (
  <div className={styles.FilterContainer}>
    <div className={styles.Filters} >
      <select 
      name="category" 
      onChange={(e) => handleSelection({category_id : e.target.value})}
      >
        <option value="">Choose a category</option>
        {category && category.map((category) => {
      return (
        <option key={category.category_id} value={category.category_id}>
          {category.category_name}
        </option>
        );
      })}
    </select>
    <select 
    name="brand"
    onChange={(e) => handleSelection({brand_id : e.target.value})}
    >
        <option value="">Choose a brand</option>
        {brand && brand.map((brand) => {
      return (
        <option key={brand.brand_id} value={brand.brand_id}>
          {brand.brand_name}
        </option>
      );
    })}
      </select>
      <select 
      name="size"
      onChange={(e) => handleSelection({size_id : e.target.value})}
      >
        <option value="">Choose a size</option>
        {size && size.map((size) => {
      return (
        <option key={size.size_id} value={size.size_id}>
          {size.size_value}
        </option>
      );
    })}
      </select>
      <select 
      name="color"
      onChange={(e) => handleSelection({color_id : e.target.value})}
      >
        <option value="">Choose a color</option>
        {color && color.map((color) => {
      return (
        <option key={color.color_id} value={color.color_id}>
          {color.color_name}
        </option>
      );
    })}
      </select>
    </div>
    <div className={styles.CardContainer} >
      <div className={styles.allProductsCard} onClick={() => fetchAllProducts()}>
          <h2>See all clothes</h2>
      </div>
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
