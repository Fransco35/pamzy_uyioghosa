import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OverviewSection from "./components/OverviewSection";
import MaintenanceSection from "./components/MaintenanceSection";
import DiagnosticsSection from "./components/DiagnosticsSection";
import CausesSection from "./components/CausesSection";
import FAQSection from "./components/FAQSection";
import "./App.css";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <Navbar />
      <OverviewSection />
      <CausesSection />
      <DiagnosticsSection />
      <MaintenanceSection />
      <FAQSection />
    </div>
  );
}

export default App;
