import { Route, Routes } from "react-router-dom"
import BrowseCandidates from "./components/BrowseCandidates"
import BrowseCompanies from "./components/BrowseCompanies"
import FindJob from "./components/FindJob"
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
          <Route path="/job" element={<FindJob />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
