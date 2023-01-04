import { Route, Routes } from "react-router-dom"
import BrowseCandidates from "./components/BrowseCandidates"
import BrowseCompanies from "./components/BrowseCompanies"
import HomePageComponents from "./components/HomePageComponents"
import Login from "./components/Login"
import Register from "./components/Register"
import WithNavAndFooter from "./components/WithNavAndFooter"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<WithNavAndFooter />}>
          <Route path="/" element={<HomePageComponents />} />
          <Route path="/candidates" element={<BrowseCandidates />} />
          <Route path="/companies" element={<BrowseCompanies />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
