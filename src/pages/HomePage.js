import LandingSection from "../components/LandingSection";
import { useQuery } from "@apollo/client";
import { HOME_LIST_QUERY } from "../graphql/querySchema";
import useWindowSize from "../hooks/useWindowSize";
import TopAnimeMobile from "../components/home/TopAnimeMobile";
import TopAnimeDesktop from "../components/home/TopAnimeDesktop";
function HomePage() {
  const { loading, error, data } = useQuery(HOME_LIST_QUERY, {
    variables: {
      type: "ANIME",
      season: "FALL",
      seasonYear: 2021,
      nextSeason: "WINTER",
      nextYear: 2022,
    },
  });
  const size = useWindowSize();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="w-full flex flex-col px-4 md:px-0 gap-10 mb-96">
      <LandingSection
        title="Trending"
        lists={data.trending.media}
        segment="trending"
      />
      <LandingSection
        title="Popular This Season"
        lists={data.season.media}
        segment="this-season"
      />
      <LandingSection
        title="Upcoming next season"
        lists={data.nextSeason.media}
        segment="next-season"
      />
      <LandingSection
        title="All Time Popular"
        segment="popular"
        lists={data.popular.media}
      />
      {/* Top 100 Anime */}
      <div>
        {size.width < 1040 ? (
          <TopAnimeMobile lists={data.top.media} />
        ) : (
          <TopAnimeDesktop lists={data.top.media} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
