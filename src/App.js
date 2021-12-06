import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import DetailOverview from "./components/detail/DetailOverview";
import DetailWatch from "./components/detail/DetailWatch";
import DetailStaff from "./components/detail/DetailStaff";
import DetailStats from "./components/detail/DetailStats";
import DetailSocial from "./components/detail/DetailSocial";
import DetailCharacter from "./components/detail/DetailCharacter";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="anime/:id/:name" element={<DetailPage />}>
          <Route index element={<DetailOverview />} />
          <Route path="watch" element={<DetailWatch />} />
          <Route path="character" element={<DetailCharacter />} />
          <Route path="staff" element={<DetailStaff />} />
          <Route path="stats" element={<DetailStats />} />
          <Route path="social" element={<DetailSocial />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
