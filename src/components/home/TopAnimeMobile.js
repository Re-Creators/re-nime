import { Link } from "react-router-dom";
import { generateSlug } from "../../utils";

function TopAnimeMobile({ lists }) {
  return (
    <div>
      <div className="flex justify-between">
        <Link
          to={`/search/anime/top-100`}
          className="uppercase xl:text-lg font-semibold hover:text-active"
        >
          Top 100 Anime
        </Link>
        <Link
          to={`/search/anime/top-100`}
          className="text-xs hover:text-active"
        >
          View All
        </Link>
      </div>
      {lists && (
        <div className="grid grid-cols-results  justify-between mt-5 gap-3 md:gap-5">
          {lists.map((list, index) => (
            <div
              className="group cursor-pointer w-full grid grid-rows-min-content relative"
              key={list.id}
            >
              <div className="absolute z-20 -top-2 -left-2 w-[30px] h-[30px] bg-red-600 rounded-full  p-2 font-bold flex justify-center items-center text-sm ">
                #{index + 1}
              </div>
              <Link
                to={`/anime/${list.id}/${generateSlug(
                  list.title.userPreferred
                )}`}
                className="h-[157px] xl:h-auto w-full relative"
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
                <div className="mt-2 group-hover:text-active text-xs xl:text-sm line-clamp-2 ">
                  {list.title.userPreferred}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopAnimeMobile;
