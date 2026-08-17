// const API_URL = import.meta.env.VITE_API_URL;


// // ==========================================
// // GET ALL PRODUCTS
// // ==========================================

// export async function getProducts() {
//   const response = await fetch(`${API_URL}/products`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return await response.json();
// }


// // ==========================================
// // GET SINGLE PRODUCT
// // ==========================================

// export async function getProduct(id) {
//   const response = await fetch(`${API_URL}/products/${id}`);

//   if (!response.ok) {
//     throw new Error("Product not found");
//   }

//   return await response.json();
// }


// // ==========================================
// // GET ALL CATEGORIES
// // ==========================================

// export async function getCategories() {
//   const response = await fetch(`${API_URL}/categories`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   return await response.json();
// }


// // ==========================================
// // CREATE ORDER
// // ==========================================

// export async function createOrder(orderData) {
//   const response = await fetch(`${API_URL}/orders`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(orderData),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create order");
//   }

//   return await response.json();
// }













const API_URL = import.meta.env.VITE_API_URL;


// ==========================================
// GET ALL PRODUCTS
// ==========================================

export async function getProducts() {

  const response =
    await fetch(`${API_URL}/products`);


  if (!response.ok) {

    throw new Error(
      "Failed to fetch products"
    );

  }


  return await response.json();

}


// ==========================================
// GET SINGLE PRODUCT
// ==========================================

export async function getProduct(id) {

  const response =
    await fetch(
      `${API_URL}/products/${id}`
    );


  if (!response.ok) {

    throw new Error(
      "Product not found"
    );

  }


  return await response.json();

}


// ==========================================
// GET ALL CATEGORIES
// ==========================================

export async function getCategories() {

  const response =
    await fetch(
      `${API_URL}/categories`
    );


  if (!response.ok) {

    throw new Error(
      "Failed to fetch categories"
    );

  }


  return await response.json();

}


// ==========================================
// CREATE PRODUCT
// ==========================================

export async function createProduct(
  productData
) {

  const response =
    await fetch(
      `${API_URL}/products`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(
            productData
          ),
      }
    );


  const data =
    await response
      .json()
      .catch(() => null);


  if (!response.ok) {

    console.error(
      "Create Product Error:",
      data
    );


    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to create product"
    );

  }


  return data;

}


// ==========================================
// UPDATE PRODUCT
// ==========================================

export async function updateProduct(
  id,
  productData
) {

  const response =
    await fetch(
      `${API_URL}/products/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(
            productData
          ),
      }
    );


  const data =
    await response
      .json()
      .catch(() => null);


  if (!response.ok) {

    console.error(
      "Update Product Error:",
      data
    );


    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to update product"
    );

  }


  return data;

}


// ==========================================
// DELETE PRODUCT
// ==========================================

export async function deleteProduct(
  id
) {

  const response =
    await fetch(
      `${API_URL}/products/${id}`,
      {
        method: "DELETE",
      }
    );


  const data =
    await response
      .json()
      .catch(() => null);


  if (!response.ok) {

    console.error(
      "Delete Product Error:",
      data
    );


    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to delete product"
    );

  }


  return data;

}


// ==========================================
// CREATE ORDER
// ==========================================

export async function createOrder(
  orderData
) {

  const response =
    await fetch(
      `${API_URL}/orders`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(
            orderData
          ),
      }
    );


  const data =
    await response.json();


  if (!response.ok) {

    console.error(
      "Order API Error:",
      data
    );


    throw new Error(
      data.message ||
      data.title ||
      "Failed to create order"
    );

  }


  return data;

}


// ==========================================
// GET ORDER BY ID
// ==========================================

export async function getOrder(
  orderId
) {

  const response =
    await fetch(
      `${API_URL}/orders/${orderId}`
    );


  const data =
    await response.json();


  if (!response.ok) {

    console.error(
      "Get Order API Error:",
      data
    );


    throw new Error(
      data.message ||
      data.title ||
      "Failed to get order"
    );

  }


  return data;

}

