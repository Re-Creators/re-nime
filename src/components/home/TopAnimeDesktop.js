import { BsEmojiSmile } from "react-icons/bs";
import { generateSlug } from "../..//utils";
import { Link } from "react-router-dom";

function TopAnimeDesktop({ lists }) {
  return (
    <div className="lg:px-5">
      <div className="flex justify-between">
        <Link to="/" className="font-semibold">
          TOP 100 ANIME
        </Link>
        <Link to="/search/anime/top-100" className="text-xs">
          View All
        </Link>
      </div>
      <div className="mt-3">
        {lists &&
          lists.map((list, index) => (
            <div className="flex items-center h-24 mt-5" key={list.id}>
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
  );
}

export default TopAnimeDesktop;
