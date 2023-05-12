import React from 'react'
import Placeholder from '../assets/1920x300.svg'
import Map from '../assets/map.png'
import  { useState } from 'react'
import { checkIfEmpty } from './Validation'

const initState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: ''
}

hej

const Contact = () => {

  const [formData, setFormData] = useState(initState)

  
  const [error, setError] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''

  })

  const handleChaneInput = (e) =>{
    setFormData(prevData =>{
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

     if(checkIfEmpty(formData.fullName)){
      setError(data => { 
      return {
      ...data,fullName: 'You need to enter a name'}})}


    if(checkIfEmpty(formData.email)){
      setError(data => { 
      return {
      ...data,email: 'You need to enter an email'}})}

    if(checkIfEmpty(formData.message)){
      setError(data => { 
      return {
      ...data,message: 'You need to enter a message'}})}

      
        setFormData(initState)
    }


return (

  <div>

    <img src={Placeholder} alt="" />  
    <div className='create-form'>
      
     
      <form onSubmit={handleSubmit}>
        <div className='form-group right'>
          <label htmlFor="fullName">Full Name*</label>
          <input 
          type="text" 
          name='fullName' 
          className='input' 
          id='fullName' 
          value={formData.fullName} 
          onChange={handleChaneInput}  />
          <p className='error-text'>{error.fullName}</p>
       </div>

       <div className='form-group left'>
          <label htmlFor="email">E-mail*</label>
          <input 
          type="email" 
          name='email' 
          className='input' 
          id='email' 
          value={formData.email} 
          onChange={handleChaneInput} />
          <p className='error-text'>{error.email}</p>
       </div>

      <div className='form-group right'>
         <label htmlFor="mobile">Mobile (optional)</label>
         <input 
         type="text" 
         name='mobile' 
         className='input' 
         id='mobile' 
         value={formData.mobile} 
         onChange={handleChaneInput} />
         <p className='error-text'>{error.mobile}</p>
      </div>

      <div className='form-group left'>
        <label htmlFor="company">Company (optional)</label>
        <input 
        type="text" 
        name='company' 
        className='input'
         id='company'  
         value={formData.company} 
         onChange={handleChaneInput}/>
        <p>{error.company}</p>
      </div>
 
      <div className='form-group'>
        <label htmlFor="message">Message</label>
        {/* <input type="text" name='message' className='input' id='message' value={formData.message} onChange={handleChaneInput}/> */}
        <textarea  
        name="message" 
        id="message"  
        className='message-input'  
        value={formData.message} 
        onChange={handleChaneInput}></textarea>
        <p className='error-text'>{error.message}</p>
       </div>


    
      <div>
        <input className='checkbox' type="checkbox" />
        <label className='text' htmlFor="checkbox">Save my name, email and website in this browser for the next time I make a comment</label>
      </div>
     <button className='btn btn-primary'>Submit</button>
   </form>
 </div>
      <div>
        <img id='map' src={Map} alt="map" />
      </div>
  </div>
    
  )
}

export default Contact