
const API_URL = import.meta.env.VITE_API_URL;




function getAuthHeaders() {

  const token =
    localStorage.getItem("adminToken");

  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };
}

// ==========================================
// GET ALL PRODUCTS
// ==========================================

export async function getProducts() {

  const response =
    await fetch(`${API_URL}/products`);

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Get Products API Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to fetch products"
    );

  }

  return data;
}


// ==========================================
// GET SINGLE PRODUCT
// ==========================================

export async function getProduct(id) {

  const response =
    await fetch(
      `${API_URL}/products/${id}`
    );

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Get Product API Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Product not found"
    );

  }

  return data;
}


// ==========================================
// GET ALL CATEGORIES
// ==========================================

export async function getCategories() {

  const response =
    await fetch(
      `${API_URL}/categories`
    );

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Get Categories API Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to fetch categories"
    );

  }

  return data;
}


// ==========================================
// CREATE PRODUCT
// ==========================================

// export async function createProduct(
//   productData
// ) {

//   const response =
//     await fetch(
//       `${API_URL}/products`,
//       {
//         method: "POST",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body:
//           JSON.stringify(
//             productData
//           ),
//       }
//     );

//   const data =
//     await response
//       .json()
//       .catch(() => null);

//   if (!response.ok) {

//     console.error(
//       "Create Product Error:",
//       data
//     );

//     throw new Error(
//       data?.message ||
//       data?.title ||
//       "Failed to create product"
//     );

//   }

//   return data;
// }







export async function createProduct(productData) {

  const response =
    await fetch(
      `${API_URL}/products`,
      {
        method: "POST",

        headers: getAuthHeaders(),

        body:
          JSON.stringify(productData),
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

// export async function updateProduct(
//   id,
//   productData
// ) {

//   const response =
//     await fetch(
//       `${API_URL}/products/${id}`,
//       {
//         method: "PUT",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body:
//           JSON.stringify(
//             productData
//           ),
//       }
//     );

//   const data =
//     await response
//       .json()
//       .catch(() => null);

//   if (!response.ok) {

//     console.error(
//       "Update Product Error:",
//       data
//     );

//     throw new Error(
//       data?.message ||
//       data?.title ||
//       "Failed to update product"
//     );

//   }

//   return data;
// }







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

        headers: getAuthHeaders(),

        body:
          JSON.stringify(productData),
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

// export async function deleteProduct(
//   id
// ) {

//   const response =
//     await fetch(
//       `${API_URL}/products/${id}`,
//       {
//         method: "DELETE",
//       }
//     );

//   const data =
//     await response
//       .json()
//       .catch(() => null);

//   if (!response.ok) {

//     console.error(
//       "Delete Product Error:",
//       data
//     );

//     throw new Error(
//       data?.message ||
//       data?.title ||
//       "Failed to delete product"
//     );

//   }

//   return data;
// }






// ==========================================
// DELETE PRODUCT
// ==========================================

export async function deleteProduct(id) {

  const response =
    await fetch(
      `${API_URL}/products/${id}`,
      {
        method: "DELETE",

        headers: getAuthHeaders(),
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
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Order API Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to create order"
    );

  }

  return data;
}


// ==========================================
// GET ORDER BY ID
// ==========================================
// Used by OrderConfirmation.jsx
// GET: api/orders/{id}
// ==========================================

export async function getOrder(
  orderId
) {

  const response =
    await fetch(
      `${API_URL}/orders/${orderId}`
    );

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Get Order API Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to get order"
    );

  }

  return data;
}


// ==========================================
// GET ALL ORDERS
// ==========================================
// Used by AdminOrders.jsx
// GET: api/orders
// ==========================================

export async function getOrders() {

  const response =
    await fetch(
      `${API_URL}/orders`
    );

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Get Orders API Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to get orders"
    );

  }

  return data;
}


// ==========================================
// UPDATE ORDER STATUS
// ==========================================
// Used by AdminOrders.jsx
// PUT: api/orders/{id}/status
// ==========================================

export async function updateOrderStatus(
  orderId,
  status
) {

  const response =
    await fetch(
      `${API_URL}/orders/${orderId}/status`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(status),
      }
    );

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {

    console.error(
      "Update Order Status Error:",
      data
    );

    throw new Error(
      data?.message ||
      data?.title ||
      "Failed to update order status"
    );

  }

  return data;

}





export const loginAdmin = async (username, password) => {

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    }
  )


  const data = await response
    .json()
    .catch(() => null)


  if (!response.ok) {

    throw new Error(
      data?.message ||
      "Invalid username or password."
    )

  }


  return data
}
