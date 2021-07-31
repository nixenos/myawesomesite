import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

    return (
        <section className="position-relative section contact-section">
          <h3 className="text-primary">Contact me</h3>
    <div className="mb-3">
      <label htmlFor="userEmail" className="form-label">Your name</label>
    <input type="text" className="form-control" id="userName" placeholder="John Smith" onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <div className="mb-3">
      <label htmlFor="userEmail" className="form-label">Your email address</label>
    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    <div className="mb-3">
      <label htmlFor="userMessage" className="form-label">Your message</label>
          <textarea className="form-control" id="userMessage" rows="3" placeholder="Hi!" onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
    </div>
    <button type="submit" className="btn btn-warning mb-3" onClick={(e)=>{handleSubmit(e)}}>Submit!</button>
    </section>
    )
}

export default Contact;