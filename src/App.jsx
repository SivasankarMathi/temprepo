import { useState } from 'react'
import LoginPage from './components/LoginPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogin = (email) => {
    setIsLoggedIn(true)
    setUser(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="welcome-container">
          <h1>Welcome, {user}! 👋</h1>
          <p>You have successfully logged in.</p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
