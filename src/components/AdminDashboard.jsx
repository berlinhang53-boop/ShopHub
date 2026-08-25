
import { useNavigate } from "react-router-dom"

function AdminDashboard() {

  const navigate = useNavigate()

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

            <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">
              Admin Dashboard
            </h1>
          </div>

          <button
            onClick={() => navigate("/")}
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-gray-200"
          >
            ← Store
          </button>

        </div>

      </header>


      {/* =========================
          MAIN
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">

        {/* WELCOME */}

        <div className="mb-8">

          <p className="text-sm font-bold tracking-wider text-blue-600">
            ADMIN PANEL
          </p>

          <h2 className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome, Admin 👋
          </h2>

          <p className="mt-2 max-w-2xl text-gray-500">
            Manage your ShopHub store, products, categories and customer
            orders from one place.
          </p>

        </div>


        {/* =========================
            MANAGEMENT CARDS
        ========================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {/* ORDERS */}

          <button
            onClick={() => navigate("/admin/orders")}
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🛒
              </div>

              <span className="text-2xl text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-500">
                →
              </span>

            </div>

            <h3 className="mt-6 text-xl font-extrabold text-gray-900">
              Orders
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              View customer orders, customer information, ordered products,
              totals and order status.
            </p>

            <div className="mt-5 font-bold text-blue-600">
              Manage Orders →
            </div>

          </button>


          {/* PRODUCTS */}

          <button
            onClick={() => navigate("/admin/products")}
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                📦
              </div>

              <span className="text-2xl text-gray-300 transition group-hover:translate-x-1 group-hover:text-green-500">
                →
              </span>

            </div>

            <h3 className="mt-6 text-xl font-extrabold text-gray-900">
              Products
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Add new products, update existing products and remove products
              from your ShopHub store.
            </p>

            <div className="mt-5 font-bold text-green-600">
              Manage Products →
            </div>

          </button>


          {/* CATEGORIES */}

          <button
            onClick={() => navigate("/admin/categories")}
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                🏷️
              </div>

              <span className="text-2xl text-gray-300 transition group-hover:translate-x-1 group-hover:text-purple-500">
                →
              </span>

            </div>

            <h3 className="mt-6 text-xl font-extrabold text-gray-900">
              Categories
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Create, edit and delete product categories used throughout
              your store.
            </p>

            <div className="mt-5 font-bold text-purple-600">
              Manage Categories →
            </div>

          </button>

        </div>


        {/* =========================
            QUICK ACTIONS
        ========================== */}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-bold tracking-wider text-gray-400">
                QUICK ACTIONS
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-gray-900">
                Manage your store
              </h3>

            </div>

          </div>


          <div className="mt-6 grid gap-3 sm:grid-cols-3">

            <button
              onClick={() => navigate("/admin/orders")}
              className="rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              🛒 View Orders
            </button>

            <button
              onClick={() => navigate("/admin/products")}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
            >
              📦 Manage Products
            </button>

            <button
              onClick={() => navigate("/admin/categories")}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
            >
              🏷️ Manage Categories
            </button>

          </div>

        </div>


        {/* =========================
            STORE BUTTON
        ========================== */}

        <div className="mt-8 flex justify-center">

          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            ← Return to ShopHub Store
          </button>

        </div>

      </main>

    </div>
  )
}

export default AdminDashboard
