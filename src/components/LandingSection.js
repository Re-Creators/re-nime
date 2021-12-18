import CustomTippy from "./CustomTippy";
import { Link } from "react-router-dom";
import { getDate } from "../utils/index";
import CardLoader from "./loader/CardLoader";
import LandingCard from "./Cards/LandingCard";

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
                <LandingCard
                  id={list.id}
                  title={list.title.userPreferred}
                  img={list.coverImage.large}
                />
              </CustomTippy>
            ))}
      </div>
    </div>
  );
}

export default LandingSection;
