import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
function App() {
  return (
    <BrowserRouter>
      {/* className="d-flex" is a class from react-bootstrap and lex-column: set flex direction to felx column */}
      <div className="d-flex flex-column site-container">
        <header>
          {/* convert a simple header to a bootrap header */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amabuy</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>

          {/* link :no page refresh ,to= href
          <Link to="/">amabuy</Link> */}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          {/* className="text-center from bootrap */}
          <div className="text-center">All rights reverved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
