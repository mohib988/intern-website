import { Route, Routes } from "react-router-dom"
import BrowseCandidates from "./components/BrowseCandidates"
import BrowseCompanies from "./components/BrowseCompanies"
import CandidateProfile from "./components/CandidateProfile"
import CompanyProfile from "./components/CompanyProfile"
import CreateCandidateProfile from "./components/CreateCandidateProfile"
import CreateCompanyProfile from "./components/CreateCompanyProfile"
import FindJob from "./components/FindJob"
import HomePageComponents from "./components/HomePageComponents"
import Done from "./components/done.jsx"
import Login from "./components/Login"
import Register from "./components/Register"
import WithNavAndFooter from "./components/WithNavAndFooter"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createprofile" element={<CreateCandidateProfile />} />
        <Route path="/createcompanyprofile" element={<CreateCompanyProfile />} />
        <Route element={<WithNavAndFooter />}>
          <Route path="/" element={<HomePageComponents />} />
          <Route path="/candidates" element={<BrowseCandidates />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/companies" element={<BrowseCompanies />} />
          <Route path="/companies/:id" element={<CompanyProfile />} />
          <Route path="/job" element={<FindJob />} />
        </Route>
          <Route path="/done" element={<Done/>} />
      </Routes>
    </div>
  )
}

export default App
