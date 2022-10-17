import { Container } from "./components/index"
import { Header, Footer, Hero, MustPopular, GamingLibrary } from "./sections/index"

import './App.css'
const App = () => {
    return (
        <>
            <Header />
            <Container >
                {/* <Hero />
                <MustPopular /> */}
                <GamingLibrary />
            </Container >
            <Footer />
        </>
    )
}
export default App