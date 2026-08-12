function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <h2 className="text-2xl font-extrabold">
              Shop<span className="text-blue-400">Hub</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Your one-stop destination for quality products,
              great prices and an amazing shopping experience.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="font-bold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <a
                href="#"
                className="transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#products"
                className="transition hover:text-white"
              >
                Products
              </a>

              <a
                href="#categories"
                className="transition hover:text-white"
              >
                Categories
              </a>

            </div>

          </div>


          {/* Categories */}
          <div>

            <h3 className="font-bold">
              Categories
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <p>Electronics</p>
              <p>Fashion</p>
              <p>Accessories</p>
              <p>Sports</p>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="font-bold">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              <p>📧 support@shophub.com</p>
              <p>📞 +92 300 1234567</p>
              <p>📍 Islamabad, Pakistan</p>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 sm:mt-16">

          © 2026 ShopHub. All rights reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer