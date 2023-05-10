import  { useState } from 'react'
import axios from 'axios'
import {} from 'react-router-dom'


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChane = e =>{
    setFormData(preData => {
      return {
        ...preData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post('', formData)
    // if(res){
      // setUser(res)
    }

  


  return (

    <div className='create-form'>
      <p className='form-text'>Please Login To Your Account</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="email">E-mail*</label><p className='red-text'>Don't have an Account yet?</p>
          <input type="text" name='email' className='input' id='email' value={formData.email} onChange={handleChane}/>
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password*</label><p className='red-text1'>Forgot Your Password ?</p>
          <input type="text" name='password' className='input' id='password' value={formData.password} onChange={handleChane}/>
        </div>
        <div>
          <input className='checkbox' type="checkbox" />
          <label className='text' htmlFor="checkbox">Please keep me logged in</label>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default Login