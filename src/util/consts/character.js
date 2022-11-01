import http from 'util/api/base';

// CHARACTER 관련 상수
const CHARACTER_API_ENDPOINT = '/character';

export const getCharacterDetail = async (charcterId, language) => {
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${charcterId}`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
