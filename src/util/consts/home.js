import http from 'util/api/base';

const DISCOVER_API_ENDPOINT = '/discover';
const TRENDING_API_ENDPOINT = '/trending';
const UPCOMING_API_ENDPOINT = '/movie/upcoming';

export const getDiscover = async (type, params) => {
  try {
    const response = await http.get({
      url: `${DISCOVER_API_ENDPOINT}/${type}`,
      params: params,
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getTrending = async (mediaType, timeWindow, language) => {
  try {
    const response = await http.get({
      url: `${TRENDING_API_ENDPOINT}/${mediaType}/${timeWindow}`,
      params: { language: language },
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUpcoming = async (language) => {
  try {
    const response = await http.get({
      url: `${UPCOMING_API_ENDPOINT}`,
      params: { language: language },
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUpcomingVideo = async (id) => {
  try {
    const response = await http.get({
      url: `movie/${id}/videos`,
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const typeText = (type) => {
  switch (type) {
    case 'flatrate':
      return '스트리밍';
    case 'tv':
      return 'TV';
    case 'rent':
      return '대여';
    case 'theatres':
      return '극장';
    case 'movie':
      return '영화';
    case 'day':
      return '오늘';
    case 'week':
      return '이번 주';
    default:
      return type;
  }
};
