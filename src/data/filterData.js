const genresList = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Hentai",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

const seasonsList = ["Summer", "Spring", "Winter", "Fall"];

const formatList = [
  "TV Show",
  "OVA",
  "TV Short",
  "ONA",
  "Movie",
  "Music",
  "Special",
];

const getYearsList = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear + 1; year >= 1940; year--) {
    years.push(year);
  }
  return years;
};

const filterData = {
  genres: genresList,
  seasons: seasonsList,
  format: formatList,
  years: getYearsList(),
};

export default filterData;
