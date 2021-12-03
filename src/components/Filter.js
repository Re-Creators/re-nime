import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";
import { FaSlidersH } from "react-icons/fa";
import Dropdown from "./Dropdown";
import {
  genresList,
  getYearsList,
  seasonsList,
  formatList,
} from "../data/filterData";
import FilterSelectedItem from "./filters/FilterSelectedItem";

function Filter() {
  const [genres, setGenres] = useState(genresList);
  const [years, setYears] = useState(getYearsList());
  const [seasons, setSeasons] = useState(seasonsList);
  const [format, setFormat] = useState(formatList);
  const [filterSelected, setFilterSelected] = useState({
    search: "",
    genres: [],
    years: [],
    seasons: [],
    format: [],
  });

  function onFilterSelected(key, item) {
    setFilterSelected((oldVal) => {
      oldVal[key] = item;

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
    <div className="mb-8">
      <div className="grid grid-cols-filter-wrap items-center">
        <div className="grid grid-cols-filter gap-8 ">
          {/* Search */}
          <div>
            <div>Search</div>
            <div className="relative mt-3">
              <BiSearchAlt2 className="w-4 h-4 abs-center ml-3" />

              {filterSelected.search && (
                <IoIosClose
                  className="w-6 h-6 abs-center right-3 icon-input cursor-pointer"
                  onClick={() => {
                    onFilterSelected("search", "");
                  }}
                />
              )}

              <input
                type="text"
                value={filterSelected.search}
                onChange={(e) => onFilterSelected("search", e.target.value)}
                className="w-full p-3 pl-9 rounded-lg outline-none text-xs"
                style={{ backgroundColor: "#282F44" }}
              />
            </div>
          </div>
          {/* Genres */}
          <Dropdown
            items={genres}
            title="genres"
            setSelected={onFilterSelected}
            multipleSelect
            searchAble
          />
          {/* Years */}
          <Dropdown
            items={years}
            title="years"
            setSelected={onFilterSelected}
            searchAble
          />
          {/* Seasons */}
          <Dropdown
            items={seasons}
            title="seasons"
            setSelected={onFilterSelected}
          />
          {/* Format */}
          <Dropdown
            items={format}
            title="format"
            setSelected={onFilterSelected}
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
      <div className="mt-8 flex justify-between">
        <div className="flex items-center text-sm gap-3">
          {isSelectedEmpty() && <BsTagsFill className="mr-5 text-lg" />}
          {/* Search */}
          {filterSelected.search && (
            <span className="py-1 px-3 bg-primary rounded-md cursor-pointer">
              Search : {filterSelected.search}
            </span>
          )}
          {/* Genre */}
          {filterSelected.genres.length > 0 && (
            <FilterSelectedItem items={filterSelected.genres} />
          )}

          {/* Seasons */}
          {filterSelected.seasons.length > 0 && (
            <FilterSelectedItem items={filterSelected.seasons} />
          )}
          {/* Format */}
          {filterSelected.format.length > 0 && (
            <FilterSelectedItem items={filterSelected.format} />
          )}
          {/* Years */}
          {filterSelected.years.length > 0 && (
            <FilterSelectedItem items={filterSelected.years} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
