import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Container } from "./components/index"
import { Header, Footer } from "./sections/index"
import { Home, Profile } from './Pages/index'
import './App.css'
const App = () => {
    return (
        <Router>
            <Header />
            <Container >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Container >
            <Footer />
        </Router>
    )
}
export default App