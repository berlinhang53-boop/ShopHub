// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App















// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//         <h1 className="text-3xl font-bold text-blue-600">
//           Mini Store
//         </h1>

//         <p className="mt-3 text-gray-600">
//           Tailwind CSS is working!
//         </p>

//         <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
//           Get Started
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App





import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import ProductSection from "./components/ProductSection"
import Cart from "./components/Cart"
import Footer from "./components/Footer"

function App() {
  // Cart state
  const [cart, setCart] = useState([])

  // Cart sidebar state
  const [cartOpen, setCartOpen] = useState(false)

  // Selected category
  const [selectedCategory, setSelectedCategory] = useState("All")


  // -----------------------------
  // ADD PRODUCT TO CART
  // -----------------------------

  const addToCart = (product) => {
    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ]
    })
  }


  // -----------------------------
  // REMOVE FROM CART
  // -----------------------------

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    )
  }


  // -----------------------------
  // INCREASE QUANTITY
  // -----------------------------

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }


  // -----------------------------
  // DECREASE QUANTITY
  // -----------------------------

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    )
  }


  // -----------------------------
  // CART COUNT
  // -----------------------------

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  )


  return (
    <>
      {/* Navbar */}

      <Navbar
        cartCount={cartCount}
        onCartClick={() =>
          setCartOpen(true)
        }
      />


      {/* Hero */}

      <Hero />


      {/* Categories */}

      <Categories
        onCategorySelect={
          setSelectedCategory
        }
      />


      {/* Products */}

      <ProductSection
        onAddToCart={addToCart}
        selectedCategory={
          selectedCategory
        }
        onCategorySelect={
          setSelectedCategory
        }
      />


      {/* Footer */}

      <Footer />


      {/* Cart */}

      {cartOpen && (
        <Cart
          cart={cart}
          onClose={() =>
            setCartOpen(false)
          }
          onRemove={
            removeFromCart
          }
          onIncrease={
            increaseQuantity
          }
          onDecrease={
            decreaseQuantity
          }
        />
      )}
    </>
  )
}

export default App