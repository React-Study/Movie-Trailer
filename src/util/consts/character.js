import http from 'util/api/base';

// CHARACTER 관련 상수
const CHARACTER_API_ENDPOINT = '/person';

export const getCharacter = async (pageName, language) => {
  console.info(pageName)
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${pageName}`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

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

export const getCharacterCreidit = async (charcterId, language) => {
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${charcterId}/translations`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};