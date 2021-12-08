import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router-dom";
import LandingSection from "../components/LandingSection";
import { useQuery } from "@apollo/client";
import { HOME_LIST_QUERY } from "../graphql/querySchema";
import { generateSlug } from "../utils";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="flex flex-col gap-10 mb-96">
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
      />
      <LandingSection title="All Time Popular" lists={data.popular.media} />
      <div>
        <div className="flex justify-between">
          <Link to="/" className="font-semibold">
            TOP 100 ANIME
          </Link>
          <Link to="/" className="text-xs">
            View All
          </Link>
        </div>
        <div className="mt-3">
          {data.top.media.map((list, index) => (
            <div className="flex items-center h-24 mt-5">
              <div className="flex items-center justify-center p-4 h-14 mr-4 w-14 text-2xl text-active font-extrabold ">
                <span className="pt-1 text-xl">#</span>
                {index + 1}
              </div>
              <div className="bg-primary w-full h-full p-2 flex items-center">
                <Link
                  to={`/anime/${list.id}/${generateSlug(
                    list.title.userPreferred
                  )}`}
                  className="flex w-1/2 h-full"
                >
                  <img
                    src={list.coverImage.large}
                    alt=""
                    className="h-full object-contain"
                  />
                  <div className="ml-3">
                    <h2 className="hover:text-active">
                      {list.title.userPreferred}
                    </h2>
                    <div className="flex mt-3 gap-2">
                      {list.genres.slice(1, 5).map((genre, index) => (
                        <div
                          key={index}
                          className="py-1 px-3 rounded-md bg-red-500 text-xs"
                        >
                          {genre}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="grid grid-cols-top-anime w-1/2">
                  <div className="flex items-center gap-2">
                    <BsEmojiSmile className="w-5 h-5 mb-2" />
                    <div className="">
                      {list.averageScore}%
                      <div className="text-xs font-semibold">
                        {list.popularity} users
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div>{list.format}</div>
                    <div className="text-xs font-semibold">
                      {list.episodes} episodes
                    </div>
                  </div>
                  <div className="text-sm capitalize">
                    <div>
                      {list.season.toLowerCase()} {list.startDate.year}
                    </div>
                    <div className="text-xs font-semibold ">
                      {list.status.toLowerCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
