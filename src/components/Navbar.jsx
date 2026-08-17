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
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">

      {/* =========================
          MAIN NAVBAR
      ========================== */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}

        <a
          href="#"
          className="text-xl font-extrabold tracking-tight sm:text-2xl"
        >
          Shop<span className="text-blue-600">Hub</span>
        </a>


        {/* =========================
            DESKTOP MENU
        ========================== */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#categories"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Categories
          </a>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="flex items-center gap-2 sm:gap-3">


          {/* Wishlist */}

          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg transition hover:bg-gray-200"
          >

            ❤️

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {wishlistCount}
              </span>
            )}

          </button>


          {/* Cart */}

          <button
            onClick={onCartClick}
            className="relative rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold transition hover:bg-gray-200 sm:px-4"
          >

            🛒

            <span className="hidden sm:inline">
              {" "}Cart
            </span>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {cartCount}
              </span>
            )}

          </button>


          {/* Mobile Menu */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl md:hidden"
          >
            {menuOpen
              ? "✕"
              : "☰"}
          </button>

          <button
  onClick={() => navigate("/admin")}
  className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
>
  Admin
</button>

        </div>

      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="#"
              onClick={() =>
                setMenuOpen(false)
              }
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>

            <a
              href="#products"
              onClick={() =>
                setMenuOpen(false)
              }
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
            >
              Products
            </a>

            <a
              href="#categories"
              onClick={() =>
                setMenuOpen(false)
              }
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
            >
              Categories
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar