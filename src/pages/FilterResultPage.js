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
import CardLoader from "../components/loader/CardLoader";

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
              <div
                className="group cursor-pointer relative"
                ref={animeData.media.length - 1 === index && setLastElement}
              >
                {isRanked && index < 100 && (
                  <div className="absolute z-20 -top-2 -left-2 w-[38px] h-[38px] bg-red-600 rounded-full  p-2 font-bold flex justify-center items-center text-sm ">
                    #{index + 1}
                  </div>
                )}

                <Link
                  to={`/anime/${list.id}/${generateSlug(
                    list.title.userPreferred
                  )}`}
                  className=" relative"
                >
                  <div className="card-height mb-3 overflow-hidden">
                    <img
                      src={list.coverImage.large}
                      alt=""
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-2 group-hover:text-active text-xs md:text-base line-clamp-2">
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
