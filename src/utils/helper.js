export function getCurrentSeason() {
  const currentMonth = new Date().getMonth();
  if (currentMonth >= 1 && currentMonth <= 3) {
    return "WINTER";
  } else if (currentMonth >= 4 && currentMonth <= 6) {
    return "SPRING";
  } else if (currentMonth >= 7 && currentMonth <= 9) {
    return "SUMMER";
  }
  return "FALL";
}

export function getNextSeason() {
  const currentSeason = getCurrentSeason();

  if (currentSeason === "WINTER") {
    return "SPRING";
  } else if (currentSeason === "SPRING") {
    return "SUMMER";
  } else if (currentSeason === "SUMMER") {
    return "FALL";
  }
  return "WINTER";
}
