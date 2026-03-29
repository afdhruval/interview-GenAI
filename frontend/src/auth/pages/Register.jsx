import { React, useState, } from 'react'
import "../styles/Form.scss"
import { useNavigate, Link, } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  const [email, setemail] = useState([])
  const [username, setusername] = useState([])
  const [password, setpassword] = useState([])

  const navigate = useNavigate()

  const { loading, handleRegister } = useAuth()


  const handelSubmit = (e) => {
    e.preventDefault()
    handleRegister({ email, username, password })
    navigate("/")
  }

  if (loading) {
    return (
      <main>
        <h1>Loadding..........</h1>
      </main>
    )
  }

  return (
    <main>
      <div className='from-container'>
        <h1>Register Form</h1>
        <form
          onSubmit={handelSubmit}
        >
          <div className='center'>
            <label htmlFor="">Email   : </label>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }}
              type="email" placeholder='enter ur email' />
          </div>
          <div className='center'>
            <label htmlFor="">Username   : </label>
            <input
              value={username}
              onChange={(e) => {
                setusername(e.target.value)
              }}
              type="text" placeholder='enter ur email' />
          </div>
          <div className='center'>
            <label htmlFor="">Password   :</label>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              type="password" placeholder='enter ur password' />
          </div>
          <button>Register</button>
        </form>
        <h1 style={{ fontSize: "15px", color: "black" }}>Have an account ? <Link to={"/login"}>login with account</Link>  </h1>
      </div>
    </main>
  )
}

export default Login