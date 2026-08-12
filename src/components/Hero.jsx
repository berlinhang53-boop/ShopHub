function Hero() {
  return (
    <section className="overflow-hidden bg-gray-50">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">

        {/* =========================
            LEFT SIDE - CONTENT
        ========================== */}

        <div className="text-center lg:text-left">

          {/* Small Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ✨ New Collection 2026
          </div>


          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything You Need.
            <span className="block text-blue-600">
              All in One Place.
            </span>
          </h1>


          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Discover premium products at amazing prices.
            From the latest electronics to stylish fashion,
            we've got something for everyone.
          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#products"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Shop Now →
            </a>

            <a
              href="#categories"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
            >
              Explore Categories
            </a>

          </div>


          {/* Trust / Stats */}
          <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12 lg:justify-start">

            <div>
              <p className="text-2xl font-bold text-gray-900">
                10K+
              </p>

              <p className="text-sm text-gray-500">
                Customers
              </p>
            </div>


            <div className="h-10 w-px bg-gray-300" />


            <div>
              <p className="text-2xl font-bold text-gray-900">
                500+
              </p>

              <p className="text-sm text-gray-500">
                Products
              </p>
            </div>


            <div className="h-10 w-px bg-gray-300" />


            <div>
              <p className="text-2xl font-bold text-gray-900">
                4.9
              </p>

              <p className="text-sm text-gray-500">
                Rating ⭐
              </p>
            </div>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE - IMAGE
        ========================== */}

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

          {/* Background Decoration */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200 opacity-60 blur-3xl" />

          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-200 opacity-60 blur-3xl" />


          {/* Image Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
              alt="Shopping collection"
              className="h-[350px] w-full rounded-2xl object-cover sm:h-[450px] lg:h-[550px]"
            />


            {/* Floating Card */}
            <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-10 sm:left-10">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Free Shipping
                  </p>

                  <p className="text-xs text-gray-500">
                    On orders over Rs. 5,000
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero