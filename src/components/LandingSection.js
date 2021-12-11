import CustomTippy from "./CustomTippy";
import { Link } from "react-router-dom";
import { getDate, generateSlug } from "../utils/index";

function LandingSection({ title, lists, segment }) {
  return (
    <div>
      <div className="flex justify-between">
        <Link
          to={`/search/anime/${segment}`}
          className="uppercase text-lg font-semibold hover:text-active"
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
      {lists && (
        <div className="grid grid-cols-results justify-between mt-5 gap-5">
          {lists.slice(1).map((list) => (
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
              <div className="group cursor-pointer">
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
      )}
    </div>
  );
}

export default LandingSection;
