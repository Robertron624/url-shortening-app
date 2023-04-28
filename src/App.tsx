import { useState } from 'react'
import './App.scss'

type Statistic = {
  title: string
  description: string
  image: string
}

const statistics: Statistic[] = [
  {
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
    image: 'icon-brand-recognition.svg'
  },

  {
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    image: 'icon-detailed-records.svg'
  },
  {
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    image: 'icon-fully-customizable.svg'
  }
]


function Shortener(){
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted -> ', longUrl)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Shorten a link here...' value={longUrl} onChange={e => setLongUrl(e.target.value)} />
      <button type='submit'>Shorten It!</button>
    </form>
  )
}

function App() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  function handleMobileMenuClick() {
    setMobileMenuIsOpen((prev) => !prev)
  }

  return (
    <div className='app'>
      <div className='header'>
        <div className="logo-container">
          <p className='logo'>Shortly</p>
        </div>
        <div onClick={handleMobileMenuClick} className="menu">
          <img src="menu.png" alt="" />
        </div>
        <div className={`mobile-navigation ${mobileMenuIsOpen == false ? 'hidden' : ''}`}>
          <nav aria-label='mobile'>
            <ul>
              <li><a href='/features'>Features</a></li>
              <li><a href='/pricing'>Pricing</a></li>
              <li><a href='/resources'>Resources</a></li>
            </ul>
          </nav>
          <div className="account">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
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
          <Shortener />
        </section>
        <section className="statistics">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
          <div className="cards">
            {statistics.map((stat, i) => (
              <div className="card" key={i}>
                <div className="image">
                  <img src={stat.image} alt="" />
                </div>
                <h3>{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="boost">
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
        <div className="bottom">
          <div className="logo-container">
            <p className='logo'>Shortly</p>
          </div>
          <div className="features">
            <p className='links-title
            '>Features</p>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <nav aria-label='resources'>
            <p className='links-title
            '>Resources</p>
            <ul>
              <li><a href='/blog'>Blog</a></li>
              <li><a href='/developers'>Developers</a></li>
              <li><a href='/support'>Support</a></li>
            </ul>
          </nav>
          <nav aria-label='company'>
            <p className='links-title
            '>Company</p>
            <ul>
              <li><a href='/about'>About</a></li>
              <li><a href='/our-team'>Our Team</a></li>
              <li><a href='/careers'>Careers</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </nav>
          <div className="social">
            <ul>
              <li><a href="https://www.facebook.com/"><img src="icon-facebook.svg" alt="facebook" /></a></li>
              <li><a href="https://www.twitter.com/"><img src="icon-twitter.svg" alt="twitter" /></a></li>
              <li><a href="https://www.pinterest.com/"><img src="icon-pinterest.svg" alt="pinterest" /></a></li>
              <li><a href="https://www.instagram.com/"><img src="icon-instagram.svg" alt="instagram" /></a></li>
            </ul>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default App
