import React, { useState } from 'react'
import "../styles/Form.scss"
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

const Login = () => {

  const { loading, handleLogin } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()

    handleLogin({ email, password })
  }

  if(loading){
    return (
      <main>
        <h1>Loadding..........</h1>
      </main>
    )
  }

  return (
    <main>
      <div className='from-container'>
        <h1>Login Form</h1>

        <form onSubmit={handlesubmit}>
          <div className='center'>
            <label>Email :</label>
            <input
              type="email"
              placeholder='enter ur email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='center'>
            <label>Password :</label>
            <input
              type="password"
              placeholder='enter ur password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <br /><br />

        <h1 style={{ fontSize: "15px", color: "black" }}>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </h1>

      </div>
    </main>
  )
}

export default Login