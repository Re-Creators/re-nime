import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FILTER_ANIME } from "../graphql/querySchema";
import { generateSlug } from "../utils";
import CustomTippy from "../components/CustomTippy";
import { getDate } from "../utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTitle } from "../features/filter/filterSlice";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { getFilterData } from "../utils";

function FilterResultPage({ filter }) {
  const filterData = getFilterData(filter);
  const { data, loading, error, fetchMore } = useQuery(FILTER_ANIME, {
    variables: filterData.variable,
  });

  const { setLastElement, animeData } = useInfiniteScroll(
    (page) => fetchMore({ variables: { page: page } }),
    data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(setTitle(filterData.title));
    }

    return () => {
      dispatch(setTitle(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="grid grid-cols-results justify-between mt-5 gap-5">
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
            <div
              className="group cursor-pointer"
              ref={animeData.media.length - 1 === index && setLastElement}
            >
              <Link
                to={`/anime/${list.id}/${generateSlug(
                  list.title.userPreferred
                )}`}
                className=" relative"
              >
                <div className="mb-3 w-full h-card-result overflow-hidden">
                  <img
                    src={list.coverImage.large}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="mt-2 group-hover:text-active">
                  {list.title.userPreferred}
                </div>
              </Link>
            </div>
          </CustomTippy>
        ))}
    </div>
  );
}

export default FilterResultPage;
