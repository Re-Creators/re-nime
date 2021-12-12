import { getCurrentSeason } from "./helper";
import { getNextSeason } from "./helper";

function convertDayFromSecond(second) {
  return Math.floor(second / 86400) + " day";
}

function capitalFirstWord(str) {
  if (!str) {
    return "";
  }

  let lowerCaseStr = str.toLowerCase();
  return str.at(0).toUpperCase() + lowerCaseStr.slice(1);
}

export function truncateString(str, num) {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function getDate(status, nextAiringEpisode, startDate, endDate, season) {
  if (startDate.year === null) return null;

  if (status === "RELEASING" && nextAiringEpisode) {
    let airingDay = convertDayFromSecond(nextAiringEpisode.timeUntilAiring);

    return `Episode ${nextAiringEpisode.episode} airing in ${airingDay}`;
  } else if (status === "FINISHED") {
    if (!endDate.year && endDate.year - startDate.year > 1) {
      return `${startDate.year} - ${endDate}`;
    }

    return `${capitalFirstWord(season)} ${startDate.year}`;
  }

  return `${capitalFirstWord(season)} ${startDate.year}`;
}

export function generateSlug(name) {
  const clearedPunctuation = name.replace(/[.,°'/#!$%^&*;×:{}=\-_`~()]/g, "");
  return clearedPunctuation.replaceAll(" ", "-");
}

export function getFilterData(state) {
  if (state === "trending") {
    return {
      title: "Trending",
      variable: {
        page: 1,
        type: "ANIME",
        sort: ["TRENDING_DESC", "POPULARITY_DESC"],
      },
    };
  } else if (state === "this-season") {
    const currentYear = new Date().getFullYear();
    const currentSeason = getCurrentSeason();
    console.log(currentSeason);
    return {
      title: `${currentSeason.toLowerCase()} Anime ${currentYear}`,
      variable: {
        page: 1,
        type: "ANIME",
        seasonYear: currentYear,
        season: currentSeason,
      },
    };
  } else if (state === "next-season") {
    let seasonYear = new Date().getFullYear();
    const nextSeason = getNextSeason();
    const month = new Date().getMonth();

    if (month + 3 > 12) {
      seasonYear = seasonYear + 1;
    }

    return {
      title: `Anime Next Season - Airing ${nextSeason.toLowerCase()} ${seasonYear}`,
      variable: {
        page: 1,
        type: "ANIME",
        seasonYear: seasonYear,
        season: nextSeason,
      },
    };
  }
}

export function transformVariable(key, arr) {
  if (key === "season") {
    return arr.map((item) => item.toUpperCase());
  } else if (key === "format") {
    return arr.map((item) => {
      if (item.toLowerCase() === "tv show") {
        return "TV";
      } else if (item.toLowerCase() === "tv short") {
        return item.toUpperCase().replace(" ", "_");
      }

      return item.toUpperCase();
    });
  }

  return arr;
}
