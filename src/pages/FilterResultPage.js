import { useQuery } from "@apollo/client";
import { FILTER_ANIME } from "../graphql/querySchema";
import CustomTippy from "../components/CustomTippy";
import { getDate } from "../utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTitle } from "../features/filter/filterSlice";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { getFilterData } from "../utils";
import CardLoader from "../components/loader/CardLoader";
import LandingCard from "../components/Cards/LandingCard";

function FilterResultPage({ filter, isRanked }) {
  const filterData = getFilterData(filter);
  const { data, error, fetchMore } = useQuery(FILTER_ANIME, {
    variables: filterData.variable,
  });

  const { setLastElement, animeData } = useInfiniteScroll(
    (page) => fetchMore({ variables: { page: page } }),
    data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${filterData.title} · Renime`;
    if (!error) {
      dispatch(setTitle(filterData.title));
    }

    return () => {
      dispatch(setTitle(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error :(</p>;
  return (
    <div className="grid grid-cols-results sm:grid-cols-results-sm md:grid-cols-results-md lg:grid-cols-results-lg justify-between mt-5 gap-3 md:gap-5 px-3">
      {!animeData
        ? [...Array(20).keys()].map((index) => <CardLoader key={index} />)
        : animeData.media.map((list, index) => (
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
                isRanked={isRanked}
                rank={index + 1}
              />
            </CustomTippy>
          ))}
      <div ref={animeData && setLastElement}></div>
    </div>
  );
}

export default FilterResultPage;
