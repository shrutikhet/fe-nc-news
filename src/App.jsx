import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SidePanel from "./components/SidePanel";
import Details from "./components/Details";
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SidePanel /> <Details />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
