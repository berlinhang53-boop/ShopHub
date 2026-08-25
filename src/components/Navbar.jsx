
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Navbar({
  cartCount,
  wishlistCount,
  onCartClick,
}) {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md">

      {/* =========================
          MAIN NAVBAR
      ========================== */}

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">

        {/* =========================
            LOGO
        ========================== */}

        <button
          onClick={() => navigate("/")}
          className="group flex items-center"
        >
          <span className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
            Shop
            <span className="text-blue-600 transition group-hover:text-blue-700">
              Hub
            </span>
          </span>
        </button>


        {/* =========================
            DESKTOP MENU
        ========================== */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="relative py-2 text-sm font-semibold text-gray-900 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="relative py-2 text-sm font-semibold text-gray-600 transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#categories"
            className="relative py-2 text-sm font-semibold text-gray-600 transition hover:text-blue-600"
          >
            Categories
          </a>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="flex items-center gap-2 sm:gap-3">

          {/* =========================
              WISHLIST
          ========================== */}

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg shadow-sm transition duration-200 hover:border-red-200 hover:bg-red-50 hover:shadow-md"
            aria-label="Wishlist"
          >
            ❤️

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>


          {/* =========================
              CART
          ========================== */}

          <button
            type="button"
            onClick={onCartClick}
            className="relative flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold text-gray-800 shadow-sm transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md sm:px-4"
          >
            <span className="text-base">
              🛒
            </span>

            <span className="hidden sm:inline">
              Cart
            </span>

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>


          {/* =========================
              ADMIN
          ========================== */}

          <button
            type="button"
            onClick={() => navigate("/admin-login")}
            className="hidden rounded-full bg-gray-900 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md sm:inline-flex"
          >
            Admin
          </button>


          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-700 shadow-sm transition hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg md:hidden">

          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <div className="flex flex-col gap-1">

              {/* Home */}

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-800 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Home
              </a>


              {/* Products */}

              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Products
              </a>


              {/* Categories */}

              <a
                href="#categories"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Categories
              </a>


              {/* Admin */}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  navigate("/admin")
                }}
                className="mt-2 rounded-xl bg-gray-900 px-4 py-3.5 text-left text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Admin Panel
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar

