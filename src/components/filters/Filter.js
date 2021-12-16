import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";
import { FaSlidersH } from "react-icons/fa";
import Dropdown from "../Dropdown";
import filterData from "../../data/filterData";
import useWindowSize from "../../hooks/useWindowSize";
import FilterSelectedItem from "./FilterSelectedItem";
import { useSelector } from "react-redux";
import { selectTitle } from "../../features/filter/filterSlice";
import {
  useLocation,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

function Filter() {
  const title = useSelector(selectTitle);
  const windowSize = useWindowSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [filterSelected, setFilterSelected] = useState(() => {
    const baseSelected = {
      search: [],
      genres: [],
      year: [],
      season: [],
      format: [],
    };

    searchParams.forEach((value, key) => {
      if (key === "genres" || key === "format") {
        baseSelected[key] = searchParams.getAll(key);
        return;
      }

      baseSelected[key] = [value];
    });

    return baseSelected;
  });

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (location.pathname !== "/search/anime/") {
      navigate({
        pathname: "search/anime",
        search: `?${createSearchParams(filterSelected)}`,
      });
      return;
    }

    setSearchParams(filterSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSelected]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (location.pathname === "/") {
      firstRender.current = true;
      setFilterSelected({
        search: [],
        genres: [],
        year: [],
        season: [],
        format: [],
      });
    }
  }, [location]);

  function onFilterSelected(key, item) {
    setFilterSelected((oldVal) => {
      oldVal[key] = item;

      return { ...oldVal };
    });
  }

  function onRemoveSelected(key, item) {
    setFilterSelected((oldVal) => {
      let selectionAfterRemoval = oldVal[key].filter(
        (current) => current !== item
      );
      oldVal[key] = selectionAfterRemoval;

      return { ...oldVal };
    });
  }

  function isSelectedEmpty() {
    for (const item in filterSelected) {
      if (filterSelected[item].length > 0) return true;
    }

    return false;
  }

  return (
    <div className="lg:mb-8 z-50">
      {title && (
        <h1 className="mb-4 ml-3 lg:ml-0 lg:mb-10 text-3xl font-bold capitalize">
          {title}
        </h1>
      )}

      {windowSize.width < 1036 && (
        <div className="px-3 flex">
          <div className="relative w-full">
            <BiSearchAlt2 className="w-4 h-4 abs-center ml-3" />

            {filterSelected.search && (
              <IoIosClose
                className="w-6 h-6 abs-center right-3 icon-input cursor-pointer"
                onClick={() => {
                  onFilterSelected("search", []);
                }}
              />
            )}

            <input
              type="text"
              value={filterSelected.search}
              onChange={(e) =>
                onFilterSelected(
                  "search",
                  e.target.value === "" ? [] : e.target.value
                )
              }
              className="w-full p-3 pl-9 rounded-lg outline-none text-xs"
              style={{ backgroundColor: "#282F44" }}
              placeholder="Search"
            />
          </div>
        </div>
      )}

      {windowSize.width > 1036 && (
        <div className="grid grid-cols-filter-wrap items-center">
          <div className="grid grid-cols-filter gap-8">
            {/* Search */}
            <div className="">
              <div>Search</div>
              <div className="relative mt-3">
                <BiSearchAlt2 className="w-4 h-4 abs-center ml-3" />

                {filterSelected.search && (
                  <IoIosClose
                    className="w-6 h-6 abs-center right-3 icon-input cursor-pointer"
                    onClick={() => {
                      onFilterSelected("search", []);
                    }}
                  />
                )}

                <input
                  type="text"
                  value={filterSelected.search}
                  onChange={(e) =>
                    onFilterSelected(
                      "search",
                      e.target.value === "" ? [] : e.target.value
                    )
                  }
                  className="w-full p-3 pl-9 rounded-lg outline-none text-xs"
                  style={{ backgroundColor: "#282F44" }}
                />
              </div>
            </div>
            {/* Genres */}
            <Dropdown
              items={filterData.genres}
              title="genres"
              setSelected={onFilterSelected}
              selectedItem={filterSelected.genres}
              multipleSelect
              searchAble
            />
            {/* Years */}
            <Dropdown
              items={filterData.years}
              title="year"
              setSelected={onFilterSelected}
              selectedItem={filterSelected.year}
              searchAble
            />
            {/* Seasons */}
            <Dropdown
              items={filterData.seasons}
              title="season"
              setSelected={onFilterSelected}
              selectedItem={filterSelected.season}
            />
            {/* Format */}
            <Dropdown
              items={filterData.format}
              title="format"
              setSelected={onFilterSelected}
              selectedItem={filterSelected.format}
              multipleSelect
            />
          </div>
          {/* Todo : Add advanced filter */}
          <div>
            <button className="bg-primary p-3 rounded-sm mt-10 group">
              <FaSlidersH className="group-hover:text-active" />
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between px-2">
        <div className="flex items-center text-sm gap-3">
          {isSelectedEmpty() && <BsTagsFill className="lg:mr-5 text-lg" />}
          {/* Search */}
          {filterSelected.search.length > 0 && (
            <span className="py-1 px-3 bg-primary rounded-md cursor-pointer">
              Search : {filterSelected.search}
            </span>
          )}
          {/* Genre */}
          {filterSelected.genres.length > 0 && (
            <FilterSelectedItem
              items={filterSelected.genres}
              itemKey="genres"
              onRemoveSelected={onRemoveSelected}
            />
          )}

          {/* Seasons */}
          {filterSelected.season.length > 0 && (
            <FilterSelectedItem
              items={filterSelected.season}
              itemKey="season"
              onRemoveSelected={onRemoveSelected}
            />
          )}
          {/* Format */}
          {filterSelected.format.length > 0 && (
            <FilterSelectedItem
              items={filterSelected.format}
              itemKey="format"
              onRemoveSelected={onRemoveSelected}
            />
          )}
          {/* Years */}
          {filterSelected.year.length > 0 && (
            <FilterSelectedItem
              items={filterSelected.year}
              itemKey="year"
              onRemoveSelected={onRemoveSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
