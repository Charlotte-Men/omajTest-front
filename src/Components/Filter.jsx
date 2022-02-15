import React, {useState, useEffect, useContext } from "react";
import axios from 'axios';
import AllProductsContext from "../Context/AllProductsContext";
import ProductsListContext from '../Context/ProductsListContext';
import styles from './Filter.module.css';

export default function Filter() {
  const { allProducts } = useContext(AllProductsContext);
  const { productsList, setProductsList } = useContext(ProductsListContext);
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const fetchSizes = async () => {
    const result = await axios.get('http://localhost:5000/products/size');
    setSize(result.data);
  };
  const fetchBrands = async () => {
    const result = await axios.get('http://localhost:5000/products/brand');
    setBrand(result.data);
  };
  const fetchColors = async () => {
    const result = await axios.get('http://localhost:5000/products/color');
    setColor(result.data);
  };
  
  useEffect(() => {
    fetchSizes();
    fetchBrands();
    fetchColors();
  }, []);

  const handleAllProducts = () => {
    setProductsList(allProducts);
  }

  return (
  <div className={styles.FilterContainer}>
    <div className={styles.Filters}>
      <button onClick={() => handleAllProducts()}>See all clothes</button>
      <select>
        <option value="">Choose a brand</option>
        {brand && brand.map((brand) => {
      return (
        <option key={brand.brand_id} value={brand.brand_name}>
          {brand.brand_name}
        </option>
      );
    })}
      </select>
      <select>
        <option value="">Choose a size</option>
        {size && size.map((size) => {
      return (
        <option key={size.size_id} value={size.size_value}>
          {size.size_value}
        </option>
      );
    })}
      </select>
      <select>
        <option value="">Choose a color</option>
        {color && color.map((color) => {
      return (
        <option key={color.color_id} value={color.color_name}>
          {color.color_name}
        </option>
      );
    })}
      </select>
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
