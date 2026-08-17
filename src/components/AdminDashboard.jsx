
import { useNavigate } from "react-router-dom"


function AdminDashboard() {

  const navigate = useNavigate()


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
              Admin Panel
            </h1>

          </div>


          <button
            onClick={() =>
              navigate("/")
            }
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Back to Store
          </button>

        </div>

      </header>


      {/* =========================
          DASHBOARD
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            DASHBOARD
          </p>

          <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
            Welcome, Admin
          </h2>

          <p className="mt-2 text-gray-500">
            Manage your ShopHub store from here.
          </p>

        </div>


        {/* =========================
            CARDS
        ========================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {/* =========================
              ORDERS
          ========================== */}

          <button
            onClick={() =>
              navigate("/admin/orders")
            }
            className="group rounded-2xl bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              🛒
            </div>


            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Orders
            </h3>


            <p className="mt-2 text-sm leading-6 text-gray-500">
              View customer orders, customer details,
              ordered products and order totals.
            </p>


            <div className="mt-5 font-semibold text-blue-600 group-hover:text-blue-700">
              Manage Orders →
            </div>

          </button>


          {/* =========================
              PRODUCTS
          ========================== */}

          <button
            onClick={() =>
              navigate("/admin/products")
            }
            className="group rounded-2xl bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              📦
            </div>


            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Products
            </h3>


            <p className="mt-2 text-sm leading-6 text-gray-500">
              Add new products, edit existing products
              and manage products in your store.
            </p>


            <div className="mt-5 font-semibold text-green-600 group-hover:text-green-700">
              Manage Products →
            </div>

          </button>


          {/* =========================
              CATEGORIES
          ========================== */}

          <button
            onClick={() =>
              navigate("/admin/categories")
            }
            className="group rounded-2xl bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              🏷️
            </div>


            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Categories
            </h3>


            <p className="mt-2 text-sm leading-6 text-gray-500">
              Manage product categories and organize
              your store products.
            </p>


            <div className="mt-5 font-semibold text-purple-600 group-hover:text-purple-700">
              Manage Categories →
            </div>

          </button>


        </div>


        {/* =========================
            QUICK INFO
        ========================== */}

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-lg font-bold text-gray-900">
            Quick Actions
          </h3>


          <div className="mt-5 flex flex-wrap gap-3">

            <button
              onClick={() =>
                navigate("/admin/orders")
              }
              className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              View Orders
            </button>


            <button
              onClick={() =>
                navigate("/admin/products")
              }
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Manage Products
            </button>


            <button
              onClick={() =>
                navigate("/admin/categories")
              }
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Manage Categories
            </button>

          </div>

        </div>

      </main>

    </div>

  )

}


export default AdminDashboard

