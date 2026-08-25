
const categories = [
  {
    name: "Electronics",
    icon: "🎧",
    description: "Gadgets & Devices",
  },
  {
    name: "Fashion",
    icon: "👕",
    description: "Style & Clothing",
  },
  {
    name: "Accessories",
    icon: "🎒",
    description: "Complete Your Look",
  },
  {
    name: "Sports",
    icon: "⚽",
    description: "Fitness & Sports",
  },
]

function Categories({ onCategorySelect }) {

  const handleCategoryClick = (categoryName) => {

    onCategorySelect(categoryName)

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }


  return (

    <section
      id="categories"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-24"
    >

      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />


      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-600">
            Explore
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore our carefully selected categories and
            discover products made for your everyday needs.
          </p>

        </div>


        {/* =========================
            CATEGORY CARDS
        ========================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (

            <button
              key={category.name}
              onClick={() =>
                handleCategoryClick(category.name)
              }
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-7"
            >

              {/* Hover Background */}

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />


              {/* Icon */}

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                {category.icon}
              </div>


              {/* Category Name */}

              <h3 className="relative mt-6 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                {category.name}
              </h3>


              {/* Description */}

              <p className="relative mt-2 text-sm leading-6 text-gray-500">
                {category.description}
              </p>


              {/* Explore */}

              <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">

                <span>
                  Explore
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </button>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Categories

