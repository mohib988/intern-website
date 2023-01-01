import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePageComponents from "./components/HomePageComponents"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Register from "./components/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
