import http from 'util/api/base';

const SEARCH_API_ENDPOINT = '/search/multi';

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
