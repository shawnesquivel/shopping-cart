// contains routes
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <h1>Hi</h1>
          <h2>yo</h2>
          <p>This is a shopping cart website</p>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
