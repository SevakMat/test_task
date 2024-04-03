export const GetProductsByCategoryName = async (categoryName: any) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to login");
    }
    return await res.json();
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const GetProductById = async (productId: string) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
};

export const GetAllProducts = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch all products");
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    throw error;
  }
};
