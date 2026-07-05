import { Routes, Route, useLocation, useNavigate, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./pages/portfolioPage";
import { Toaster } from "./components/ui/toaster";
import AchievementsPage from "./components/Achievements";

function App() {

  const pathname = useLocation().pathname;
  const NoNavbarRoute = ['/'];
  return (
    <>
    <Toaster />
      
        {!NoNavbarRoute.includes(pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      
    </>
  )
}

export default App
