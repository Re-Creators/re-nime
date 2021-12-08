function convertDayFromSecond(second) {
  return Math.floor(second / 86400) + " day";
}

function capitalFirstWord(str) {
  let lowerCaseStr = str.toLowerCase();
  return str.at(0).toUpperCase() + lowerCaseStr.slice(1);
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
