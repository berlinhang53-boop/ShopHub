import { useState } from "react"

function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight"
        >
          Shop<span className="text-blue-600">Hub</span>
        </a>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#categories"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Categories
          </a>

        </div>


        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <button
            onClick={onCartClick}
            className="relative rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold transition hover:bg-gray-200"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>

            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
            >
              Products
            </a>

            <a
              href="#categories"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
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