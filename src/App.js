// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AddRecipes from "./pages/addRecipes";
// import MyRecipes from "./pages/myRecipes";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import { Login } from "./components/Auth/Login";
// import Search from "./pages/Search";
// import { Register } from "./components/Auth/Register";
// import AboutUs from "./pages/AboutUs";
// import Landing from "./pages/LandingPage";

// import CountryDetail from "./components/world_cusine/src/pages/CountryDetail";
// import CountryProvider from "./components/world_cusine/src/context/CountryContext";
// import world_home from "./components/world_cusine/src/pages/Home";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/my-recipes" element={<MyRecipes />} />
//           <Route path="/add-recipes" element={<AddRecipes />} />
//           <Route path="/search" element={<Search />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddRecipes from "./pages/addRecipes";
import MyRecipes from "./pages/myRecipes";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Login } from "./components/Auth/Login";
import Search from "./pages/Search";
import { Register } from "./components/Auth/Register";
import AboutUs from "./pages/AboutUs";
import Landing from "./pages/LandingPage";

import CountryDetail from "./components/world_cusine/src/pages/CountryDetail";
import { CountryProvider } from "./components/world_cusine/src/context/CountryContext";
import WorldHome from "./components/world_cusine/src/pages/Home";
import DailyRecommendation from "./components/Daily_recommendation";

function App() {
  return (
    <CountryProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            {/* Existing Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route path="/add-recipes" element={<AddRecipes />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/Daily-recommendation"
              element={<DailyRecommendation />}
            ></Route>

            {/* Routes from the second app */}
            <Route path="/world-home" element={<WorldHome />} />
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CountryProvider>
  );
}

export default App;
