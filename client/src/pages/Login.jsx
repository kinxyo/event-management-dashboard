import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useAuth } from '../context/ContextProvider'

const Login = () => {
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')
    const navigate = useNavigate()
    // const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(username, email, password)

        const user = {email, password}
        // console.log(import.meta.env.VITE_BASE_URL);

        try {
            const response = await axios.post(`http://localhost:8000/api/auth/login`, user, {withCredentials: true})
            if(response.data.success){
                // console.log(response.data.user);
                // login(response.data.user)
                localStorage.setItem('token', response.data.token)
                // navigate('/notes')
            }
        } catch (error) {
            console.log("Error in login side frontend "+error);
        }
    }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
      
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account? 
            <Link to="/events/signup" className="text-blue-500 hover:underline ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login