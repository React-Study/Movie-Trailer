import http from 'util/api/base';

const DISCOVER_API_ENDPOINT = '/discover';
const TRENDING_API_ENDPOINT = '/trending';

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
