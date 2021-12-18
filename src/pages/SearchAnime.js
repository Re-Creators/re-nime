import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FILTER_ANIME } from "../graphql/querySchema";
import { transformVariable } from "../utils";
import CustomTippy from "../components/CustomTippy";
import { getDate } from "../utils";
import { useEffect, useMemo } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/loader/Loading";
import LandingCard from "../components/Cards/LandingCard";

function SearchAnime() {
  const [searchParams] = useSearchParams();
  const variables = useMemo(() => {
    let initVariable = { page: 1, type: "ANIME" };

    searchParams.forEach((value, key) => {
      if (key === "genres" || key === "format") {
        const tranformed = transformVariable(key, searchParams.getAll(key));
        initVariable[key] = tranformed;
      } else if (key === "year") {
        initVariable[key] = value + "%";
      } else if (key === "season") {
        initVariable[key] = value.toUpperCase();
      } else {
        initVariable[key] = value;
      }
    });
    return initVariable;
  }, [searchParams]);

  useEffect(() => {
    document.title = `Search Anime · Renime`;
  });

  const { data, loading, error, fetchMore } = useQuery(FILTER_ANIME, {
    variables: variables,
  });

  const { setLastElement, animeData } = useInfiniteScroll(
    (page) => fetchMore({ variables: { page: page } }),
    data
  );

  if (loading)
    return (
      <div className="relative min-h-[400px]">
        <Loading />
      </div>
    );
  if (error) return <p>Error :(</p>;
  if (data.Page.media.length <= 0)
    return <div className="text-white text-center text-3xl">No Result</div>;

  return (
    <div className="grid-container mt-5 gap-5 px-2">
      {animeData &&
        animeData.media.map((list, index) => (
          <CustomTippy
            key={list.id}
            genres={list.genres.slice(0, 3)}
            score={list.averageScore}
            date={getDate(
              list.status,
              list.nextAiringEpisode,
              list.startDate,
              list.endDate,
              list.season
            )}
          >
            <LandingCard
              id={list.id}
              title={list.title.userPreferred}
              img={list.coverImage.large}
              ref={animeData.media.length - 1 === index && setLastElement}
            />
          </CustomTippy>
        ))}
    </div>
  );
}

export default SearchAnime;
