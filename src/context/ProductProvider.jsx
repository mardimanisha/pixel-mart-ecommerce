import { useCallback, useEffect } from "react";
import { useState } from "react";
import { fetchProducts } from "../services/productService";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);

      const uniqueCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const getProductById = useCallback(
    (id) => {
      return products.find((product) => product.id === parseInt(id));
    },
    [products]
  );

  const getProductsByCategory = useCallback(
    (category) => {
      return products.filter((product) => product.category === category);
    },
    [products]
  );

  const getFeaturedProducts = useCallback(() => {
    return products.filter((product) => product.featured);
  }, [products]);

  const getNewProducts = useCallback(() => {
    return products.filter((product) => product.new);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        error,
        getProductById,
        getProductsByCategory,
        getFeaturedProducts,
        getNewProducts,
        refreshProducts: loadProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
