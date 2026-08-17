
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import {
  getProducts,
  getCategories,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/api"


function AdminProducts() {

  const navigate = useNavigate()


  // =========================
  // PRODUCTS
  // =========================

  const [products, setProducts] =
    useState([])


  // =========================
  // CATEGORIES
  // =========================

  const [categories, setCategories] =
    useState([])


  // =========================
  // LOADING
  // =========================

  const [loading, setLoading] =
    useState(true)


  // =========================
  // FORM
  // =========================

  const [formOpen, setFormOpen] =
    useState(false)


  const [editingProduct, setEditingProduct] =
    useState(null)


  // =========================
  // FORM DATA
  // =========================

  const [formData, setFormData] =
    useState({

      name: "",

      description: "",

      price: "",

      image: "",

      rating: "",

      categoryId: "",

    })


  // =========================
  // MESSAGE
  // =========================

  const [message, setMessage] =
    useState("")


  // =========================
  // LOAD DATA
  // =========================

  const loadData = async () => {

    try {

      setLoading(true)


      const [
        productsData,
        categoriesData,
      ] = await Promise.all([

        getProducts(),

        getCategories(),

      ])


      setProducts(
        productsData
      )


      setCategories(
        categoriesData
      )

    }
    catch (error) {

      console.error(
        "Admin Products Error:",
        error
      )

      setMessage(
        "Failed to load products."
      )

    }
    finally {

      setLoading(false)

    }

  }


  // =========================
  // LOAD ON PAGE OPEN
  // =========================

  useEffect(() => {

    loadData()

  }, [])


  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target


    setFormData(
      (current) => ({
        ...current,
        [name]: value,
      })
    )

  }


  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {

    setFormData({

      name: "",

      description: "",

      price: "",

      image: "",

      rating: "",

      categoryId: "",

    })


    setEditingProduct(
      null
    )


    setFormOpen(
      false
    )

  }


  // =========================
  // OPEN ADD FORM
  // =========================

  const handleAddProduct = () => {

    setEditingProduct(
      null
    )


    setFormData({

      name: "",

      description: "",

      price: "",

      image: "",

      rating: "",

      categoryId:
        categories.length > 0
          ? categories[0].id
          : "",

    })


    setFormOpen(
      true
    )

  }


  // =========================
  // OPEN EDIT FORM
  // =========================

  const handleEdit = (product) => {

    setEditingProduct(
      product
    )


    setFormData({

      name:
        product.name || "",

      description:
        product.description || "",

      price:
        product.price ?? "",

      image:
        product.image || "",

      rating:
        product.rating ?? "",

      categoryId:
        product.categoryId ?? "",

    })


    setFormOpen(
      true
    )

  }


  // =========================
  // SAVE PRODUCT
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault()


    try {

      const productData = {

        name:
          formData.name,

        description:
          formData.description,

        price:
          Number(formData.price),

        image:
          formData.image,

        rating:
          Number(formData.rating),

        categoryId:
          Number(formData.categoryId),

      }


      if (editingProduct) {

        await updateProduct(
          editingProduct.id,
          productData
        )


        setMessage(
          "Product updated successfully."
        )

      }
      else {

        await createProduct(
          productData
        )


        setMessage(
          "Product added successfully."
        )

      }


      resetForm()

      await loadData()

    }
    catch (error) {

      console.error(
        "Save Product Error:",
        error
      )


      setMessage(
        error.message ||
        "Failed to save product."
      )

    }

  }


  // =========================
  // DELETE PRODUCT
  // =========================

  const handleDelete = async (id) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this product?"
      )


    if (!confirmed) {
      return
    }


    try {

      await deleteProduct(
        id
      )


      setMessage(
        "Product deleted successfully."
      )


      await loadData()

    }
    catch (error) {

      console.error(
        "Delete Product Error:",
        error
      )


      setMessage(
        error.message ||
        "Failed to delete product."
      )

    }

  }


  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-gray-100">

        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>

      </div>

    )

  }


  // =========================
  // PAGE
  // =========================

  return (

    <div className="min-h-screen bg-gray-100">


      {/* =========================
          HEADER
      ========================== */}

      <header className="bg-gray-900 px-6 py-5 text-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div>

            <p className="text-sm font-semibold text-blue-400">
              SHOPHUB
            </p>

            <h1 className="text-2xl font-extrabold">
              Product Management
            </h1>

          </div>


          <button
            onClick={() =>
              navigate("/admin")
            }
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            ← Admin Dashboard
          </button>

        </div>

      </header>


      {/* =========================
          CONTENT
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">


        {/* =========================
            TOP BAR
        ========================== */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-sm font-semibold text-blue-600">
              PRODUCTS
            </p>

            <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
              Manage Products
            </h2>

            <p className="mt-2 text-gray-500">
              Add, edit and remove products from your store.
            </p>

          </div>


          <button
            onClick={
              handleAddProduct
            }
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Product
          </button>

        </div>


        {/* =========================
            MESSAGE
        ========================== */}

        {message && (

          <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">

            {message}

            <button
              onClick={() =>
                setMessage("")
              }
              className="ml-3 font-bold"
            >
              ✕
            </button>

          </div>

        )}


        {/* =========================
            ADD / EDIT FORM
        ========================== */}

        {formOpen && (

          <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-gray-900">

                  {editingProduct
                    ? "Edit Product"
                    : "Add New Product"}

                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the product information below.
                </p>

              </div>


              <button
                onClick={
                  resetForm
                }
                className="text-xl text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>

            </div>


            <form
              onSubmit={
                handleSubmit
              }
              className="grid gap-5 md:grid-cols-2"
            >


              {/* NAME */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="e.g. Baggy Jeans"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* PRICE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={
                    formData.price
                  }
                  onChange={
                    handleChange
                  }
                  required
                  min="0"
                  step="0.01"
                  placeholder="e.g. 4999"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* DESCRIPTION */}

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Description
                </label>

                <textarea
                  name="description"
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                  required
                  rows="4"
                  placeholder="Product description..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* IMAGE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  value={
                    formData.image
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="https://..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* RATING */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Rating
                </label>

                <input
                  type="number"
                  name="rating"
                  value={
                    formData.rating
                  }
                  onChange={
                    handleChange
                  }
                  required
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="e.g. 4.5"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* CATEGORY */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Category
                </label>

                <select
                  name="categoryId"
                  value={
                    formData.categoryId
                  }
                  onChange={
                    handleChange
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >

                  <option value="">
                    Select Category
                  </option>

                  {categories.map(
                    (category) => (

                      <option
                        key={
                          category.id
                        }
                        value={
                          category.id
                        }
                      >
                        {
                          category.name
                        }
                      </option>

                    )
                  )}

                </select>

              </div>


              {/* BUTTONS */}

              <div className="flex items-end gap-3">

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >

                  {editingProduct
                    ? "Update Product"
                    : "Add Product"}

                </button>


                <button
                  type="button"
                  onClick={
                    resetForm
                  }
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        )}


        {/* =========================
            PRODUCTS
        ========================== */}

        {products.length === 0 ? (

          <div className="rounded-2xl bg-white py-16 text-center shadow-sm">

            <p className="text-lg font-semibold text-gray-700">
              No products found.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Click "Add Product" to create your first product.
            </p>

          </div>

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map(
              (product) => (

                <div
                  key={
                    product.id
                  }
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >


                  {/* IMAGE */}

                  <div className="h-52 overflow-hidden bg-gray-100">

                    <img
                      src={
                        product.image
                      }
                      alt={
                        product.name
                      }
                      className="h-full w-full object-cover"
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="p-5">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="font-bold text-gray-900">
                        {
                          product.name
                        }
                      </h3>

                      <span className="whitespace-nowrap text-sm font-bold text-blue-600">
                        Rs.{" "}
                        {
                          Number(
                            product.price
                          ).toLocaleString()
                        }
                      </span>

                    </div>


                    <p className="mt-2 text-sm text-gray-500">
                      {
                        product.categoryName
                      }
                    </p>


                    <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                      {
                        product.description
                      }
                    </p>


                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-sm text-yellow-600">
                        ⭐{" "}
                        {
                          product.rating
                        }
                      </span>


                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            handleEdit(
                              product
                            )
                          }
                          className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                        >
                          Edit
                        </button>


                        <button
                          onClick={() =>
                            handleDelete(
                              product.id
                            )
                          }
                          className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </main>

    </div>

  )

}


export default AdminProducts

