function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />


      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="text-center lg:text-left">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            New Collection 2026
          </div>


          {/* Heading */}

          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">

            Everything You Need.

            <span className="mt-2 block text-blue-600">
              All in One Place.
            </span>

          </h1>


          {/* Description */}

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0 lg:text-xl lg:leading-8">
            Discover premium products at amazing prices.
            From the latest electronics to stylish fashion,
            we've got something for everyone.
          </p>


          {/* Buttons */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Shop Now

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>


            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-bold text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
            >
              Explore Categories
            </a>

          </div>


          {/* =========================
              TRUST STATS
          ========================== */}

          <div className="mt-11 flex items-center justify-center gap-5 sm:gap-8 lg:justify-start">

            {/* Customers */}

            <div className="text-center lg:text-left">

              <p className="text-2xl font-black text-gray-950 sm:text-3xl">
                10K+
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                Happy Customers
              </p>

            </div>


            <div className="h-10 w-px bg-gray-300" />


            {/* Products */}

            <div className="text-center lg:text-left">

              <p className="text-2xl font-black text-gray-950 sm:text-3xl">
                500+
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                Products
              </p>

            </div>


            <div className="h-10 w-px bg-gray-300" />


            {/* Rating */}

            <div className="text-center lg:text-left">

              <p className="text-2xl font-black text-gray-950 sm:text-3xl">
                4.9
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                Customer Rating ⭐
              </p>

            </div>

          </div>


          {/* Trust Message */}

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">
              ✓
            </span>

            <span>
              Trusted shopping experience
            </span>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

          {/* Decorative Circle */}

          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />

          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-purple-300/30 blur-3xl" />


          {/* Main Image Card */}

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-3 shadow-2xl shadow-gray-300/40 backdrop-blur">

            <div className="relative overflow-hidden rounded-[1.5rem]">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
                alt="ShopHub shopping collection"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[460px] lg:h-[560px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>


            {/* =========================
                FREE SHIPPING CARD
            ========================== */}

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:bottom-10 sm:left-10 sm:right-auto sm:min-w-[270px]">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600">
                  ✓
                </div>

                <div>

                  <p className="text-sm font-bold text-gray-900">
                    Free Shipping
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    On orders over Rs. 5,000
                  </p>

                </div>

              </div>

            </div>


            {/* =========================
                TOP FLOATING BADGE
            ========================== */}

            <div className="absolute right-7 top-7 rounded-xl border border-white/60 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:right-10 sm:top-10">

              <p className="text-xs font-medium text-gray-500">
                Customer Rating
              </p>

              <p className="mt-1 text-sm font-black text-gray-900">
                ⭐ 4.9 / 5
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero

