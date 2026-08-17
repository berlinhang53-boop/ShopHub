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


  const [paymentMethod, setPaymentMethod] =
    useState("cod")


  // =========================
  // FORM CHANGE
  // =========================

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target


    setForm({
      ...form,
      [name]: value,
    })

  }


  // =========================
  // TOTALS
  // =========================

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price *
        item.quantity,
    0
  )


  const shipping =
    subtotal >= 5000
      ? 0
      : 250


  const total =
    subtotal + shipping


  // =========================
  // SUBMIT
  // =========================

//   const handleSubmit = (e) => {

//     e.preventDefault()

//     onPlaceOrder({
//       customer: form,
//       paymentMethod,
//       total,
//     })

//   }


const handleSubmit = (e) => {

  e.preventDefault()

  onPlaceOrder({
    name: `${form.firstName} ${form.lastName}`.trim(),
    email: form.email,
    phone: form.phone,
    address: `${form.address}, ${form.city}${form.postalCode ? `, ${form.postalCode}` : ""}`,
    paymentMethod,
    total,
  })

}


  return (
    <div className="fixed inset-0 z-[85] overflow-y-auto bg-gray-50">


      {/* =========================
          HEADER
      ========================== */}

      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">

          <button
            onClick={onBack}
            className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
          >
            ←
          </button>

          <div>

            <p className="text-sm font-medium text-blue-600">
              CHECKOUT
            </p>

            <h1 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              Complete Your Order
            </h1>

          </div>

        </div>

      </header>


      {/* =========================
          CONTENT
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >


          {/* =========================
              CUSTOMER DETAILS
          ========================== */}

          <div className="space-y-6 lg:col-span-2">


            {/* CONTACT */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-extrabold text-gray-900">
                Contact Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                We'll use this information to contact you about your order.
              </p>


              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">


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
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                {/* PHONE */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone
                  </label>

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0300 1234567"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>

            </div>


            {/* =========================
                SHIPPING ADDRESS
            ========================== */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-extrabold text-gray-900">
                Shipping Address
              </h2>


              <div className="mt-6 space-y-4">


                {/* ADDRESS */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Address
                  </label>

                  <textarea
                    required
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows="3"
                    placeholder="House #, Street, Area..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


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
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                PAYMENT
            ========================== */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-extrabold text-gray-900">
                Payment Method
              </h2>


              <div className="mt-5 space-y-3">


                {/* COD */}

                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "cod"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={
                      paymentMethod === "cod"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <div>

                    <p className="font-semibold text-gray-900">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay when your order arrives.
                    </p>

                  </div>

                </label>


                {/* CARD */}

                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "card"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={
                      paymentMethod === "card"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <div>

                    <p className="font-semibold text-gray-900">
                      Credit / Debit Card
                    </p>

                    <p className="text-sm text-gray-500">
                      Payment will be processed securely.
                    </p>

                  </div>

                </label>

              </div>

            </div>

          </div>


          {/* =========================
              ORDER SUMMARY
          ========================== */}

          <div>

            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

              <h2 className="text-lg font-extrabold text-gray-900">
                Order Summary
              </h2>


              {/* ITEMS */}

              <div className="mt-5 max-h-64 space-y-4 overflow-y-auto">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-3"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>

                    </div>

                    <p className="text-sm font-semibold">
                      Rs.{" "}
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </p>

                  </div>

                ))}

              </div>


              <div className="my-5 h-px bg-gray-200" />


              {/* TOTALS */}

              <div className="space-y-3">

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    Rs.{" "}
                    {subtotal.toLocaleString()}
                  </span>

                </div>


                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Shipping
                  </span>

                  <span className="font-semibold">
                    {shipping === 0
                      ? "FREE"
                      : `Rs. ${shipping.toLocaleString()}`}
                  </span>

                </div>


                <div className="h-px bg-gray-200" />


                <div className="flex justify-between">

                  <span className="font-bold">
                    Total
                  </span>

                  <span className="text-xl font-extrabold">
                    Rs.{" "}
                    {total.toLocaleString()}
                  </span>

                </div>

              </div>


              {/* PLACE ORDER */}

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Place Order
              </button>


              <p className="mt-4 text-center text-xs text-gray-400">
                🔒 Your information is secure and protected.
              </p>

            </div>

          </div>

        </form>

      </main>

    </div>
  )
}

export default Checkout