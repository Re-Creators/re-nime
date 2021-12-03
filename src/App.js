import Filter from "./components/Filter";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <div className="App">
      <div className="mx-auto min-w-container xl:max-w-container h-96  mt-14 text-white">
        <Filter />
        <LandingSection />
      </div>
    </div>
  );
}

export default App;
