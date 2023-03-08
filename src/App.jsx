import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </Router>
  )
}

export default App
