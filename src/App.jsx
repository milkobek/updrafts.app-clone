import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/join"];

  return (
    <div className="bg-[rgb(249, 250, 251)]">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div
                id="home"
                style={{ padding: "0", margin: "0", display: "content" }}
              >
                <Hero />
              </div>
              <div
                id="features"
                style={{ padding: "0", margin: "0", display: "content" }}
              >
                <Features />
              </div>
              <div
                id="pricing"
                style={{ padding: "0", margin: "0", display: "content" }}
              >
                <Pricing />
              </div>
              <div
                id="faq"
                style={{ padding: "0", margin: "0", display: "content" }}
              >
                <Faq />
              </div>
              <Footer />
            </>
          }
        />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/join" element={<SignupScreen />} />
      </Routes>
    </div>
  );
}

export default App;
