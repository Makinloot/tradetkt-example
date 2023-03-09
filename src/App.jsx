import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"
import Sell from "./pages/sell/Sell"
import Transaction from "./pages/transaction/Transaction"

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>

    </Router>
  )
}

export default App
