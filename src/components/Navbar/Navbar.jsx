import "./Navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Conncet With Me
      </div>
    </div>
  )
}

export default Navbar
