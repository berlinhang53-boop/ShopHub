import { useState } from "react"

function Checkout({
  cart,
  onBack,
  onPlaceOrder,
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("cod")

  // =========================
  // FORM CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  // =========================
  // TOTALS
  // =========================

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 5000
        ? 0
        : 250

  const total = subtotal + shipping

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault()

    onPlaceOrder({
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      address: `${form.address}, ${form.city}${
        form.postalCode
          ? `, ${form.postalCode}`
          : ""
      }`,
      paymentMethod,
      total,
    })
  }

  // =========================
  // INPUT STYLE
  // =========================

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"

  return (
    <div className="fixed inset-0 z-[85] overflow-y-auto bg-gray-50">

      {/* =========================
          HEADER
      ========================== */}

      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">

          <button
            onClick={onBack}
            className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-lg text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            ←
          </button>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Secure Checkout
            </p>

            <h1 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Complete Your Order
            </h1>
          </div>

        </div>

      </header>


      {/* =========================
          CHECKOUT STEPS
      ========================== */}

      <div className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              ✓
            </div>

            <span className="text-sm font-semibold text-gray-900">
              Cart
            </span>

          </div>

          <div className="mx-3 h-px w-8 bg-blue-300 sm:mx-5 sm:w-16" />

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              2
            </div>

            <span className="text-sm font-semibold text-blue-600">
              Checkout
            </span>

          </div>

          <div className="mx-3 h-px w-8 bg-gray-200 sm:mx-5 sm:w-16" />

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-400">
              3
            </div>

            <span className="hidden text-sm font-medium text-gray-400 sm:inline">
              Confirmation
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          CONTENT
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="space-y-6 lg:col-span-2">

            {/* =========================
                CONTACT INFORMATION
            ========================== */}

            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
                    👤
                  </div>

                  <div>

                    <h2 className="font-extrabold text-gray-900">
                      Contact Information
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Enter your contact details
                    </p>

                  </div>

                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">

                {/* FIRST NAME */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    First Name
                  </label>

                  <input
                    required
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={inputClass}
                  />

                </div>


                {/* LAST NAME */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Last Name
                  </label>

                  <input
                    required
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={inputClass}
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />

                </div>


                {/* PHONE */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0300 1234567"
                    className={inputClass}
                  />

                </div>

              </div>

            </section>


            {/* =========================
                SHIPPING ADDRESS
            ========================== */}

            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-lg">
                    📍
                  </div>

                  <div>

                    <h2 className="font-extrabold text-gray-900">
                      Shipping Address
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Where should we deliver your order?
                    </p>

                  </div>

                </div>

              </div>


              <div className="space-y-5 p-5 sm:p-6">

                {/* ADDRESS */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Street Address
                  </label>

                  <textarea
                    required
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows="3"
                    placeholder="House #, Street, Area..."
                    className={`${inputClass} resize-none`}
                  />

                </div>


                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* CITY */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      City
                    </label>

                    <input
                      required
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Islamabad"
                      className={inputClass}
                    />

                  </div>


                  {/* POSTAL */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="44000"
                      className={inputClass}
                    />

                  </div>

                </div>

              </div>

            </section>


            {/* =========================
                PAYMENT
            ========================== */}

            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-lg">
                    💳
                  </div>

                  <div>

                    <h2 className="font-extrabold text-gray-900">
                      Payment Method
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Choose how you'd like to pay
                    </p>

                  </div>

                </div>

              </div>


              <div className="space-y-3 p-5 sm:p-6">

                {/* COD */}

                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition duration-200 ${
                    paymentMethod === "cod"
                      ? "border-blue-500 bg-blue-50 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                    className="h-4 w-4 accent-blue-600"
                  />

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                    💵
                  </div>

                  <div className="flex-1">

                    <p className="font-bold text-gray-900">
                      Cash on Delivery
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Pay when your order arrives
                    </p>

                  </div>

                  {paymentMethod === "cod" && (
                    <span className="text-sm font-bold text-blue-600">
                      ✓
                    </span>
                  )}

                </label>


                {/* CARD */}

                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition duration-200 ${
                    paymentMethod === "card"
                      ? "border-blue-500 bg-blue-50 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                    className="h-4 w-4 accent-blue-600"
                  />

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                    💳
                  </div>

                  <div className="flex-1">

                    <p className="font-bold text-gray-900">
                      Credit / Debit Card
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Payment will be processed securely
                    </p>

                  </div>

                  {paymentMethod === "card" && (
                    <span className="text-sm font-bold text-blue-600">
                      ✓
                    </span>
                  )}

                </label>

              </div>

            </section>

          </div>


          {/* =========================
              RIGHT SIDE - SUMMARY
          ========================== */}

          <div>

            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              {/* SUMMARY HEADER */}

              <div className="border-b border-gray-100 bg-gray-50 px-5 py-5 sm:px-6">

                <h2 className="text-lg font-extrabold text-gray-900">
                  Order Summary
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {cart.length} product{cart.length !== 1 ? "s" : ""} in your order
                </p>

              </div>


              {/* ITEMS */}

              <div className="max-h-72 space-y-4 overflow-y-auto p-5 sm:p-6">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-3"
                  >

                    <div className="relative shrink-0">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-xl object-cover ring-1 ring-gray-200"
                      />

                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
                        {item.quantity}
                      </span>

                    </div>


                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-bold text-gray-900">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Rs. {Number(item.price).toLocaleString()} each
                      </p>

                    </div>


                    <p className="whitespace-nowrap text-sm font-bold text-gray-900">
                      Rs.{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </p>

                  </div>

                ))}

              </div>


              {/* TOTALS */}

              <div className="border-t border-gray-100 px-5 py-5 sm:px-6">

                <div className="space-y-3">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900">
                      Rs. {subtotal.toLocaleString()}
                    </span>

                  </div>


                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span
                      className={
                        shipping === 0
                          ? "font-bold text-green-600"
                          : "font-semibold text-gray-900"
                      }
                    >
                      {shipping === 0
                        ? "FREE"
                        : `Rs. ${shipping.toLocaleString()}`}
                    </span>

                  </div>

                </div>


                {/* FREE SHIPPING */}

                {shipping > 0 && (
                  <div className="mt-4 rounded-xl bg-blue-50 px-3 py-3">

                    <p className="text-xs font-medium leading-5 text-blue-700">
                      🚚 Add Rs.{" "}
                      {(5000 - subtotal).toLocaleString()}{" "}
                      more to get free shipping.
                    </p>

                  </div>
                )}


                {shipping === 0 && (
                  <div className="mt-4 rounded-xl bg-green-50 px-3 py-3">

                    <p className="text-xs font-semibold text-green-700">
                      🎉 You qualify for free shipping!
                    </p>

                  </div>
                )}


                <div className="my-5 h-px bg-gray-200" />


                {/* GRAND TOTAL */}

                <div className="flex items-center justify-between">

                  <span className="font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Rs. {total.toLocaleString()}
                  </span>

                </div>


                {/* PLACE ORDER */}

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0"
                >
                  Place Order
                  <span>→</span>
                </button>


                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                  🔒 Your information is secure and protected.
                </p>

              </div>

            </div>

          </div>

        </form>

      </main>

    </div>
  )
}

export default Checkout