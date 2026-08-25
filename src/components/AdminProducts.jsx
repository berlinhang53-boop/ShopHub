
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
  // STATE
  // =========================

  const [products, setProducts] = useState([])

  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(true)

  const [formOpen, setFormOpen] = useState(false)

  const [editingProduct, setEditingProduct] = useState(null)

  const [message, setMessage] = useState("")

  const [saving, setSaving] = useState(false)


  // =========================
  // FORM
  // =========================

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    rating: "",
    categoryId: "",
  })


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

      setProducts(productsData)

      setCategories(categoriesData)

    }
    catch (error) {

      console.error(
        "Admin Products Error:",
        error
      )

      setMessage(
        error.message ||
        "Failed to load products."
      )

    }
    finally {

      setLoading(false)

    }

  }


  useEffect(() => {

    loadData()

  }, [])


  // =========================
  // INPUT
  // =========================

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

  }


  // =========================
  // RESET
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

    setEditingProduct(null)

    setFormOpen(false)

  }


  // =========================
  // ADD
  // =========================

  const handleAddProduct = () => {

    setEditingProduct(null)

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

    setMessage("")

    setFormOpen(true)

  }


  // =========================
  // EDIT
  // =========================

  const handleEdit = (product) => {

    setEditingProduct(product)

    setFormData({
      name: product.name || "",
      description: product.description || "",
      price: product.price ?? "",
      image: product.image || "",
      rating: product.rating ?? "",
      categoryId: product.categoryId ?? "",
    })

    setMessage("")

    setFormOpen(true)

  }


  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setSaving(true)

      const productData = {

        name:
          formData.name.trim(),

        description:
          formData.description.trim(),

        price:
          Number(formData.price),

        image:
          formData.image.trim(),

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
    finally {

      setSaving(false)

    }

  }


  // =========================
  // DELETE
  // =========================

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    )

    if (!confirmed) {
      return
    }


    try {

      setSaving(true)

      await deleteProduct(id)

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
    finally {

      setSaving(false)

    }

  }


  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-gray-100">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="mt-4 font-semibold text-gray-600">
            Loading products...
          </p>

        </div>

      </div>

    )

  }


  return (

    <div className="min-h-screen bg-gray-100">


      {/* =========================
          HEADER
      ========================== */}

      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950 px-4 py-5 text-white sm:px-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

          <div>

            <p className="text-sm font-bold tracking-wider text-blue-400">
              SHOPHUB
            </p>

            <h1 className="mt-1 text-2xl font-extrabold">
              Product Management
            </h1>

          </div>


          <button
            onClick={() => navigate("/admin")}
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-gray-200"
          >
            ← Dashboard
          </button>

        </div>

      </header>


      {/* =========================
          MAIN
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">


        {/* =========================
            INTRO
        ========================== */}

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-sm font-bold tracking-wider text-blue-600">
              PRODUCTS
            </p>

            <h2 className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Manage Products
            </h2>

            <p className="mt-2 text-gray-500">
              Add, edit and remove products from your ShopHub store.
            </p>

          </div>


          <button
            onClick={handleAddProduct}
            disabled={saving}
            className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            + Add Product
          </button>

        </div>


        {/* =========================
            MESSAGE
        ========================== */}

        {message && (

          <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">

            <span>
              {message}
            </span>

            <button
              onClick={() => setMessage("")}
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              ✕
            </button>

          </div>

        )}


        {/* =========================
            FORM
        ========================== */}

        {formOpen && (

          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-6 flex items-start justify-between">

              <div>

                <p className="text-sm font-bold tracking-wider text-blue-600">
                  {editingProduct
                    ? "EDIT PRODUCT"
                    : "NEW PRODUCT"}
                </p>

                <h3 className="mt-1 text-2xl font-extrabold text-gray-900">

                  {editingProduct
                    ? "Edit Product"
                    : "Add New Product"}

                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the product information below.
                </p>

              </div>


              <button
                onClick={resetForm}
                className="rounded-lg px-2 text-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                ✕
              </button>

            </div>


            <form
              onSubmit={handleSubmit}
              className="grid gap-5 md:grid-cols-2"
            >


              {/* NAME */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Baggy Jeans"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* PRICE */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  placeholder="4999"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* DESCRIPTION */}

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Product description..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* IMAGE */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* RATING */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Rating
                </label>

                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="4.5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* CATEGORY */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Category
                </label>

                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >

                  <option value="">
                    Select Category
                  </option>

                  {categories.map(
                    (category) => (

                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>

                    )
                  )}

                </select>

              </div>


              {/* BUTTONS */}

              <div className="flex items-end gap-3">

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? "Saving..."
                    : editingProduct
                      ? "Update Product"
                      : "Add Product"}
                </button>


                <button
                  type="button"
                  onClick={resetForm}
                  disabled={saving}
                  className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        )}


        {/* =========================
            PRODUCT COUNT
        ========================== */}

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-xl font-extrabold text-gray-900">
            All Products
          </h3>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
            {products.length} Products
          </span>

        </div>


        {/* =========================
            EMPTY
        ========================== */}

        {products.length === 0 ? (

          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center shadow-sm">

            <div className="text-5xl">
              📦
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              No Products Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Click "Add Product" to create your first product.
            </p>

          </div>

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >


                {/* IMAGE */}

                <div className="relative h-52 overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-600 shadow-sm">
                    Rs. {Number(product.price).toLocaleString()}
                  </span>

                </div>


                {/* DETAILS */}

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <h3 className="line-clamp-1 font-extrabold text-gray-900">
                      {product.name}
                    </h3>

                  </div>


                  <p className="mt-2 text-sm font-semibold text-blue-600">
                    {product.categoryName || "Uncategorized"}
                  </p>


                  <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-500">
                    {product.description}
                  </p>


                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">

                    <span className="text-sm font-semibold text-yellow-600">
                      ⭐ {product.rating}
                    </span>


                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          handleEdit(product)
                        }
                        disabled={saving}
                        className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-200 disabled:opacity-50"
                      >
                        Edit
                      </button>


                      <button
                        onClick={() =>
                          handleDelete(product.id)
                        }
                        disabled={saving}
                        className="rounded-lg bg-red-50 px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  )
}

export default AdminProducts

