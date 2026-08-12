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

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section
      id="categories"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 sm:text-base">
            Find exactly what you're looking for from our carefully
            selected categories.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                handleCategoryClick(category.name)
              }
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-blue-50 hover:shadow-xl sm:p-8"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl">
                {category.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 sm:mt-6 sm:text-xl">
                {category.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-600 sm:mt-5">
                Explore →
              </p>

            </button>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Categories