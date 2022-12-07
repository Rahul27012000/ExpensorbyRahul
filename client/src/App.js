import './App.css'
import { useState } from 'react'

function App () {
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date:''
  })

  async function handleSubmit (e) {
    e.preventDefault()
    const res=await fetch('http://localhost:4000/transaction',{
      method:'POST',
      body:form,
    });
    console.log(res)
  }

  function handleInput (e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='amount'
          value={form.amount}
          onChange={handleInput}
          placeholder='Enter transaction amount'
        ></input>
        <input
          type='description'
          name='description'
          value={form.description}
          onChange={handleInput}
          placeholder='Enter transaction details'
        ></input>
        <input
          type='date'
          name='date'
          value={form.date}
          onChange={handleInput}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
