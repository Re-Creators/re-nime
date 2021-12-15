import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import DetailOverview from "./components/detail/DetailOverview";
import DetailWatch from "./components/detail/DetailWatch";
import DetailStaff from "./components/detail/DetailStaff";
import DetailStats from "./components/detail/DetailStats";
import DetailCharacter from "./components/detail/DetailCharacter";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import FilterResultPage from "./pages/FilterResultPage";
import BaseSearchPage from "./pages/BaseSearchPage";
import CharacterPage from "./pages/CharacterPage";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const windowSize = useWindowSize();

  return (
    <div className="App ">
      {windowSize.width > 1024 && <Navbar />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search/anime">
            <Route index element={<BaseSearchPage />} />
            <Route
              path="trending"
              element={<FilterResultPage filter="trending" />}
            />
            <Route
              path="this-season"
              element={<FilterResultPage filter="this-season" />}
            />
            <Route
              path="next-season"
              element={<FilterResultPage filter="next-season" />}
            />
            <Route
              path="popular"
              element={<FilterResultPage filter="popular" />}
            />
            <Route
              path="top-100"
              element={<FilterResultPage filter="top-100" isRanked />}
            />
          </Route>
        </Route>
        <Route path="anime/:id/:name" element={<DetailPage />}>
          <Route index element={<DetailOverview />} />
          <Route path="watch" element={<DetailWatch />} />
          <Route path="characters" element={<DetailCharacter />} />
          <Route path="staff" element={<DetailStaff />} />
          <Route path="stats" element={<DetailStats />} />
        </Route>
        <Route path="/character/:id/:name" element={<CharacterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
