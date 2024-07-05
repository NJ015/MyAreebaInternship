import { useState } from 'react'
import './App.css'

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing")


  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}