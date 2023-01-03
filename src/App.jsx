import { Route, Routes } from "react-router-dom"
import BrowseCandidates from "./components/BrowseCandidates"
import Footer from "./components/Footer"
import HomePageComponents from "./components/HomePageComponents"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import WithNav from "./components/WithNav"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<WithNav />}>
          <Route path="/candidates" element={<BrowseCandidates />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
