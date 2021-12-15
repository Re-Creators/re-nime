import DetailHeader from "../components/detail/DetailHeader";
import { Outlet, useParams } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { DETAIL_ANIME } from "../graphql/querySchema";
import { DetailContext } from "../context/detailContext";
import parse from "html-react-parser";

function DetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(DETAIL_ANIME, {
    variables: {
      id: id,
      type: "ANIME",
      isAdult: false,
    },
  });

  const sortRangking = (rangking) => {
    const sorted = rangking.filter((rank) => rank.allTime);
    if (sorted.length >= 2) {
      return sorted;
    }
    return rangking.slice(0, 2);
  };

  const convertSecond = (seconds) => {
    if (seconds) {
      const [hours, minute] = new Date(seconds * 1000)
        .toISOString()
        .slice(11, 16)
        .split(":");
      const convertedDay = Math.floor(seconds / 86400);

      return `${convertedDay}d ${hours}h ${minute}m`;
    }
    return "Unknown";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <DetailHeader
        overview={data.Media.description}
        title={data.Media.title.userPreferred}
        bannerImg={data.Media.bannerImage}
        coverImg={data.Media.coverImage.large}
        isHaveStreaming={data.Media.streamingEpisodes.length > 0}
      />
      <div className="mt-5 max-w-container mx-auto block md:grid grid-cols-detail-content gap-10 px-5 xl:px-0">
        <div className="text-white">
          <div className="hidden md:block">
            {data.Media.rankings.length > 0 && (
              <div className="text-xs font-semibold">
                {sortRangking(data.Media.rankings).map((ranking) => (
                  <p
                    className="flex items-center px-2 py-3 bg-primary capitalize rounded-md mb-5"
                    key={ranking.id}
                  >
                    {ranking.type === "RATED" ? (
                      <AiFillStar className="text-yellow-500 mr-3 w-4 h-4" />
                    ) : (
                      <AiFillHeart className="text-red-500 mr-3 w-4 h-4" />
                    )}
                    #{ranking.rank} {ranking.context}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-5 overflow-auto md:block mt-5 bg-primary rounded-md px-3 py-3 text-sm whitespace-nowrap md:whitespace-normal ">
            {data.Media.nextAiringEpisode && (
              <div className="mb-3 text-active font-semibold ">
                <div className="">Airing</div>
                <div className="text-xs mt-1 ">
                  Ep {data.Media.nextAiringEpisode.episode}:{" "}
                  {convertSecond(data.Media.nextAiringEpisode.timeUntilAiring)}
                </div>
              </div>
            )}

            <div className="mb-3">
              <div className="font-semibold">Format</div>
              <div className="text-sm">{data.Media.format}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Episodes</div>
              <div className="text-sm">{data.Media.episodes}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Episodes Duration</div>
              <div className="text-sm">{data.Media.duration} Mins</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Status</div>
              <div className="text-sm capitalize">{data.Media.status}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Start Date</div>
              <div className="text-sm">22</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">End Date</div>
              <div className="text-sm">22</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Season</div>
              <div className="text-sm capitalize">
                {data.Media.season} {data.Media.seasonYear}
              </div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Average Score</div>
              <div className="text-sm">{data.Media.averageScore}%</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Mean Score</div>
              <div className="text-sm">{data.Media.meanScore}%</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Popularity</div>
              <div className="text-sm">{data.Media.popularity}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Favorites</div>
              <div className="text-sm">{data.Media.favourites}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Studios</div>
              <ul className="flex gap-2 md:block">
                {data.Media.studios.edges
                  .filter((studio) => studio.isMain)
                  .map((studio) => (
                    <li key={studio.node.id} className="text-sm">
                      {studio.node.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Producers</div>
              <ul className="flex gap-2 md:block">
                {data.Media.studios.edges
                  .filter((studio) => !studio.isMain)
                  .map((studio) => (
                    <li key={studio.node.id} className="text-sm">
                      {studio.node.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Sources</div>
              <div className="text-sm">{data.Media.source}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Hashtag</div>
              <div className="text-sm">{data.Media.hashtag}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Genres</div>
              <ul className="flex gap-2 md:block">
                {data.Media.genres.map((genre, index) => (
                  <li className="text-sm" key={index}>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Romaji</div>
              <div className="text-sm">{data.Media.title.romaji}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">English</div>
              <div className="text-sm">{data.Media.title.english}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Native</div>
              <div className="text-sm">{data.Media.title.native}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Synonyms</div>
              <ul className="text-sm flex gap-2 md:block">
                {data.Media.synonyms.map((synonym, index) => (
                  <li key={index}>{synonym}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden text-white mb-3">
          <h2 className="my-3">Description</h2>
          <div className="bg-primary p-5 text-sm">
            {parse(data.Media.description)}
          </div>
        </div>

        <div>
          {/* Content tab */}
          <DetailContext.Provider value={{ data: data.Media }}>
            <Outlet />
          </DetailContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
