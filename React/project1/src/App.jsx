import './App.css'
import Car from './assets/img.avif'

function App() {

  return (
    <>
      <div className="navbar">
      <div className="logo">MyWebsite</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="hero">
        <img src={Car} alt="" />
    </div>
      
    </>
  )
}

export default App
