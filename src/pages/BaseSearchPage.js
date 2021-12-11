import { useSearchParams } from "react-router-dom";
import HomePage from "./HomePage";
import SearchAnime from "./SearchAnime";

function BaseSearchPage() {
  const [searchParams] = useSearchParams();
  const queryList = ["genres", "search", "format", "season", "year"];
  const hasQuery = queryList.some((name) => searchParams.has(name));

  if (!hasQuery) {
    return <HomePage />;
  }

  return <SearchAnime />;
}

export default BaseSearchPage;
