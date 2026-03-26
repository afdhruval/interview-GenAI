import {React , useState} from 'react'
import "../styles/Form.scss"
import { useNavigate, Link } from 'react-router'

const Login = () => {

  const [email, setemail] = useState([])
  const [password, setpassword] = useState([])
  const [useranme, setuseranme] = useState([])


  const handelSubmit = (e) => {
    e.preventDefault()
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
              value={useranme}
              onChange={(e) => {
                setuseranme(e.target.value)
              }}
              type="email" placeholder='enter ur email' />
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