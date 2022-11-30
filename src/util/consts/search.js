import http from 'util/api/base';
import { BASE_IMAGE_URL, w94h141 } from 'util/consts';

const SEARCH_API_ENDPOINT = '/search/multi';

export const NO_IMAGE_URL =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

export const getSearch = async (language, query) => {
  try {
    const response = await http.get({
      url: `${SEARCH_API_ENDPOINT}`,
      params: { language: language, query: query },
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const menuTypeText = (type) => {
  switch (type) {
    case 'tv':
      return 'TV 프로그램';
    case 'movie':
      return '영화';
    case 'person':
      return '인물';
    default:
      return type;
  }
};

export const mergeData = (item) => {
  item.title = item.name ? item.name : item.title;
  item.poster_path = item.profile_path ? item.profile_path : item.poster_path;
  item.poster_path = item.poster_path
    ? `${BASE_IMAGE_URL}${w94h141}${item.poster_path}`
    : `${NO_IMAGE_URL}`;
  item.overview = item.known_for
    ? item.known_for.map((e) => `${e.title}, `)
    : item.overview;
  return item;
};
