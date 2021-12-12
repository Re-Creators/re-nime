import { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { BsChevronDown, BsFillHeartFill } from "react-icons/bs";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

const MAX_OVERVIEW_WORD = 1236;

function DetailHeader({
  overview,
  bannerImg,
  coverImg,
  title,
  isHaveStreaming,
}) {
  const [isTrancuted, setIsTruncated] = useState(null);
  const { id, name } = useParams();
  const location = useLocation();
  const pathnameRef = useRef(`/anime/${id}/${name}`);
  useEffect(() => {
    setIsTruncated(overview.length > MAX_OVERVIEW_WORD);
  }, [overview]);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <header>
      <div className="w-full h-auto bg-primary">
        {/* Cover Image */}
        <div
          className="w-full h-detail-cover bg-center bg-cover"
          style={{ backgroundImage: `url("${bannerImg}")` }}
        >
          <div className="w-full h-full bg-cover-shadow"></div>
        </div>
        {/* Detail */}
        <div
          className="grid grid-cols-detail gap-10  mx-auto min-w-container max-w-container pb-4"
          style={{ minHeight: "250px" }}
        >
          {/* Poster */}
          <div className="-mt-28">
            <img
              src={coverImg}
              alt=""
              className="w-full object-contain rounded-md shadow-md"
            />
            <div className="mt-5 text-white text-sm flex justify-between h-9">
              <button className=" rounded-md flex items-center h-full">
                <span className="px-5 py-2 bg-blue-500 rounded-l-sm">
                  Add to List
                </span>
                <span className="px-4 py-3 bg-blue-400 h-full rounded-r-sm ">
                  <BsChevronDown />
                </span>
              </button>
              <button className="p-3 bg-red-400 rounded-sm">
                <BsFillHeartFill />
              </button>
            </div>
          </div>
          {/* Overview */}
          <div className="mt-3 text-white relative">
            <div className="mb-10">
              <h1 className="font-semibold text-lg">{title}</h1>
              <p className="py-3 text-sm max-w-text group relative ">
                {isTrancuted === false
                  ? parse(overview)
                  : parse(truncateString(overview, MAX_OVERVIEW_WORD))}
                {isTrancuted && (
                  <span
                    className="absolute bottom-0 inset-x-0 py-5 bg-shadow-dark text-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300"
                    onClick={() => setIsTruncated(false)}
                  >
                    Read More
                  </span>
                )}
              </p>
            </div>
            {/* Content Tab */}
            <div className="flex justify-evenly absolute bottom-0 inset-x-0">
              <Link
                className={
                  location.pathname === pathnameRef.current
                    ? "text-active"
                    : "text-white hover:text-active"
                }
                to={pathnameRef.current}
              >
                Overview
              </Link>
              {isHaveStreaming && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-active" : "text-white hover:text-active"
                  }
                  to={`${pathnameRef.current}/watch`}
                >
                  Watch
                </NavLink>
              )}

              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-active" : "text-white hover:text-active"
                }
                to={`${pathnameRef.current}/characters`}
              >
                Character
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-active" : "text-white hover:text-active"
                }
                to={`${pathnameRef.current}/staff`}
              >
                Staff
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-active" : "text-white hover:text-active"
                }
                to={`${pathnameRef.current}/stats`}
              >
                Stats
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-active" : "text-white hover:text-active"
                }
                to={`${pathnameRef.current}/social`}
              >
                Social
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DetailHeader;
