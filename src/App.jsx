import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import facebook from './assets/facebook.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section>
          <div>
            <img src={facebook} width="301" />
            <p class="connect">Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div>
            <form>
              <label>
                <input type="text" placeholder="Enter Address or Phone Number" />
              </label>
              <label>
                <input type="password" placeholder="Password" />
              </label>
              <button>Log in</button>
              <p class="forgot">
                <a>Forgotten Password</a>
              </p>
              <p class="create">
                <button>Create new account</button>
              </p>
            </form>
            <p style={{textAlign:"center"}}>
              <a href="" class="page">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
