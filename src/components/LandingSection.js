import CustomTippy from "./CustomTippy";
import { Link } from "react-router-dom";
import { getDate, generateSlug } from "../utils/index";
import CardLoader from "./loader/CardLoader";

function LandingSection({ title, lists, segment }) {
  return (
    <div className="">
      <div className="flex justify-between">
        <Link
          to={`/search/anime/${segment}`}
          className="uppercase xl:text-lg font-semibold hover:text-active"
        >
          {title}
        </Link>
        <Link
          to={`/search/anime/${segment}`}
          className="text-xs hover:text-active"
        >
          View All
        </Link>
      </div>

      <div className="grid-container mt-5 gap-3 lg:gap-8  ">
        {!lists
          ? [...Array(6).keys()].map((index) => <CardLoader key={index} />)
          : lists.map((list, index) => (
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
                <div className="group cursor-pointer w-full grid grid-rows-min-content relative md:last:hidden">
                  <Link
                    to={`/anime/${list.id}/${generateSlug(
                      list.title.userPreferred
                    )}`}
                    className="card-height w-full relative"
                  >
                    <img
                      src={list.coverImage.large}
                      alt=""
                      className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-md"
                    />
                  </Link>
                  <Link
                    to={`/anime/${list.id}/${generateSlug(
                      list.title.userPreferred
                    )}`}
                  >
                    <div className="card-text mt-2 group-hover:text-active ">
                      {list.title.userPreferred}
                    </div>
                  </Link>
                </div>
              </CustomTippy>
            ))}
      </div>
    </div>
  );
}

export default LandingSection;
