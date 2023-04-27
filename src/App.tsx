import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='header'>
        <div className="logo-container">
          <p className='logo'>Shortly</p>
        </div>
        <div className="menu">
          <img src="menu.png" alt="" />
        </div>
      </div>
      <main>
        <img className='hero' src="illustration-working.svg" alt="person working at a desk" />
        <section className="more-than">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          <button>
            Get Started
          </button>
        </section>
        <section className="shortener-forms">

        </section>

      </main>


    </div>
  )
}

export default App
