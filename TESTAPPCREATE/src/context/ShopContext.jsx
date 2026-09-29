import { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '221B Baker Street, London',
    orders: 12,
  })

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += 1
        return prev
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    )
  }

  const clearCart = () => setCart([])

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product])
  }

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const cartCount = cart.length

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        darkMode,
        user,
        setUser,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        toggleDarkMode,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  return useContext(ShopContext)
}
