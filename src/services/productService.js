export const fetchProducts = async () => {
  try {
    const response = await fetch("../data/product.js");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const products = await fetchProducts();
    return products.find((product) => product.id === parseInt(productId));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryName) => {
  try {
    const products = await fetchProducts();
    return products.filter((product) => product.category === categoryName);
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error;
  }
};

export const getFeaturedProducts = async () => {
  try {
    const products = await fetchProducts();
    return products.filter((product) => product.featured);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
};

export const getNewProducts = async () => {
  try {
    const products = await fetchProducts();
    return products.filter((product) => product.new);
  } catch (error) {
    console.error("Error fetching new products:", error);
    throw error;
  }
};
