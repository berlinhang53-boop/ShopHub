import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  getCategories,
} from "../services/api"


function AdminCategories() {

  const navigate = useNavigate()


  // =========================
  // STATE
  // =========================

  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")

  const [categoryName, setCategoryName] = useState("")

  const [editingId, setEditingId] = useState(null)

  const [editingName, setEditingName] = useState("")

  const [saving, setSaving] = useState(false)


  // =========================
  // LOAD CATEGORIES
  // =========================

  const loadCategories = async () => {

    try {

      setLoading(true)
      setError("")

      const data = await getCategories()

      setCategories(data)

    }
    catch (error) {

      console.error(
        "Categories API Error:",
        error
      )

      setError(
        error.message ||
        "Failed to load categories."
      )

    }
    finally {

      setLoading(false)

    }

  }


  useEffect(() => {

    loadCategories()

  }, [])


  // =========================
  // ADD CATEGORY
  // =========================

  const handleAddCategory = async (e) => {

    e.preventDefault()

    const name = categoryName.trim()

    if (!name) {

      alert("Please enter category name.")

      return

    }


    try {

      setSaving(true)

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
          }),
        }
      )


      const data =
        await response
          .json()
          .catch(() => null)


      if (!response.ok) {

        throw new Error(
          data?.message ||
          data?.title ||
          "Failed to create category."
        )

      }


      setCategoryName("")

      await loadCategories()

      alert("Category added successfully.")

    }
    catch (error) {

      console.error(
        "Create Category Error:",
        error
      )

      alert(
        error.message ||
        "Failed to add category."
      )

    }
    finally {

      setSaving(false)

    }

  }


  // =========================
  // EDIT
  // =========================

  const handleEdit = (category) => {

    setEditingId(category.id)

    setEditingName(category.name)

  }


  // =========================
  // CANCEL EDIT
  // =========================

  const handleCancelEdit = () => {

    setEditingId(null)

    setEditingName("")

  }


  // =========================
  // UPDATE
  // =========================

  const handleUpdate = async (id) => {

    const name = editingName.trim()

    if (!name) {

      alert(
        "Category name cannot be empty."
      )

      return

    }


    try {

      setSaving(true)

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
          }),
        }
      )


      const data =
        await response
          .json()
          .catch(() => null)


      if (!response.ok) {

        throw new Error(
          data?.message ||
          data?.title ||
          "Failed to update category."
        )

      }


      setEditingId(null)

      setEditingName("")

      await loadCategories()

      alert("Category updated successfully.")

    }
    catch (error) {

      console.error(
        "Update Category Error:",
        error
      )

      alert(
        error.message ||
        "Failed to update category."
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
      "Are you sure you want to delete this category?"
    )

    if (!confirmed) {
      return
    }


    try {

      setSaving(true)

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories/${id}`,
        {
          method: "DELETE",
        }
      )


      const data =
        await response
          .json()
          .catch(() => null)


      if (!response.ok) {

        throw new Error(
          data?.message ||
          data?.title ||
          "Failed to delete category."
        )

      }


      await loadCategories()

      alert("Category deleted successfully.")

    }
    catch (error) {

      console.error(
        "Delete Category Error:",
        error
      )

      alert(
        error.message ||
        "Failed to delete category."
      )

    }
    finally {

      setSaving(false)

    }

  }


  return (

    <div className="min-h-screen bg-gray-100">


      {/* =========================
          HEADER
      ========================== */}

      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950 px-4 py-5 text-white sm:px-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

          <div>

            <p className="text-sm font-bold tracking-wider text-purple-400">
              SHOPHUB
            </p>

            <h1 className="mt-1 text-2xl font-extrabold">
              Category Management
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
            PAGE INTRO
        ========================== */}

        <div className="mb-8">

          <p className="text-sm font-bold tracking-wider text-purple-600">
            CATEGORIES
          </p>

          <h2 className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Manage Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Create and organize the categories used by your products.
          </p>

        </div>


        {/* =========================
            ADD CATEGORY
        ========================== */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
            🏷️
          </div>

          <h3 className="mt-5 text-xl font-extrabold text-gray-900">
            Create New Category
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Add a category that can be selected when creating products.
          </p>


          <form
            onSubmit={handleAddCategory}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >

            <input
              type="text"
              value={categoryName}
              onChange={(e) =>
                setCategoryName(e.target.value)
              }
              placeholder="e.g. Shoes"
              disabled={saving}
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 disabled:bg-gray-100"
            />


            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : "+ Add Category"}
            </button>

          </form>

        </div>


        {/* =========================
            LIST HEADER
        ========================== */}

        <div className="mb-6 mt-10">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm font-bold tracking-wider text-purple-600">
                YOUR CATEGORIES
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-gray-900">
                Existing Categories
              </h3>

            </div>

            {!loading && !error && (
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-700">
                {categories.length}
              </span>
            )}

          </div>

        </div>


        {/* =========================
            LOADING
        ========================== */}

        {loading && (

          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />

            <p className="mt-4 font-medium text-gray-500">
              Loading categories...
            </p>

          </div>

        )}


        {/* =========================
            ERROR
        ========================== */}

        {!loading && error && (

          <div className="rounded-2xl border border-red-200 bg-white p-10 text-center shadow-sm">

            <div className="text-4xl">
              ⚠️
            </div>

            <p className="mt-4 font-semibold text-red-600">
              {error}
            </p>

            <button
              onClick={loadCategories}
              className="mt-5 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              Try Again
            </button>

          </div>

        )}


        {/* =========================
            EMPTY
        ========================== */}

        {!loading &&
          !error &&
          categories.length === 0 && (

            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">

              <div className="text-5xl">
                🏷️
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No Categories Yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Create your first category using the form above.
              </p>

            </div>

          )}


        {/* =========================
            CATEGORIES
        ========================== */}

        {!loading &&
          !error &&
          categories.length > 0 && (

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {categories.map((category) => (

                <div
                  key={category.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                    🏷️
                  </div>


                  {editingId === category.id ? (

                    <div className="mt-5">

                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Category Name
                      </label>

                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) =>
                          setEditingName(e.target.value)
                        }
                        disabled={saving}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                      />


                      <div className="mt-4 flex gap-2">

                        <button
                          onClick={() =>
                            handleUpdate(category.id)
                          }
                          disabled={saving}
                          className="flex-1 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-purple-700 disabled:opacity-50"
                        >
                          {saving ? "Saving..." : "Save"}
                        </button>


                        <button
                          onClick={handleCancelEdit}
                          disabled={saving}
                          className="flex-1 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-gray-200"
                        >
                          Cancel
                        </button>

                      </div>

                    </div>

                  ) : (

                    <>

                      <div className="mt-5">

                        <h3 className="text-xl font-extrabold text-gray-900">
                          {category.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Category ID: {category.id}
                        </p>

                      </div>


                      <div className="mt-5 flex gap-2 border-t border-gray-100 pt-4">

                        <button
                          onClick={() =>
                            handleEdit(category)
                          }
                          disabled={saving}
                          className="flex-1 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-600 transition hover:bg-blue-100 disabled:opacity-50"
                        >
                          Edit
                        </button>


                        <button
                          onClick={() =>
                            handleDelete(category.id)
                          }
                          disabled={saving}
                          className="flex-1 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                        >
                          Delete
                        </button>

                      </div>

                    </>

                  )}

                </div>

              ))}

            </div>

          )}

      </main>

    </div>
  )
}

export default AdminCategories

