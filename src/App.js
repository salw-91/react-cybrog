import { Container } from "./components/index"
import { Header, Footer, Hero, MustPopular } from "./sections/index"

import './App.css'
const App = () => {
    return (
        <>
            <Header />
            <Container >
                <Hero />
                <MustPopular />
            </Container >
            <Footer />
        </>
    )
}
export default App